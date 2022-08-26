const csvtojson = require('csvtojson')

const ftirDatasetforCompairing = {}
const mappingData = {}


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
        .forEach(element => {
            // console.log(element)
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

readFtirData(ftir_library)
.then(data => {
    console.log(data)
})
readFtirMetaData(ftir_metadata)

// readFtirMetaData(ftir_metadata)



module.exports = {
    ftirDatasetforCompairing,
    mappingData
}