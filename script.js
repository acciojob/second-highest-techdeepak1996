function secondHighest(arr) {
    if (arr.length < 2 || new Set(arr).size === 1) {
        return -Infinity;
    }

    // Find the maximum element in the array
    const max = Math.max(...arr);

    // Find the second-highest element by filtering out the maximum element
    const secondMax = Math.max(...arr.filter(num => num !== max));

    return secondMax;
}
