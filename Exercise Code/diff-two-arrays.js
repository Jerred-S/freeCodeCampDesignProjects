function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.sort();
  arr2.sort();

  for(var m = 1; m>=0 ; m--){
    for(var n =0; n< arr1.length; n++){

      var index = arr2.indexOfBinSearch(arr1[n]);

      if(index < 0)
        newArr.push(arr1[n]);

    }
    [arr1, arr2] = [arr2, arr1]
  }
  

  return newArr;
}

Array.prototype.indexOfBinSearch = function(target) {
  return binSearch(target,this)
};

function binSearch(target,arr){

  var mid = Math.floor(arr.length / 2) ;
  if(arr.length<=1){
    if(arr[0] == target)
      return 0;
    else {
      return -1;
    }
  }


  if(arr[mid] > target){
    var subArr = arr.slice(0,mid);
    var b = binSearch(target,subArr);
    return b >= 0? b: -1;
  }
  else if(arr[mid] < target){
    var subArr = arr.slice(mid,arr.Size);
    var b = binSearch(target,subArr) ;
    return b >= 0? b + mid : -1;
  }
  else
    return mid;
}

//console.log([2,4,7].indexOfBinSearch(99))

//console.log(diffArray([1, 2, 3, 5], [5, 2, 3, 1, 4, 6]));
console.log(diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]))
