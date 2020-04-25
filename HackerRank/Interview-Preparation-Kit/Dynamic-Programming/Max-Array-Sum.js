/**
 * Max Array Sum
 */

 // Complete the maxSubsetSum function below.
function maxSubsetSum(arr) {
    let exclusive = 0; // holds current max value excluding with addition to this position
    let inclusive = 0; // holds current max value including with addition to this position
  
    for (let i = 0; i < arr.length; i++) {
      let temp = inclusive;
      inclusive = Math.max(exclusive + arr[i], inclusive);
      exclusive = temp;
    }
  
    return inclusive;
  }