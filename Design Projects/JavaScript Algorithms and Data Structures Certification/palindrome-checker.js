function palindrome(str) {

  str = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  console.log(str);
  for(let a=0; a<str.length/2+1; a++){
    if(str[a]!=str[str.length-1-a])
      return false;
  }

  return true;
}



console.log(palindrome("1 eye for of 1 eye."));
