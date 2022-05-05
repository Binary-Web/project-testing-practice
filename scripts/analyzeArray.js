function analyzeArray(arr) {
    arr.sort((a, b) => {return a- b});
    let total = 0;
    arr.forEach(element => {
        total = total + element;
    })
    const temp = arr.length - 1;
    const ave = Math.round(total / arr.length);
    
    return {
        min: arr[0],
        max: arr[temp],
        ave: ave,
        length: arr.length,
    }
}
module.exports = analyzeArray;