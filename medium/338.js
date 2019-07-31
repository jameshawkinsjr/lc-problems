var countBits = function(num) {
  
    let result = [];
    let lastNum = 0;
    
    for (let i = 0; i <= num; i++){
      if (2 % num === 1) {
        result.push( lastNum + 1);
      } else {
        let lastNum = convertToBinary(i)
        result.push(lastNum);
      }    
    };
    return result;
  };
  
  let convertToBinary = function(input) {
    if (!input) return 0;
    let num = input
    let count = 0;
    while (num > 0) {
      if (num % 2 === 0) {
        num /= 2;
      } else {
        count++;
        num = Math.floor(num/2);
      }
    }
    return count;
  }
  /*
  
  0 = 0 = 0
  1 = 1 = 1
  2 = 10 = 1
  3 = 11 = 2
  4 = 100 = 1
  5 = 101 = 2
  6 = 110 = 2
  7 = 111 = 3
  8 = 1000 = 1
  9 = 1001 = 2
  10 = 1010 = 2
  11 = 1011 = 3
  12 = 1100 = 2
  13 = 1101 = 3
  14 = 1110 = 3
  15 = 1111 = 4
  16 = 10000 = 1
  17 = 10001 = 2
  18 = 10010 = 2
  19 = 10011 = 3
  20 = 10100 = 2
  21 = 10101 = 3
  22 = 10110 = 3
  23 = 10111 = 4
  24 = 11000 = 2
  25 = 11001 = 3
  26 = 11010 = 3
  27 = 11011 = 4
  28 = 11100 = 3
  29 = 11101 = 4
  30 = 11110 = 4
  31 = 11111 = 5
  32 = 100000 = 6
  
  */