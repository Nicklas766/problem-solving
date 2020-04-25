const coins = {
    QUARTER: 25,
    DIME:  10,
    CENT: 5,
    PENNY: 1
}

// NOt finished at all
const makeChange = (cents) => {

    if (cents === 0) {
        return 1;
    }
    if (cents < 0) {
        return 0;
    }

    return makeChange(cents - coins.QUARTER) + makeChange(cents - coins.DIME)  + makeChange(cents - coins.CENT) + makeChange(cents - coins.PENNY);
}

console.log(makeChange(100));