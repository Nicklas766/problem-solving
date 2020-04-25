/** 
 * Frequency Queries
 */

// Spread operator seems not to work to do due to time complexity so push is requried.
function freqQuery(queries) {
    const 
    numOfElements = {},
    pairs = {};

    const addToPair = (pairAmount) => {
        if (pairs[pairAmount]) {
            pairs[pairAmount].push(true);
        } else {
            pairs[pairAmount] = [true];
        }
    }

    
    return queries.reduce((acc, curr) => {

        const [query, x] = curr;

        if (query === 1) {
            if (numOfElements[x]) {
                pairs[numOfElements[x]].pop();
                numOfElements[x] += 1;
            } else {
                numOfElements[x] = 1;
            }
            addToPair(numOfElements[x]);
        }

        if (query === 2 && numOfElements[x]) {
            pairs[numOfElements[x]].pop();
            numOfElements[x] -= 1;
            addToPair(numOfElements[x]);
        }

        if (query === 3) {
            if (pairs[x] && pairs[x].length) {
                acc.push(1);
                return acc
            }
            acc.push(0);
            return acc
        }
        
        return acc;
    }, []);
}


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