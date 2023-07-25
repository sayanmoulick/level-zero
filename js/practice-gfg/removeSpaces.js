/**
 * 
Given a string, remove spaces from it. 

Example 1:

Input:
S = "geeks  for geeks"
Output: geeksforgeeks
Explanation: All the spaces have been 
removed.
â€‹Example 2:

Input: 
S = "    g f g"
Output: gfg
Explanation: All the spaces including
the leading ones have been removed.


Expected Time Complexity: O(|S|).
Expected Auxiliary Space: O(1).


Constraints:
1<=|S|<=105

 */

class Solution {
  removeSpaces (s) {
    //code here
    let strArr = s.split(' ');
    console.log(strArr.join(''));
    // return strArr.join('');
  }
}

let obj = new Solution();
// obj.removeSpaces('geeks  for geeks')
obj.removeSpaces('    g f g');
