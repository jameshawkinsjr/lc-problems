/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {

    let result = [];
    for (let i = 0;  i < nums1.length; i++){
      let idx = nums2.indexOf(nums1[i])
      if ( idx >= 0){
        result.push(nums1[i]);
        nums2.splice(idx,1);
      }
    }
    return result;
      
  };