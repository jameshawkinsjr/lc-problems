/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function(S, K) {
  
    let joined = S.split("-").join("");
    let remainder = joined.length % K;
    let newString = joined.slice(0, remainder).toUpperCase();
    
    
    for (let i = remainder; i < joined.length; i++){
      if ( (i - remainder) % K === 0 && i > 0) {
        newString += "-"
      }
      newString += joined[i].toUpperCase();
    }
    
    return newString
  };