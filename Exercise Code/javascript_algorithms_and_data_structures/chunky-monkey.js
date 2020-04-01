function chunkArrayInGroups(arr, size) {
  let retVal = [];
  if(arr.length > size)
  {
    retVal.push(arr.slice(0,size))
    retVal.push(...chunkArrayInGroups(arr.slice(size,arr.length), size));
  }
  else
  {
    retVal.push(arr);
  }

  // Break it up.
  return retVal;
}

console.log(
chunkArrayInGroups(["a", "b", "c", "d", "e"], 2));
