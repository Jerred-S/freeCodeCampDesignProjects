function rot13(str) {
  str = str.split("").map(e => {
    if(e.match(/[A-Z]/))
      return String.fromCharCode(shift(e.charCodeAt(0)));
    else 
      return e;
  }).join("");

  return str;
}

function shift(num){
  if(num - 13 < "A".charCodeAt(0))
    return  (num - 13 + 26);
  else
    return num - 13
}

//console.log(String.fromCharCode(shift("L".charCodeAt(0))))

console.log(rot13("SERR PBQR PNZC"));
