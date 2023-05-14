//DECLARE ARRAY VARIABLE

const array = ["Samoel", 30, true, null, "Seshoka"];
const array1 = [true, false, null, undefined, "sam", 200, 33.5];

// Print the array with console.log funtion
console.log(array);

// ACCESSING VALUE STORED IN THE ARRAY USING BRACKET NOTATION.
console.log("Value accessed in an array is:", array[3]);

//ADDING LAST VALUE IN AN ARRAY USING PUSH METHOD
array.push("I like to code");
console.log(array);
console.log("Last value add in an array is :", array[array.length - 1]);

//ADDING FIRST VALUE IN AN ARRAY USING UNSHIFT METHOD
array.unshift(false);
console.log(array);
console.log("Added value in an array is :", array[0]);

//merge arrays using concat method

const merged = array.concat(array1);
console.log(merged);

//Remove the last value in merged array using POP method

const removedElement = merged.pop(); // Pop method does not take a value as Push method
console.log(merged);
console.log("Last Value removed is :", removedElement);

//Remove the first value in merged array using shift method
const firstValueRemoved = merged.shift();
console.log(merged);
console.log("First value removed is :", firstValueRemoved);

//Check the index of array value in merged array

const indexOfValue = merged.indexOf(true); //Method search for the value, the if there are multiple values, the method return the first value found
console.log("the index of value:True is :", indexOfValue);

// Check the data type of a value in a merged array using typeOf function
//using a function passing a data accessed with bracket notation
function checkDataType(data) {
	console.log(typeof data);
}
checkDataType(merged[6]);

//check the type of merged array
console.log(typeof merged); // Arrays are type of object
console.log(typeof merged[merged.length - 1]);

//Return value before 3
console.log(merged.slice(0, 3));

//Return values between 0 and 3
console.log(merged.slice(1, 3));

//Replace element/value at index 2
merged.splice(2, 1, "Henk"); //Splice is used to remove, add or replace elements in arrays
console.log(merged);
