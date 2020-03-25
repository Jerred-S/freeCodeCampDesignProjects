function sumFibs(num) {
  num = getFibUpTo(num).
        filter(a => a%2 == 1).
        reduce((accumulator, currentValue) => accumulator + currentValue);
  return num;
}

function getFibUpTo(num){
  let lasts = [1, 1];
  while( true )  {
    let nextVal = lasts[lasts.length-1] + lasts[lasts.length-2]
    if(nextVal <= num)
      lasts.push(nextVal);
    else
      return lasts;
  }
  
}

console.log(getFibUpTo(75025));

//sumFibs(4);
