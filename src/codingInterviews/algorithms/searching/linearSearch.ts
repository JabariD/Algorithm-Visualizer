
/** Linear search through the input for element and return location */
function linearSearch(input: Array<number>, key: number): number {
    input.forEach( (num, index) => {
        if (num === key) return index;
    });
    return -1;
}

export default linearSearch;

// Time Complexity: O(n)
// Space Complexity: O(1)