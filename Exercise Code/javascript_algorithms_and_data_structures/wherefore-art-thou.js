function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  arr = (collection.map((n) => {
    var allIn = true;
    for(const prop in source)
    {
      if(source[prop] != n[prop]){
        allIn = false;
        break;
      }
    }
    if(allIn == true)
      return n;
    else
      return null ;
  }));
  arr = arr.filter(n => n != null)

  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
