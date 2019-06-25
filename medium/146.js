// /**
//  * @param {number} capacity
//  */

var LRUCache = function(capacity) {
    this.length = capacity;
    this.cache = [];
    this.lookup = [];
      
  };
  
//   /** 
//    * @param {number} key
//    * @return {number}
//    */
  LRUCache.prototype.get = function(key) {
    let index = this.cache.indexOf(key);
    if (index === -1) return -1;
    let val = this.lookup[index];
    
    this.cache.push(this.cache[index])
    this.lookup.push(this.lookup[index])
    
    this.cache = this.cache.slice(0, index).concat(this.cache.slice(index+1));
    this.lookup = this.lookup.slice(0, index).concat(this.lookup.slice(index+1));
    return val;
  };
  
//   /** 
//    * @param {number} key 
//    * @param {number} value
//    * @return {void}
//    */
  LRUCache.prototype.put = function(key, value) {
    let index = this.cache.indexOf(key);
    
    if (index >= 0){
      this.lookup[index] = value;
      this.get(key);
    } else {
      if (this.cache.length === this.length){
        this.cache = this.cache.slice(1);
        this.lookup = this.lookup.slice(1);
      }
      this.cache.push(key);
      this.lookup.push(value);
    }
  };
  
  /** 
   * Your LRUCache object will be instantiated and called as such:
   * var obj = Object.create(LRUCache).createNew(capacity)
   * var param_1 = obj.get(key)
   * obj.put(key,value)
   */