let ar = [1, 5, 7, 8, 9]

function binarySearch (startIndex, endIndex, k, ar) {
    if (startIndex > endIndex) return -1
            
    const midIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
    
    if(ar[midIndex] === k) return 1 
    else if(ar[midIndex] > k) return binarySearch(startIndex, midIndex-1, k, ar)
    else return binarySearch(midIndex+1, endIndex, k, ar)
}

const res = binarySearch(0, ar.length-1, 5, ar)
console.log(res)
