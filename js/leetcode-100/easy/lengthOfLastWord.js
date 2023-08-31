var lengthOfLastWord = function(s) {
//     const wordArray = s.trim().split(' ');
    
//     return wordArray.pop().length;
    
    let wordLength = 0;
    // let lengthSt = []
    
    for(let i=s.length-1; i>=0; i--){
        if(s[i] === ' ' && wordLength === 0) continue;
        else if(s[i] === ' ' && wordLength > 0){
            // lengthSt.push(wordLength);
            // wordLength = 0;
            break;
        } 
        else wordLength++;
    }
    
    // if(wordLength > 0) lengthSt.push(wordLength);
    
    // return lengthSt.pop();
    
    return wordLength;
};
