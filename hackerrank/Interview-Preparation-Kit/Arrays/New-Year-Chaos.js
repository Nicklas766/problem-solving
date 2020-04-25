/**
 * New Year Chaos
 */

function minimumBribes(n, q) {
    let count = 0
    let chaotic = false

    for (let i = 0; i < n; i++) {
        const bribes = (q[i] - i) - 1;

        if (bribes > 2) {
            chaotic = true;
            break;
        } 

        for (let j = Math.max(0, q[i]-2); j < i; j++) {
            if (q[j] > q[i])
                count += 1;
        }

        
    }

    if (chaotic) {
        console.log('Too chaotic');
    } else {
        console.log(count);
    }

}