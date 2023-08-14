const unsortedArray = [ 42, 51, 32, 83, 65, 10, 29 ];

function merge (arr, s, m, e) {
  var n1 = m - s + 1;
  var n2 = e - m;

  // Create temp arrays
  var L = new Array(n1);
  var R = new Array(n2);

  // Copy data to temp arrays L[] and R[]
  for (let i = 0; i < n1; i++) L[i] = arr[s + i];
  for (let i = 0; i < n2; i++) R[i] = arr[m + 1 + i];

  // Merge the temp arrays back into arr[l..r]

  // Initial index of first subarray
  let i = 0;

  // Initial index of second subarray
  let j = 0;

  // Initial index of merged subarray
  let k = s;

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

function mergeSort (uArr, start, end) {
  if (start >= end) return;
  // console.log(start, end)
  let mid = start + parseInt((end - start) / 2);
  mergeSort(uArr, start, mid);
  mergeSort(uArr, mid + 1, end);
  merge(uArr, start, mid, end);
}

// Function to print an array
function printArray (A, size) {
  for (var i = 0; i < size; i++) console.log(A[i] + ' ');
}

// printArray(unsortedArray, unsortedArray.length);
mergeSort(unsortedArray, 0, unsortedArray.length - 1);
printArray(unsortedArray, unsortedArray.length);
