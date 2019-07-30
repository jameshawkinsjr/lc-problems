var containsNearbyDuplicate = function(nums, k) {
    let nearbyDuplicate = false;
    for (let i = 0; i < nums.length; i++){
        for (let j = 0; j < nums.length; j++){
            if (nums[i] === nums[j] && (Math.abs(i - j) <= k) && (i != j)){    
                console.log(i + " and " + j);                
                nearbyDuplicate = true;
            }
        }
    };
    return nearbyDuplicate;
};