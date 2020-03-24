function uniteUnique(arr) {
  var arrFlat = [];
  var retVal = [];
  
  for(var a = 0; a < arguments.length; a++)
    arrFlat.push(...arguments[a])
  
  for(var a = arrFlat.length; a > 0; a--){
    var temp = arrFlat.pop();

    if(!arrFlat.includes( temp))
      retVal.unshift(temp);
  }
  
  return retVal;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
