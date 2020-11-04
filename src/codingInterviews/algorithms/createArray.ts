
/** Given an input number, populate array with random values of size */
function createArray(size: number) : Array<number> {
    let array = [];
    for (let i = 0; i < size; i++) // NOTE: In further versions, the user will be able to create their own array.
        array.push(Math.floor(Math.random() * 101));     // returns a random integer from 0 to 100
    return array;
}

export default createArray;


// create array
// display array on screen