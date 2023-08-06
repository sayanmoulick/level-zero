/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  // We break down the word each recursive call
  // Base case is the broken down word becomes an empty string, which means we found a path
  if (!s) return true;

  // We need to loop everyword in the wordDict
  for (let word of wordDict) {
    // indexOf will give us the prefix START of the word we pass in
    // So if s.indexOf(word) is 0, we know the word is the prefix
    if (s.indexOf(word) === 0) {
      // If they match, we continue our recursion
      // We pass in the NEW s with the word sliced from the prefix, we also need to pass wordDict
      // If we ever hit our base case, this will evaluate to true and return true overall
      if (wordBreak(s.slice(word.length), wordDict)) {
        return true;
      }
    }
  }

  // If we never make it to a base case, we have no answers
  return false;
};

// This seems easy right, but the above problem exhibits overlapping sub-problems.
// Time Complexity: The time complexity of the above code will be O(2^n).
// Auxiliary Space: The space complexity will be O(n) as we are using recursion and the recursive call stack will take O(n) space.

// DP Memoization (Added lines will have #### after them)

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict, memo = {}) => {
  // Default arg which is our memo object #####
  // We break down the word each recursive call
  // Base case is the broken down word becomes an empty string, which means we found a path
  if (!s) return true;
  if (s in memo) return memo[s]; // Base case to avoid extra computation #####
  // ^^ Will be hit if we already computated this word

  // We need to loop everyword in the wordDict
  for (let word of wordDict) {
    // indexOf will give us the prefix START of the word we pass in
    // So if s.indexOf(word) is 0, we know the word is the prefix
    if (s.indexOf(word) === 0) {
      // If they match, we continue our recursion
      // We pass in the NEW s with the word sliced from the prefix, we also need to pass wordDict
      // If we ever hit our base case, this will evaluate to true and return true overall
      if (wordBreak(s.slice(word.length), wordDict, memo)) {
        // Remeber to pass down memo #####
        memo[s] = true; // Save our computation #####
        return true;
      }
    }
  }

  // If we never make it to a base case, we have no answers
  memo[s] = false; // Save our computation #####
  return false;
};

// Optimized DP

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = (s, wordDict) => {
  // Init our table, this will be boolean values since return is boolean
  const dp = Array(s.length + 1).fill(false);
  // Seed our simple case, this would be base case in recursive solution
  // Basically, we can make an empty string, so 0 would be true
  // In our table, each index refers to the letter before
  // So table[0] is "", table[1] is "l", table[2] is "e", if testcase is "leetcode"
  dp[0] = true;

  // Loop table
  for (let i = 0; i < dp.length; i++) {
    // We only want to process if current table position is true
    if (!dp[i]) continue;

    // Loop all letters in wordDict
    for (let word of wordDict) {
      // We want to test if word matches where we are in s, and the word
      // We can slice from i to i + w.length and compare with the word
      if (s.slice(i, i + word.length) === word) {
        // If we pass the condition above, and the table index we are trying to update is in bounds, update to true
        if (i + word.length <= dp.length) dp[i + word.length] = true;
      }
    }
  }

  // The last item in our table can be returned, as it will be updated to true if we found a solution
  return dp[s.length];
};
