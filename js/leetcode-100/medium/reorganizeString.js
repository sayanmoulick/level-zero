const reorganizeString = (s) => {
    let flag = true;
    let letterCount = new Map();
    
    for (const letter of s) {
        if (letterCount.has(letter)) {
            let count = letterCount.get(letter);
            letterCount.set(letter, ++count);
            if (count > (s.length + 1) / 2) {
                flag = false;
                break;
            }
        } else {
            letterCount.set(letter, 1);
        }
    }

    if (!flag) return '';
    
    // console.log(letterCount.entries());

    const maxHeap = [...letterCount.keys()].sort((a, b) => letterCount.get(b) - letterCount.get(a));
    
    const res = new Array(s.length).fill(null);

    let i = 0;
    for (const c of maxHeap) {
        for (let j = 0; j < letterCount.get(c); j++) {
            if (i >= s.length) i = 1;
            res[i] = c;
            i += 2;
        }
    }

    return res.join('');
}

reorganizeString('aacb');
