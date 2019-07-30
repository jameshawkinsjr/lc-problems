var moveZeroes = function(nums) {
    let counter = 0;
    let numZeroes = 0;
    while (counter <= nums.length){
      if (nums[counter] === 0){
        nums.splice(counter, 1)
        numZeroes++;
      } else {
        counter++;  
      }
      
    }
    
    for (let j = 0; j < numZeroes; j++){
      nums.push(0);
    }
    return nums;
  };