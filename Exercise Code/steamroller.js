function steamrollArray_try1NoWorkie(arr) {
  let rv = [];
  console.log(arr)
  if(Array.isArray(arr))  {
    arr = arr.map(e => steamrollArray3(e))
    //arr = arr.push(...arr)
  }

    //rv.push( steamrollArray(...arr));
  console.log(arr)
  return arr
}

function steamrollArray_try2NoWorkie(arr){
  console.log("sa: " + arr)
  let rv = [];
  if(Array.isArray(arr))  {
    for(let a = 0; a < arr.length; a++){
      if(Array.isArray(arr[a])){
        console.log(rv)
        rv.push( steamrollArray(...arr[a]));
        console.log(rv)
      }
      else
        rv.push(arr[a]);
    }
  }
  else
    rv = arr

  console.log("~sa: " + rv)
  return rv
}

//3rd try. seems hacky, but turns out to be close to Solution 3 in https://www.freecodecamp.org/forum/t/freecodecamp-challenge-guide-steamroller/16079 
function steamrollArray(arr){
  return ("a"+arr).
          substr(1).
          split(",").
          map(e => {if("[object Object]" == e) return {}; return e} ).
          map(e=>{
            let foo = parseInt(e);
            if(Number.isNaN(foo))
              return e;
            else
              return foo;}
              ).
          filter(e => e != "")
}


//console.log(steamrollArray([4, [[3]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));
