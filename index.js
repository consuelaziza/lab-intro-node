class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    if(item != undefined){
    
    this.items.push(item)
    
     this.length++

     this.items.sort((a, b) => a - b);
    }
     return this.items
  }

  get(pos) {
    if(this.items[pos] == undefined){
      throw new Error('OutOfBounds')}

    return this.items[pos]
  
  }

  max() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList')}
     let max = Math.max(...this.items)

      return max
  }

  min() {
    if(this.items.length == 0){
      throw new Error('EmptySortedList')}
      let min = Math.min(...this.items)

      return min
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
