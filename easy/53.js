// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var maxSubArray = function(nums) {
  
    let maxSum = 0;
    let runningSum = 0;
    if (nums.every( number => { return number < 0 })) return Math.max(...nums); 
    
    
    for (i in nums){
      runningSum += nums[i];
      if (runningSum > maxSum) maxSum = runningSum;
      if (runningSum < 0) runningSum = 0;
    }
    return maxSum;
      
  };