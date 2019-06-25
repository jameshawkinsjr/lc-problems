// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function(nums, target) {
  
    for (let i = 0; i < nums.length-1; i++){
      let num1 = target-nums[i]
      let slice = nums.slice(i)
      let num2 = slice.indexOf(num1)
      if (num2 != -1) return [i, num2]
    }
  };