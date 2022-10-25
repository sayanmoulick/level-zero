let numbers = [1, 212, 12, 12];
let X = 1212
let N = 4
let possibilities = 0
for(let i=0; i<N; i++){
    for(let j=0; j<N; j++){
        if(i!=j && X.toString() === numbers[i].toString()+numbers[j].toString()){
            possibilities += 1;
        }
    }
}

// N = 4 
// numbers = [1, 212, 12, 12]
// X = 1212
// count = 0
// X = str(X)
// h = {}

// '''
// We use two passes to prevent counting self pairs like (i,i) and   (j,j).
// In both the passes,we build the Counter dictionary as we iterate making sure that we dont add nums[i] only after checking for target-nums[i].
// Doing two pass ensures that (i,j) and (j,i) if valid are counted.
// '''
// #foward pass
// for k in numbers:
//   k = str(k)
//   if X[0:len(k)]==k:
//     nk = X[len(k):len(X)]
//     if nk in h:
//       count+=h[nk]
//   if k in h: h[k]+=1
//   else: h[k]=1
      
// #backward pass
// h.clear()
// for k in numbers[::-1]:
//   k = str(k)
//   if X[0:len(k)]==k:
//     nk=X[len(k):len(X)]
//     if nk in h:
//       count+=h[nk]
//   if k in h: h[k]+=1
//   else: h[k]=1
  
// print (count)


// Problem Solved Successfully 
//  Test Cases Passed:
// 2107 / 2107
// Total Points Scored:
// 8/8
// Total Time Taken:
// 0.14/4.6
// Your Accuracy:
// 50%
// Attempts No.:
// 2