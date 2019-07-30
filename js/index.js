const makersTwitter = require('./makers-twitter')

console.log('hello')

makersTwitter.  callTwitter()


function hasDuplicates(arr) {
  duplicates_tracker = {}
  for(let i = 0; i < arr.length; i++) {
    let value = arr[i]
    if duplicates_tracker[value] === 1
      return true
    duplicates_tracker[value] = 1
  }
}


function hasDuplicates(arr)
  for(let i = 0; i < arr.length; i++) {
    for(j = i+1; i < arr.length; i++) {
      if(arr[i] === arr[j]) {
        return true
      }
    }
  }
