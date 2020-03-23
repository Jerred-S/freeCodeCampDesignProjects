function translatePigLatin(str) {
  //console.log(str[0].match(/[aeiou]/));
  if(str[0].match(/^[aeiou]/) != null)
    str = str.replace(/^([aeiou])(\w*)/,"$1$2way");
  else
    str = str.replace(/^([bcdfghjklmnpqrstvwxyz]{1,})(\w*)/,"$2$1ay");
  return str;
}

console.log(translatePigLatin("glove"));
