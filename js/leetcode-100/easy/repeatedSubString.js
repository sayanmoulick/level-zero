/**
 * @param {string} s
 * @return {boolean}
 */

const validatePattern = (idx, substr, s) => {
    let k = idx;
    let repeatedStr = '';
    
    while ( k < s.length ){
        repeatedStr += substr;
        k = k + idx + 1; 
    }

    // console.log(repeatedStr);

    return repeatedStr === s;
}

const repeatedSubstringPattern = (s) => {
    let substr = '';
    let flag = false;

    for (let i = 0; i < Math.floor(s.length / 2); i++){
        substr += s[i]; 
        if (validatePattern(i, substr, s)) {
            flag = true;
            break;
        }
    }

    return flag;
}

var repeatedSubstringPatternI = function(s) {
    const n = s.length;
    for (let i = 1; i <= n / 2; i++) {
        if (n % i === 0) {
            const substring = s.slice(0, i);
            let repeated = "";
            for (let j = 0; j < n / i; j++) {
                repeated += substring;
            }
            if (repeated === s) return true;
        }
    }
    return false;
};

var repeatedSubstringPatternII = function(s) {
    const doubled = s + s;
    const sub = doubled.slice(1, -1);
    return sub.includes(s);
};

var repeatedSubstringPatternIII = function(s) {
    const n = s.length;

    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0 && s.slice(0, i).repeat(n / i) === s) {
            return true;
        }
    }
    
    return false;    
};

var repeatedSubstringPatternIV = function(s) {
    return (s + s).substring(1, s.length * 2 - 1).includes(s);    
};

repeatedSubstringPattern('abcabcabcab')