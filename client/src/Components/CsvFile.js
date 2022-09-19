import { useState } from 'react';
import "../Style/componets/csvFile.css";
import "../Style/global/commonclasses.css";



export default function CsvFile({setCsvData}){
    const processCSV = (str, delim=',') => {
        str = str.trim();
        str = str.replace('\r','');
        const headers = str.slice(0,str.indexOf('\n')).split(delim);
        const rows = str.slice(str.indexOf('\n')+1).split('\n');

        const newArray = rows.map( row => {
            const values = row.split(delim);
            const eachObject = headers.reduce((obj, header, i) => {
                obj[header] = values[i];
                return obj;
            }, {})
            return eachObject;
        })

        // console.log(newArray);

        setCsvData({
            field1: newArray
                .map((item) => parseFloat(item.wavenumber))
                .filter(x => !isNaN(x)),
            field2: newArray
                .map((item) => parseFloat(item.intensity))
                .filter(x => !isNaN(x)),
        })
    }

    const readCsv = (fileName) => {
        const file = fileName;
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function(e) {
            const text = e.target.result;
            // console.log(text);
            processCSV(text)
        }
    }

    return(
        <input
            type='file'
            accept='.csv'
            id='csvFile'
            onChange={(e) => {
                readCsv(e.target.files[0])
            }}
        >
        </input>
    );

}
