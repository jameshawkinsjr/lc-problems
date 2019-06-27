// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
var medianSlidingWindow = function(nums, k) {
  
    let result = [];
    
    // while (nums.length >= k){
    //   result.push(findMedian(nums.slice(0, k)))
    //   nums.shift();
    // }
    
    for (let i = 0; i <= nums.length - k; i++){
      result.push(findMedian(nums.slice(i, i+k)))
    }
    
    return result;
  };
  
  
  
  let findMedian = function(arr) {
    
    let sorted = arr.sort( (a,b) => { return a-b })
    
    let middle = Math.floor(sorted.length/2)
    
    if (sorted.length % 2 === 1) {
      return sorted[middle]
    } else {
      let left = sorted[middle-1]
      let right = sorted[middle]
      return (left + right) /2
    } 
  }