const clone = (items) => items.map(item => Array.isArray(item) ? clone(item) : item); //from https://dev.to/samanthaming/how-to-deep-clone-an-array-in-javascript-3cig

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Add your code below this line

  return clone(arr).sort((a,b) => {
    return a<b? -1: 1;
  });

  // Add your code above this line
}
console.log(nonMutatingSort(globalArray));
