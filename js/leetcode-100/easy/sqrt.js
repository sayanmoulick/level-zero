const customSqrt = (x) => {
    let start = 0;
    let end = x;

    while (start <= end) {
        let mid = Math.floor((end + start) / 2);

        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) {
            return mid;
        }

        else if (mid * mid < x) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
}