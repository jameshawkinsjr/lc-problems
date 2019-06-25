// /**
//  * initialize your data structure here.
//  */
var MedianFinder = function() {
    this.list = [];
  };
  
//   /** 
//    * @param {number} num
//    * @return {void}
//    */
MedianFinder.prototype.addNum = function(num) {
    if (!this.list.length) return this.list.push(num)

    if (this.list[this.list.length-1] < num) return this.list.push(num)

    for (let i = 0; i < this.list.length; i++){
        if (this.list[i] >= num) {
        this.list.splice(i, 0, num)
        break;
        }
    }
};
  
//   /**
//    * @return {number}
//    */
MedianFinder.prototype.findMedian = function() {

    if (this.list.length % 2 === 1) return this.list[Math.floor(this.list.length / 2)]

    if (this.list.length % 2 === 0) {
        let first = (this.list.length / 2)-1;
        let second = (this.list.length / 2)  
        return (this.list[first] + this.list[second])/2;
    }  
    
};
  
  /** 
   * Your MedianFinder object will be instantiated and called as such:
   * var obj = new MedianFinder()
   * obj.addNum(num)
   * var param_2 = obj.findMedian()
   */