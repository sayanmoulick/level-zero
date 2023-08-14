function factorial (num) {
  if (num === 0 || num === 1) {
    return num;
  }
  return num * factorial(num - 1);
}

function factors (num) {
  let i = 1;
  while (i <= num) {
    if (num % i == 0) {
      process.stdout.write(i + ' ');
    }
    i++;
  }
  process.stdout.write('\n');
}

function primeFactors (n) {
  // Print the number of 2s that divide n
  while (n % 2 == 0) {
    process.stdout.write(2 + ' ');
    n = Math.floor(n / 2);
  }

  // n must be odd at this point. So we can skip one element (Note i = i +2)
  for (let i = 3; i <= Math.floor(Math.sqrt(n)); i = i + 2) {
    // While i divides n, print i and divide n
    while (n % i == 0) {
      process.stdout.write(i + ' ');
      n = Math.floor(n / i);
    }
  }

  // This condition is to handle the case when n is a prime number greater than 2
  if (n > 2) process.stdout.write(n + '\n');
}

function findGCD (num1, num2) {
  let hcf;
  for (let i = 1; i <= num1 && i <= num2; i++) {
    // check if is factor of both integers
    if (num1 % i == 0 && num2 % i == 0) {
      hcf = i;
    }
  }
  console.log(`The GCD of ${num1} and ${num2} is ${hcf}`);
}

function findLCM (num1, num2) {
  let min_num = num1 > num2 ? num1 : num2;
  while (true) {
    if (min_num % num1 == 0 && min_num % num2 == 0) {
      console.log(`The LCM of ${num1} and ${num2} is ${min_num}`);
      break;
    }
    min_num++;
  }
}

function reverseList (arr, start, end) {
  while (start < end) {
    [ arr[start], arr[end] ] = [ arr[end], arr[start] ];
    start += 1;
    end -= 1;
  }
  // return arr;
}

function revreseNumber (num) {
  let rev_num = 0;
  while (num != 0) {
    rev_num = rev_num * 10 + num % 10;
    num = parseInt(num / 10);
  }
  console.log(rev_num);
}

function reverseString (str_, type_) {
  switch (type_) {
    case 'i':
    case 'I':
      console.log(str_.split('').reverse().join(''));
      break;
    case 'e':
    case 'E':
      let rev_str = '';
      let k = str_.length - 1;
      while (k >= 0) {
        rev_str += str_[k];
        k--;
      }
      console.log(rev_str);
      break;
    default:
      console.log('Define the type of conversion (i or e) as 2nd parameter');
  }
}

function reverseCharacterOfWord (str_, type_) {
  switch (type_) {
    case 'i':
    case 'I':
      let temp_str = str_.split('').reverse().join('');
      console.log(temp_str.split(' ').reverse().join(' '));
      break;
    case 'e':
    case 'E':
      let st = [];

      // Traverse given string and push all characters to stack until we see a space.
      for (let i = 0; i < str_.length; i++) {
        if (str_[i] != ' ') st.push(str_[i]);
        else {
          // When we see a space, we print contents of stack.
          while (st.length > 0) {
            var ele = st.pop(); // stack is now [2]
            // console.log(ele);
            process.stdout.write(ele + '');
          }
          process.stdout.write(' ');
        }
      }
      //  Since there may not be space after last word.
      while (st.length > 0) {
        var ele = st.pop(); // stack is now [2]
        // console.log(ele);
        process.stdout.write(ele + '');
      }
      process.stdout.write('\n');
      break;
    default:
      console.log('Define the type of conversion (i or e) as 2nd parameter');
  }
}

function reverseWord (s) {
  // Reversing individual words as
  // explained in the first step
  s = s.split(' ');
  let ans = '';
  for (let i = s.length - 1; i >= 0; i--) {
    ans += s[i] + ' ';
  }
  console.log(ans);
}

function iterativeBinarySearch (key, arr) {
  let start = 0;
  let end = arr.length;
  arr.sort();
  console.log(arr);
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    // if middle element is the target, return middle index
    if (arr[mid] === key) {
      return mid;
      // if middle element is smaller, move the start point to mid + 1
    } else if (arr[mid] < key) {
      start = mid + 1;
      // if middle element it greater, move the end point to mid - 1
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

function recursiveBinarySearch (key, arr, start, end) {
  // base condition
  if (start > end) return -1;
  // find the middle index
  let mid = Math.floor(start + (end - start) / 2);

  // if middle element is the target, return the middle index
  if (arr[mid] === key) return mid;

  // if middle element is smaller than target, move the start index to mid + 1
  if (key > arr[mid]) {
    return recursiveBinarySearch(key, arr, mid + 1, end);
  } else {
    // if middle element is greater than target, move the end index to mid - 1
    return recursiveBinarySearch(key, arr, start, mid - 1);
  }
}

function linearSearch (key, arr) {}

function printDuplicates (arr) {
  dict_ = {};
  arr.forEach((ele) => {
    if (dict_[ele]) dict_[ele] += 1;
    else dict_[ele] = 1;
  });
  for (const [ key, value ] of Object.entries(dict_)) {
    // if frequency is more than 1 print the element
    if (value > 1) process.stdout.write('{' + key + ' : ' + value + '} ');
  }
  process.stdout.write('\n');
}

function maxSubArraySum (arr, arrSize) {
  // console.log(arr, arrSize);
  max_so_far = 0;
  max_ending_here = 0;
  for (let i = 0; i < arrSize; i++) {
    max_ending_here = max_ending_here + arr[i];
    if (max_ending_here < 0) {
      max_ending_here = 0;
    } else if (max_so_far < max_ending_here) {
      /* Do not compare for all elements.  
        Compare only when max_ending_here > 0 */
      max_so_far = max_ending_here;
    }
  }
  return max_so_far;
}

function largestSubArray01 (params) {}

function subSetSum (set, n, sum) {
  // Base Cases
  if (sum == 0) return true;
  if (n == 0) return false;

  // If last element is greater than sum,
  // then ignore it
  if (set[n - 1] > sum) return subSetSum(set, n - 1, sum);

  /* else, check if sum can be obtained
    by any of the following
    (a) including the last element
    (b) excluding the last element */
  return subSetSum(set, n - 1, sum) || subSetSum(set, n - 1, sum - set[n - 1]);
}

function subSetSumHasTwoCandidates (A, arr_size, sum) {
  /* Sort the elements */
  A.sort();

  /* Now look for the two candidates in
    the sorted array*/
  let l = 0;
  let r = arr_size - 1;
  while (l < r) {
    if (A[l] + A[r] == sum) return 1;
    else if (A[l] + A[r] < sum)
      l++; // A[i] + A[j] > sum
    else r--;
  }
  return 0;
}

function substringWithEqual012 (str_) {}

function balancedParenthesis (str_) {
  // create a hashMap to store the valid match
  const bracketsMap = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  // create a stack data structure with array
  let st = [];

  // loop through the string
  for (let char_ of str_) {
    //if character is in the hashMap, push the character in the stack
    if (bracketsMap[char_]) {
      st.push(char_);
      // when stack is not empty and the topmost item of the stack key in the hashMap is equal to the character
    } else if (st.length > 0 && bracketsMap[st[st.length - 1]] === char_) {
      // removed the last element
      st.pop();
    } else if (st.length === 0) {
      return false;
    }
    // else{
    //     //if the character not found in the hashmap return false
    //     return false;
    // }
  }
  //when stack is empty, it means all matching brackets are found
  return st.length === 0;
}

function swap (arr, xp, yp) {
  let temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function bubbleSort (arr, n) {
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

function insertionSort (arr, n) {
  // 1: Iterate from arr[1] to arr[n] over the array.
  // 2: Compare the current element (key) to its predecessor.
  // 3: If the key element is smaller than its predecessor,
  //     compare it to the elements before.
  //     Move the greater elements one position up to make space for the swapped element.

  let i, key, j;
  for (i = 1; i < n; i++) {
    key = arr[i];
    j = i - 1;

    /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

function selectionSort (arr, n) {
  var i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++) if (arr[j] < arr[min_idx]) min_idx = j;
    // Swap the found minimum element with the first element
    swap(arr, min_idx, i);
  }
}

function merge (arr, l, m, r) {
  var n1 = m - l + 1;
  var n2 = r - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (var i = 0; i < n1; i++) L[i] = arr[l + i];
  for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

  // console.log("***********");
  // for (var i = 0; i < n1; i++)
  //     console.log(L[i]);
  // console.log("----------");
  // for (var j = 0; j < n2; j++)
  //     console.log(R[j]);
  // console.log("***********");

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  var i = 0;
  // Initial index of second subarray
  var j = 0;
  // Initial index of merged subarray
  var k = l;

  while (i < n1 && j < n2) {
    // console.log(L[i], R[j]);
    if (L[i] <= R[j]) {
      arr[k] = L[i];
      i++;
    } else {
      arr[k] = R[j];
      j++;
    }
    // console.log(arr[k]);
    k++;
  }

  // Copy the remaining elements of L[], if there are any
  while (i < n1) {
    arr[k] = L[i];
    i++;
    k++;
  }

  // Copy the remaining elements of R[], if there are any
  while (j < n2) {
    arr[k] = R[j];
    j++;
    k++;
  }
}

// l is for left index and r is right index of the sub-array of arr to be sorted
function mergeSort (arr, l, r) {
  if (l >= r) {
    return; //returns recursively
  }
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr, l, m);
  mergeSort(arr, m + 1, r);
  // printArrayLR(arr, l, r);
  merge(arr, l, m, r);
}

function printArray (A, size) {
  for (let i = 0; i < size; i++) console.log(A[i] + ' ');
}

function printArrayLR (A, l, r) {
  for (let i = l; i <= r; i++) console.log(A[i] + ' ');
  console.log('------');
}

function partition (start, end, array) {
  // Initializing pivot's index to start
  let pivot_index = start;
  let pivot = array[pivot_index];

  // This loop runs till start pointer crosses end pointer, and when it does we swap the pivot with element on end pointer
  while (start < end) {
    // Increment the start pointer till it finds an element greater than  pivot
    while (start < array.length && array[start] <= pivot) start += 1;

    // Decrement the end pointer till it finds an element less than pivot
    while (array[end] > pivot) end -= 1;

    // If start and end have not crossed each other, swap the numbers on start and end
    if (start < end) {
      let temp = array[start];
      array[start] = array[end];
      array[end] = temp;
    }
    // [array[start], array[end]] = [array[end], array[start]]
  }

  // Swap pivot element with element on end pointer. This puts pivot on its correct sorted place.
  // [array[end], array[pivot_index]] = [array[pivot_index], array[end]]
  let temp = array[end];
  array[end] = array[pivot_index];
  array[pivot_index] = temp;

  //  Returning end pointer to divide the array into 2
  return end;
}

//  The main function that implements QuickSort
function quickSort (start, end, array) {
  if (start < end) {
    // p is partitioning index, array[p] is at right place
    p = partition(start, end, array);

    // Sort elements before partition and after partition
    quickSort(start, p - 1, array);
    quickSort(p + 1, end, array);
  }
}

function oneLoopSort (arr) {
  // Finding the length of array 'arr'
  let length_ = arr.length;

  //  Sorting using a single loop
  let j = 0;

  while (j < length_ - 1) {
    // # Checking the condition for two simultaneous elements of the array
    if (arr[j] > arr[j + 1]) {
      // Swapping the elements.
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;

      // updating the value of j = -1 so after getting updated for j++
      // in the loop it becomes 0 and the loop begins from the start.
      j = -1;
    }
    j += 1;
  }
}

module.exports = {
  factorial,
  factors,
  primeFactors,
  // primeNumber, generatePrimeNumber,
  findGCD,
  findLCM,
  reverseList,
  revreseNumber,
  reverseString,
  reverseCharacterOfWord,
  reverseWord,
  iterativeBinarySearch,
  recursiveBinarySearch,
  linearSearch,
  // BFS, DFS,
  bubbleSort,
  insertionSort,
  selectionSort,
  mergeSort,
  quickSort,
  oneLoopSort,
  balancedParenthesis,
  printDuplicates, // missingNumber, charFrequency
  maxSubArraySum,
  largestSubArray01,
  subSetSum,
  subSetSumHasTwoCandidates,
  substringWithEqual012,
  // TSP, dijkstra shortest path,
  printArray
};
