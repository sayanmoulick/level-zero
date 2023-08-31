/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let res = '';
    
    while(columnNumber) {
        let rem = columnNumber % 26;
        if (rem === 0) {
            res = 'Z' + res;
            columnNumber = Math.floor(columnNumber / 26) - 1;
        }else {
            let ch = String.fromCharCode('A'.charCodeAt(0) + rem - 1);
            columnNumber = Math.floor(columnNumber / 26);
            res = ch + res;
        }
    }

    return res;
};

convertToTitle(701);