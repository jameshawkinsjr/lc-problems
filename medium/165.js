var compareVersion = function(version1, version2) {
    let v1 = version1.split(".");
    let v2 = version2.split(".");
    
    let length = Math.max(v1.length, v2.length);
    
    for (let i = 0; i < length; i++){
      if (v2[i] === undefined) v2[i] = 0;
      if (v1[i] === undefined) v1[i] = 0;
      
      let currV1 = parseInt(v1[i])
      let currV2 = parseInt(v2[i])
  
      if (currV1 < currV2) {
        return -1;
      } else if (currV1 > currV2) {
        return 1;
      }
    }
    return 0;
      
  };