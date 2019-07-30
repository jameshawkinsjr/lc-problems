var containsDuplicate = function(nums) {
    let dupeCounter = false;
    for (let i = 0; i < nums.length; i++){
         for (let j = 0; j < nums.length; j++){
             if (nums[i] === nums[j] && (i != j)){
                 dupeCounter = true;
             }
    }
         }
    return dupeCounter;
};