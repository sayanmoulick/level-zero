/*
Given a string of length N, made up of only uppercase characters 'R' and 'G', where 'R' stands for Red and 'G' stands for Green.
Find out the minimum number of characters you need to change to make the whole string of the same colour.

Example 1:
Input:
N=5
S="RGRGR"
Output:2
Explanation:We need to change only the 2nd and 4th(1-index based) characters to 'R', so that the whole string becomes the same colour.

Example 2:
Input:
N=7
S="GGGGGGR"
Output:1
Explanation:We need to change only the last character to 'G' to make the string same-coloured.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)Constraints:

1<=N<=105
S consists only of characters 'R' and 'G'.
*/
class Solution {
  RedOrGreen (n, str) {
    //code here
    let mc = { R: 0, G: 0 };
    for (let i = 0; i < n; i++) {
      mc[str[i]] += 1;
    }
    if (mc.R > mc.G) {
      return mc.G;
    } else {
      return mc.R;
    }
  }
}
