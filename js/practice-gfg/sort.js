function insertion_sort (arr, n) {
  let key;
  for (let i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

// function selection_sort(arr, n){
//     let min_idx;
//     for(let i = 0; i < n - 1; i++){
//         min_idx = i;
//         for(let j = i; j < n; j++){
//             if(arr[j] < arr[min_idx]){
//                 min_idx = j;
//             }
//         }
//         let temp = arr[min_idx];
//         arr[min_idx] = arr[i];
//         arr[i] = temp;
//     }
// }

function merge (arr, l, m, r) {
  let n1 = m - l + 1;
  let n2 = r - m;
  // Create temp array
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) L[i] = arr[l + i];
  for (let j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // Initial index of first subarray
  var i = 0;

  // Initial index of second subarray
  var j = 0;

  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    k++;
  }

  // Copy the remaining elements of
  // L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of
  // R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

function merge_sort (arr, l, r) {
  if (l >= r) return;
  let m = l + parseInt((r - l) / 2);
  merge_sort(arr, l, m);
  merge_sort(arr, m + 1, r);
  merge(arr, l, m, r);
}

// function bubble_sort(arr, n){
//     for (let i = 0; i < n - 1; i++){
//         for (let j = 0; j < n -i -1; j++){
//             if (arr[j] > arr[j+1]){
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
// }

let ar = [ 12, 5, 11, 6, 13, 7 ];
// bubble_sort(ar, ar.length);
// merge_sort(ar, 0, ar.length - 1);
// selection_sort(ar, ar.length);

insertion_sort(ar, ar.length);

console.log(ar);

for (let i = 1; i < n; i++) {
  let key = arr[i];
  j = i - 1;
  while (j >= 0 && arr[j] > key) {
    arr[j + 1] = arr[j];
    j--;
  }
  arr[j + 1] = key;
}


const program = require('./program');

// let n = program.factorial(8);
// console.log(n); // 40320

// program.factors(315);

// program.primeFactors(315);

// program.findGCD(6,8);

// program.findLCM(6,8);

let A = [1, 2, 3, 4, 5, 6];
// console.log(A);
// program.reverseList(A, 0, 5);
// console.log(A);

// program.revreseNumber(213);

// program.reverseString("test string", "i");
// program.reverseString("test string", "e");

// program.reverseCharacterOfWord("test string", "i");
// program.reverseCharacterOfWord("test string", "e");

// program.reverseWord("test string");

// let a = [-13, -3, -25, -20, -3, -16, -23, -12, -5, -22, -15, -4, -7];
// let a = [-2, -3, 4, -1, -2, 1, 5, -3];

// const result = program.iterativeBinarySearch(-2, a);
// const result = program.recursiveBinarySearch(3, A, 0, A.length - 1);
// console.log(result);

// const result = program.maxSubArraySum(a,a.length);
// console.log("Maximum contiguous sum is", result); 

// program.printDuplicates(a);

// let set = [ 3, 34, 4, 12, 5, 2 ];
// let sum = 9;
// let set = [0, -1, 2, -3, 1];
// let sum = -2;
// let set = [ 1, 4, 45, 6, 10, -8 ]
// let sum = 16;
// let n = set.length;
// if (program.subSetSum(set, n, sum) == true)
//     process.stdout.write("Found a subset with given sum" + "\n");
// else
//     process.stdout.write("No subset with given sum" + "\n");
// if (program.subSetSumHasTwoCandidates(set, n, sum) == true)
//     process.stdout.write("Found a subset with given sum" + "\n");
// else
//     process.stdout.write("No subset with given sum" + "\n");


// let str_0 = ')'; let str_1 = '()'; let str_2 = '()[]{}'; let str_3 = '(]'; let str_4 = '([)]'; let str_5 = '{[]}'; let str_6 = '{[]1}';
// const isBalanced = program.balancedParenthesis(str_6);
// console.log(isBalanced);

let arr = [ 12, 5, 11,  6, 13, 7 ];
// console.log(  "Given array is <br>");
// program.printArray(arr, arr.length);

// program.bubbleSort(arr, arr.length);

// program.mergeSort(arr, 0, arr.length - 1);

program.quickSort(0, arr.length - 1, arr);

// program.oneLoopSort(arr);

console.log( "<br>Sorted array is <br>");
program.printArray(arr, arr.length);