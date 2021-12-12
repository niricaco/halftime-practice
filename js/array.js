const array1 = ["alma", "korte", "ilyenek", "sutotok"];
const array2 = ["alma2", "korte2", "ilyenek2", "sutotok2"];

function addValueToTheEndOfArray(arr, val) {
  arr.push(val);
  return arr;
}
console.log(
  addValueToTheEndOfArray(["alma", "korte", "ilyenek", "sutotok"], "word")
);

function createNewArrayWithValue(arr, val) {
  const newArray = [...arr, val]; // shallow copy
  /*   const newArray = JSON.parse(JSON.stringify(arr));
  newArray.push(val); //deep copy */
  return newArray;
}
console.log(createNewArrayWithValue(array1, "word"));

function addArrayToArray(arr1, arr2) {
  /*   for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i]);
  } */
  /*   for (const item of arr1) {
    arr2.push(item);
  } */

  /*   return arr2; */

  return array1.concat(array2);
}
console.log(addArrayToArray(array1, array2));
console.log(array1);
console.log(array2);
