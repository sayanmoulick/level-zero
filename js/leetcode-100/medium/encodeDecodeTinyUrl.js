function idToShortURL(n) 
{
  
    // Map to store 62 possible characters
    let map = "abcdefghijklmnopqrstuvwxyzABCDEF"
    "GHIJKLMNOPQRSTUVWXYZ0123456789";
  
    let shorturl = [];
  
    // Convert given integer id to a base 62 number
    while (n) 
    {
        // use above map to store actual character
        // in short url
        shorturl.push(map[n % 62]);
        n = Math.floor(n / 62);
    }
  
    console.log(shorturl);
    // Reverse shortURL to complete base conversion
    shorturl.reverse();
  
    return shorturl.join("");
}
  
// Function to get integer ID back from a short url
function shortURLtoID(shortURL) {
    let id = 0; // initialize result
  
    // A simple base conversion logic
    for (let i = 0; i < shortURL.length; i++) {
        if ('a' <= shortURL[i] && shortURL[i] <= 'z')
            id = id * 62 + shortURL[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if ('A' <= shortURL[i] && shortURL[i] <= 'Z')
            id = id * 62 + shortURL[i].charCodeAt(0) - 'A'.charCodeAt(0) + 26;
        if ('0' <= shortURL[i] && shortURL[i] <= '9')
            id = id * 62 + shortURL[i].charCodeAt(0) - '0'.charCodeAt(0) + 52;
    }
    return id;
}
  
// Driver program to test above function
  
let n = 'https://leetcode.com/problems/design-tinyurl';
let shorturl = idToShortURL(n);
console.log(shorturl);
console.log(shortURLtoID(shorturl));
