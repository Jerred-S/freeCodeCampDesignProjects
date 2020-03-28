function addTogether(...args) {
  if(!args.every(e => Number.isInteger(e)))
    return;
  
  if(args.length == 2)
    return(args[0] + args[1])
  else if(args.length == 1)
    return(function(n){
      if(Number.isInteger(args[0]) && Number.isInteger(n))
        return args[0] + n})
  else
   return

}

console.log(addTogether(3)([4]));
