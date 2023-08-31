const getLongestChainPair = (pairs) => {
    pairs.sort((a, b) => a[1] - b[1]);

    let cur = Number.MIN_SAFE_INTEGER;
    let longestChainLength = 0;

    for (const [start, end] of pairs) {
        if (cur < start) {
            cur = end;
            longestChainLength++;
        }
    }

    console.log(longestChainLength);
}

// getLongestChainPair([[1, 2], [7, 8], [4, 5]]);

getLongestChainPair([[1, 2], [2, 3], [3, 4]]);
