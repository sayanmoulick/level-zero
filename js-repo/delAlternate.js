/*
Given a string S as input. Delete the characters at odd indices of the string.

Example 1:
Input: 
S = "Geeks"
Output: "Ges" 
Explanation: Deleted "e" at index 1and "k" at index 3.

Example 2:
Input: 
S = "GeeksforGeeks"
Output: "GesoGes"
Explanation: Deleted e, k, f, r, ek at index 1, 3, 5, 7, 9, 11.

*/

class Solution{
    delAlternate(S){
        //code here
        let altStr = '';
        for(let i=0; i<S.length; i++){
            if(i%2===0){
                altStr+=S[i];
            }
        }
        return altStr;
    }
}