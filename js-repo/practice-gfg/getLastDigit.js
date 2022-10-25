// class Solution {
//     getLastDigit(a, b) {
//         //code here
//         let len_a = a.length;
//         let len_b = b.length;
//         // console.log(len_a, len_b);
//         // if a and b both are 0
//         if (len_a == 1 && len_b == 1 &&
//                     b[0] == '0' && a[0] == '0')
//             return 1;

//         // if exponent is 0
//         if (len_b == 1 && b[0] == '0')
//             return 1;

//         // if base is 0
//         if (len_a == 1 && a[0] == '0')
//             return 0;

//         let exp = (this.Modulo(4, b) === 0) ? 4 :
//                                 this.Modulo(4, b);

//         console.log(exp);
//         let res = Math.pow(a[len_a - 1] - '0', exp);
//         console.log(res);

//         return res % 10;
//     }
//     Modulo(a, b){
//         console.log(a, b);
//         let mod = 0;

//         for (let i = 0; i < b.length; i++)
//             mod = (mod * 10 + b[i] - '0') % a;

//         console.log(mod);
//         return mod; // return modulo
//     }
// }

// let obj = new Solution();
// console.log(obj.getLastDigit('3', '10'));

var asciiZero = '0'.charCodeAt(0);
var findModulo = function (base, exponent) {
  var mod = 0;
  for (var i in exponent) {
    //mod = (mod*10 + b[i] - '0')%a;
    mod = (mod * 10 + exponent.charCodeAt(i) - asciiZero) % base;
  }
  return mod;
};

var lastDigit = function (str1, str2) {
  if (str1.length === 1 && str2.length === 1 && str1 === '0' && str2 === '0') {
    return 0;
  }

  if (str2.length === 1 && str2 === '0') {
    return 1;
  }

  if (str1.length === 1 && str1 === '0') {
    return 0;
  }

  var e = findModulo(4, str2);
  if (e === 0) {
    e = 4;
  }

  var res = Math.pow(str1[str1.length - 1].charCodeAt(0) - asciiZero, e);

  // Return last digit of result
  return res % 10;
};

let nom = lastDigit('6', '2');
console.log(nom);
