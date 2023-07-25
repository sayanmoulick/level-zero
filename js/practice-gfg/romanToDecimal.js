class Solution {
  romanToDecimal (str) {
    //code here
    let romanVal = {
      I: '1',
      V: '5',
      X: '10',
      L: '50',
      C: '100',
      D: '500',
      M: '1000'
    };
    //   let decimalVal = 0;
    //   for (let i=0; i<str.length; i++){
    //       if (romanVal[str[i+1]] && romanVal[str[i+1]] > romanVal[str[i]]){
    //         decimalVal -= parseInt(romanVal[str[i]]);
    //       }else{
    //         decimalVal += parseInt(romanVal[str[i]]);
    //       }

    //    }
    let decimalVal = 0;
    let prevVal = 0;
    for (let i = str.length - 1; i >= 0; i--) {
      if (parseInt(romanVal[str[i]]) < prevVal)
        decimalVal -= parseInt(romanVal[str[i]]);
      else decimalVal += parseInt(romanVal[str[i]]);
      prevVal = parseInt(romanVal[str[i]]);
    }
    return decimalVal;
  }
}

let obj = new Solution();
let res = obj.romanToDecimal('MDCLXXXVI');
console.log(res);
