function smallestCommons(arr) {
  let all = [];
  arr.sort((x,y) => x-y);
  for(let a = arr[0]; a<= arr[1]; a++)
    all.push(a);
  
  let a = arr[0];
  for(a; true; a++)
  {
    if(all.every(b => {

      if(a%b == 0)
        return true;
      }))
      break;
  }
  return a;
}


console.log(smallestCommons([23,18]));
