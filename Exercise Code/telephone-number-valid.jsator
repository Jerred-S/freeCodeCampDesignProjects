function telephoneCheck(str) {
  //find unmatching parenthesis
  let c = str.indexOf(")");
  let p = str.indexOf("(");
  if((c!=-1 && p==-1) || (c==-1 && p!= -1) )
    return false;
  if(c!=-1 && p!=-1){
    if (c-p != 4)
      return false;
  }
  str = str.replace(/[\(\)]/g,"");//parens are okay, so strip them out

  //if the first character is anything but a digit 
  if(str[0].match(/[^0-9]/))
    return false;
  //strip out spaces, dashes
  str = str.replace(/[ \-]/g,"");
  console.log(str)
  //retuern if anything else but numbers is left
  if(str.match(/[^0-9]/))
    return false

  if(str.length == 10)
    return true

  if(str.length == 11)
  {

    if(str[0] == "1")
      return true;
    else
      return false;

  }


  return false;
}

console.log(telephoneCheck("2 555-555-5555"));
