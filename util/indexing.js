const csvtojson = require('csvtojson')
const fs = require('fs');

const ftirDatasetforCompairing = {}
const mappingData = {}
const threshold = 0.3;

// read user csv file data 
const readUserData = async (filePath) => {
    const csvFilePath = filePath
    const csv = await csvtojson({
        noheader: true,
        delimiter: ','
    }).fromFile(csvFilePath)

    const field1 = []
    const field2 = []

    // convert json field data to array
    csv.forEach((element, index) => {
        if (index > 0) {
            field1.push(element.field1)
            field2.push(element.field2)
        }
    })
    return { field1, field2 }

}

// read ftir_library csv file data
const readFtirData = async (filePath) => {
    const csvFilePath = filePath
    const csv = await csvtojson({
        noheader: true,
        delimiter: ','
    }).fromFile(csvFilePath)

    // convert json field data to array
    csv
        .forEach((element, index) => {
            // console.log(index)
            if (ftirDatasetforCompairing.hasOwnProperty(element.field3)) {
                ftirDatasetforCompairing[element.field3].intensity.push(element.field1)
                ftirDatasetforCompairing[element.field3].wavenumber.push(element.field2)
            } else {
                ftirDatasetforCompairing[element.field3] = {
                    intensity: [element.field1],
                    wavenumber: [element.field2]
                }
            }
        })

    return ftirDatasetforCompairing
    // .catch(console.log)
}

// read ftir_metadata csv file data
const readFtirMetaData = async (filePath) => {
    const csvFilePath = filePath
    const csv = await csvtojson({
        noheader: true,
        delimiter: ','
    }).fromFile(csvFilePath)

    // convert json field data to array

    csv
        .forEach(element => {
            // console.log(element)
            mappingData[element.field27] = {
                spectrum_type: element.field4,
                spectrum_identity: element.field1
            }
        })
    // .catch(console.log)
    return mappingData
}

const ftir_library = './util/ftir_library.csv'
const ftir_metadata = './util/ftir_metadata.csv'
const findings = './util/csvjson.json'

function compairvaluePoints(field1, field2) {
    return new Promise((resolve, reject) => {
        readFtirData(ftir_library).then(ftirData => {
            // console.log(ftirData)
            readFtirMetaData(ftir_metadata).then(metaData => {
                // console.log(Object.keys(ftirData).length,metaData)
                const resultDict = {}
                // loop through the ftirDatasetforCompairing and find the matching field1 and field2 with the 0.1 threshold
                for (let i = 0; i < Object.keys(ftirData).length; i++) {
                    // console.log(i)
                    // console.log(
                    //     ftirData[Object.keys(ftirData)[i]].wavenumber.length,
                    //     ftirData[Object.keys(ftirData)[i]].intensity.length
                    // )
                    // compair the field1 and field2 with the 0.1 threshold
                    let globalThresholdSum = 0
                    // console.log(field1, field2)
                    for (let j = 0; j < field1.length; j++) {
                        const userinput1 = parseFloat(field1[j])
                        const userinput2 = parseFloat(field2[j])
                        const ftirData1 = parseFloat(ftirData[Object.keys(ftirData)[i]].wavenumber[j])
                        const ftirData2 = parseFloat(ftirData[Object.keys(ftirData)[i]].intensity[j])

                        // console.log(j)
                        // console.log(parseInt(field1[j]) ,parseInt(ftirData[Object.keys(ftirData)[i]].wavenumber[j]))
                        globalThresholdSum += Math.abs(userinput1 - ftirData1) / Math.max(userinput1, ftirData1)
                        globalThresholdSum += Math.abs(userinput2 - ftirData2) / Math.max(userinput2, ftirData2)
                    }
                    resultDict[i] = globalThresholdSum / field1.length
                }

                // console.log(globalThresholdSum/field1.length)
                // console.log(resultDict)

                // find min value and give its index 
                let min = Math.min(...Object.values(resultDict))
                let index = Object.keys(resultDict).find(key => resultDict[key] === min)
                // console.log(resultDict)
                console.log(index, min)
                console.log(metaData[index.toString()])
                if (min < threshold) {
                    // console.log('not found')
                    reject(-1)
                } else {
                    // load the data from json file and find text in it 
                    let rawdata = fs.readFileSync(findings);
                    let data = JSON.parse(rawdata);
                    // console.log(data);

                    const filterationDataResult = []
                    // find if spectrum_identity is present in the removal attribute
                    data.forEach(element => {
                        // console.log(element.Removal)
                        if (element.Removal.includes(metaData[index.toString()].spectrum_identity)) {
                            filterationDataResult.push(element)
                        }
                    })

                    resolve({
                        ...metaData[index.toString()],
                        filterationMethods:{
                            ...filterationDataResult,
                        },
                        ...ftirData[index.toString()]
                    })

                }
            })
        })
    })
}

module.exports = {
    ftirDatasetforCompairing,
    mappingData,
    compairvaluePoints
}

