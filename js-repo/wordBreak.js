// class Solution {

//     breakWord(n, A) {    
//         // console.log('--------')
//         // console.log(n)
//         // console.log(A)
//         if(A.length === 0){
//             // console.log('yes')
//             return 0;
//         }
//         this.breakWord(n+1, A.slice(1))
//       }


//     checkWordBreak(n, A, B) {
//         // if we have already solved this subproblem, simply return the result from the cache
//         // if(memoize[n] != 0)
//         //   return memoize[n];
    
//         // console.log('--------')
//         console.log(A, n)
//         if(A.length === 0){
//             console.log('-')
//             return 0;
//         }            

//         // console.log(n, A, A[0], A.slice(1))
//         if(!B.includes(A[0]))
//             this.checkWordBreak(n+1, A.slice(1), B);

//         else if(B.includes(A[0]) && B.includes(A.slice(1))){
//             console.log('oh')
//             return 1;
//         }

//         else if(B.includes(A[0]) || !B.includes(A.slice(1))){
//             console.log('coming here')
//             this.checkWordBreak(n+1, A.slice(1), B);
//         }
        
//         else if(!B.includes(A[0]) || !B.includes(A.slice(1))){
//             console.log('hello')
//             return 0;
//         }
//       }

//     wordBreak(A,B){
//         //code here
//         if(A.length === 0 || B.length === 0)
//           return 0;

//         // return this.breakWord(0, A)

//         // let memoize = 0;
//         return this.checkWordBreak(0, A, B);


//         // let memoize = ''
//         // let idx = 0;
//         // let dictWordIndex = 0
//         // while (idx < A.length){
//             // memoize += A.split("")[idx];
//             // if(memoize === B[dictWordIndex])
//             // {
//             //     dictWordIndex += 1
//             //     memoize = ''
//             // }
//             // idx += 1
//         // }
//         // if (memoize.length === 0)
//         //     return 1;
//         // else
//         //     return 0;
//       }
// }

// #################################################################################################

// class Solution {
//     dictionaryContains(word, dictionary) {
//         console.log(word)
//         var size = dictionary.length;
//         for (var i = 0; i < size; i++)
//             if (dictionary[i]===(word))
//                 return true;
//         return false;
//     }
//   wordBreak(A,B){
//     //code here
//     var size = A.length;
//     if (size == 0)
//         return 1;

//     var memoize = Array(size + 1).fill(0);

//     for (var i = 1; i <= size; i++) {

//         if (memoize[i] == 0 && this.dictionaryContains(A.substring(0, i), B)){
//             memoize[i] = 1;
//         }

//         if (memoize[i] == 1) {
//             if (i == size)
//                 return 1;

//             for (var j = i + 1; j <= size; j++) {
//                 if (memoize[j] == 0 && this.dictionaryContains(A.substring(i, j), B)){
//                     memoize[j] = 1;
//                 }

//                 // If we reached the last character
//                 if (j == size && memoize[j] == 1)
//                     return 1;
//             }
//         }
//     }
//     return 0;
//   }
// }

// #################################################################################################

class Solution {
    solve(idx, dict, text, dp) {
        const MOD = 1000000007;
        let len = text.length;

        // break condition if no substring possible
        if (idx == len) {
            return 1;
        }

        // return if already memoized current state
        if (dp[idx] != -1) {
            return dp[idx];
        }

        // stores computation result for current state
        let result = 0;

        // initializing current segment starting from idx
        let segment = "";
        for (let i = idx; i < len; i++) {
            segment += text[i];

            if (dict.includes(segment)) {
                let numOfArrangements = this.solve(i + 1, dict, text, dp);
                // update result for current state
                result += numOfArrangements;
                result %= MOD;
            }
        }

        // memoize current state , so can be reused next time
        dp[idx] = result;

        // return current computed state
        return dp[idx];
    }

    wordBreak(txt, dictionary) {
        const MAXN = txt.length + 1;

        // initializing the dp states, assuming -1 as uncomputed state
        let dp = Array.from({length: MAXN}, (_, idx) => -1);

        // check if segmentation is possible
        let totalArrangements = this.solve(0, dictionary, txt, dp);

        return totalArrangements;
    }
}

let obj = new Solution();
// let op = obj.dec2bin(256);
// console.log(op);
const B = [ "i", "like", "sam","sung", "samsung", "mobile","ice","cream", "icecream","man", "go", "mango" ]
const A = "ilikesa"
// const B = [ "ab", "bcd", "b", "a" ]
// const A = "abcd"

const res = obj.wordBreak(A,B);
console.log(res)

// NOTE: var jumps = Array.from({length: n}, (_, i) => 0);

// const MOD = 1000000007;

// function solve(idx, dict, text, dp) {
//     console.log(dict)
//     let len = text.length;

//     // break condition if no substring possible
//     if (idx == len) {
//         return 1;
//     }

//     // return if already memoized current state
//     if (dp[idx] != -1) {
//         return dp[idx];
//     }

//     // stores computation result for current state
//     let result = 0;

//     // initializing current segment starting from idx
//     let segment = "";
//     for (let i = idx; i < len; i++) {
//         // adding ith character to the segment
//         segment += text[i];

//         // checking if segment exists in the dictionary
//         if (dict.includes(segment)) {
//             // segmenting at this index
//             // and getting number of possible segmentation arrangements
//             // for  substring [i+1,len)
//             let numOfArrangements = solve(i + 1, dict, text, dp);
//             // update result for current state
//             result += numOfArrangements;
//             result %= MOD;
//         }
//     }

//     // memoize current state , so can be reused next time
//     dp[idx] = result;

//     // return current computed state
//     return dp[idx];
// }

// function wordBreak(txt, dictionary) {
//     // // hashmap to store to dictionary words
//     // let dict = {};

//     // // adding all dictionary words to an hash map
//     // // for faster searching.
//     // for (let i = 0; i < dictionary.length; i++) {
//     //     dict[i] = dictionary[i];
//     // }

//     const MAXN = txt.length + 1;

//     // initializing the dp states, assuming -1 as uncomputed state
//     let dp = Array.from({length: MAXN}, (_, idx) => -1);

//     // check if segmentation is possible
//     let totalArrangements = solve(0, dictionary, txt, dp);

//     return totalArrangements;
// }

// const B = [ "ab", "bcd", "b", "a" ]
// const A = "abcd"

// const B = [ "i", "like", "sam","sung", "samsung", "mobile","ice","cream", "icecream","man", "go", "mango" ]
// const A = "ilike"

// const res = wordBreak(A,B);
// console.log(res)