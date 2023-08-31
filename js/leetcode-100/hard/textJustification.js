const justify = (words, maxWidth) => {
    let finalRes = [];
    let tempRes = [];
    let num_of_letters = 0;

    for (let word of words) {
        if (word.length + tempRes.length + num_of_letters > maxWidth) {
            // padd temp result
            for (let i = 0; i < maxWidth - num_of_letters; i++) {
                    tempRes[i % (tempRes.length - 1 || 1)] += ' ';
            }
            
            finalRes.push(tempRes.join(''));
            tempRes = [];
            num_of_letters = 0;
        }

        tempRes.push(word);
        num_of_letters += word.length;
    }

    let lastLine = tempRes.join('');
    while (lastLine.length < maxWidth) lastLine += ' ';
    finalRes.push(lastLine);

    return finalRes;
}

const words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16;

justify(words, maxWidth);