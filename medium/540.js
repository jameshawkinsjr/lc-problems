var singleNonDuplicate = function(nums) {
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i + 1] != nums[i] && nums[i - 1] != nums[i]){
        return nums[i]
      }
    };
      
  };