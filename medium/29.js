var divide = function(dividend, divisor) {
    let result = dividend / divisor
    if (result < 0) return Math.ceil(result)
    if (result >= 2**31) result = 2**31 -1;
    return Math.floor(result)  
  }