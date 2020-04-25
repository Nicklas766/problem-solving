



// I prefer this even though it's slower:
function freqQuery(queries) {
    const 
    numOfElements = {},
    pairs = {};

    return queries.reduce((acc, curr) => {

        const [query, x] = curr;

        if (query === 1) {
            if (numOfElements[x]) {
                numOfElements[x] += 1;
            } else {
                numOfElements[x] = 1;
            }
        }

        if (query === 2 && numOfElements[x]) {
            numOfElements[x] -= 1;
        }

        if (query === 3) {
            if (Object.values(numOfElements).includes(x)) {
                return [...acc, 1]
            }

            return [...acc, 0]
        }
        
        return acc;
    }, []);
}