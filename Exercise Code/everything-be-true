function truthCheck(collection, pre) {
  let rv = true;
  rv = collection.every(e => e.hasOwnProperty(pre))
  if(rv)
    rv = collection.every(e => {
      console.log(e[pre])
      if(e[pre] <= 0 || e[pre] == null || Number.isNaN(e[pre] ))
        return false;
      return true;
      });
  return rv;
}

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age"));
