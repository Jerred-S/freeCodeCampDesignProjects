function destroyer(arr) {
  
  for(var a = 1; a < arguments.length; a++)
  {
      arr = removeFromArray(arr, arguments[a]);
  }

  return arr;
}

function removeFromArray(arr, val)
{
  var i = arr.findIndex(a => a == val);
  console.log(i);
  while(i != -1)
  {
    arr.splice(i,1);
    console.log(arr);
    i = arr.findIndex(a => a == val);
    console.log(i);
  }
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
