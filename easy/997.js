// /**
//  * @param {number} N
//  * @param {number[][]} trust
//  * @return {number}
//  */
var findJudge = function(N, trust) {
  
    if (N === 1 && !trust[0]) return N
    
    let notJudge = new Set();
    let judgeVotes = {}
    
    trust.forEach( person => {
      notJudge.add(person[0])
      if (!judgeVotes[person[1]]) judgeVotes[person[1]] = 0;
      judgeVotes[person[1]]++
    });
    
    for (let i = 1; i <= N; i++){
      if ( !notJudge.has(i) && judgeVotes[i] === N-1) return i;
    }
    return -1;
      
  };