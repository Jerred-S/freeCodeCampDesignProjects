function isIn(core, pile){
  console.log(core + " in " + pile)
  let a = (pile.length-1) / 2
  let aLast = -1;
  for(let b = 0; b < pile.length  ; b ++){
    a = Math.round(a);
    
    console.log(a + " " + aLast)
    if(aLast != a)
      aLast = a; 
    else
      break;

    if(pile[a-1] == core)
    {
      console.log(true)
      return true;
    }
    else if(core < pile[a-1])
      a = a - (a / (2 * (b + 1)));
    else
      a = a + (a / (2 * (b + 1)));
  }
  console.log(false)
  return false;
}



function mutation(arr) {
  let fullStr = arr[0].toLowerCase().split("").sort();
  let coreStr = arr[1].toLowerCase().split("").sort();

  let isThere = true;
  for(let a of coreStr){
    if(!isIn(a, fullStr))
    {
      isThere = false
      break;
    }
  }

  return isThere;
}


//console.log(mutation(["hello", "hey"]));
console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));
//console.log(mutation(["Mary", "Army"]))

//console.log(isIn("7".split(""),"1,3,4,5,6,8,9".split(",").sort((a,b) => a-b)))