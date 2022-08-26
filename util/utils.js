const { ftirDatasetforCompairing, mappingData } = require('./indexing')

// read user csv file data
// console.log(ftirDatasetforCompairing)


function compairvaluePoints(field1, field2){
    // loop through the ftirDatasetforCompairing and find the matching field1 and field2 with the 0.1 threshold
    for (let i = 0; i < ftirDatasetforCompairing.length; i++) {
        ftirDatasetforCompairing[i.toString()].forEach(element => {
            
        if (ftirDatasetforCompairing[i].field1 === field1 && ftirDatasetforCompairing[i].field2 === field2) {
            return ftirDatasetforCompairing[i].valuePoints
        }
    }