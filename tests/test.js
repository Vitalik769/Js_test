var par2;
var par3;

function testOne(par2, par3) {
    var result = 0;
    var var1 = 0;

    if (par3 === 47) {
        result = 47;
        if (var1 < result) {
            result = result + var1;
            var1 = var1 + 3;
        } else {
            return result
        }
    } else if (par3 === 68) {
        result = 68;
    } else if (par3 === 90) {
        result = 90;
    } else {
        result = 91;
        var1 = var1 + 3;
    }
    return result
}

// var testResult = testOne(par2, 47); 
// console.log(testResult);
// var testResult = testOne(par2, 100); 
// console.log(testResult);
// var testResult = testOne(par2, 68); 
// console.log(testResult);
// var testResult = testOne(par2, 90); 
// console.log(testResult);

module.exports = testOne; 

