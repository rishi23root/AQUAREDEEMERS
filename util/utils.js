const csvtojson = require('csvtojson')
const { ftirDatasetforCompairing, mappingData } = require('./indexing')

// read user csv file data
// readFtirData.then(console.log)
console.log(ftirDatasetforCompairing)

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


// readUserData('./util/testdata.csv')
//     .then((field1, field2) => {
//         // console.log(field1, field2)
//         // compairvaluePoints()
//     })

// module.exports = { compairvaluePoints }