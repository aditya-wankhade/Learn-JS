const array = [1, 2, 3, 4, 5, true, "Aaditya"];
console.log(array);
console.log(array[3]);
const Arr = new Array(11, 22, 33, 44, 55, 66);
console.log(Arr);

// methods of array

array.push("Patil");
console.log(array);
array.push("aaaaaaa");
console.log(array);

array.pop();
console.log(array);

array.unshift("aaaaaaa");
console.log(array);

array.shift();
console.log(array);

const newArr = array.join();

//slice
const slicedArr = array.slice(4, 6);
console.log(array);
console.log(slicedArr);
