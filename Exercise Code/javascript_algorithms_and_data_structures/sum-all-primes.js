function sumPrimes(num) {
  let acc = 0;
  for(let a = 0; a <= num; a++)
  {
    if(isPrime(a)){
      //console.log(a + " " + acc);
      acc += a;
    }
  }
  return acc;
}

function isPrime(num){
  if(num < 2)
    return false;
  for(let a = 2; a < num; a++)
  {
    if(num % a == 0)
    return false;
  }
  return true;
}

console.log(isPrime(11))
console.log(sumPrimes(977))
