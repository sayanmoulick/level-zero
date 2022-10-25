/*
Given a string S, the task is to create a string with the first letter of every word in the string.
 

Example 1:

Input: 
S = "geeks for geeks"
Output: gfg

Example 2:

Input: 
S = "bad is good"
Output: big

Expected Time Complexity: O(|S|)
Expected Auxiliary Space: O(|S|)


Constraints:
1 <= |S| <= 105
S contains lower case English alphabets
Words have a single space between them
 */
class Solution {
  firstAlphabet (str) {
    //code here
    let firstLetterStr = str[0];
    for (var i in str) {
      if (str[i] === ' ') {
        firstLetterStr += str[++i];
      }
    }
    return firstLetterStr;
  }
}
