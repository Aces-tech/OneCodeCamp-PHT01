// Array

// let fruit = "Mango";
// console.log(fruit);
// console.log(typeof(fruit));

let fruits = ["Mango", "Banana", "Apple", "Cherry"];
console.log(fruits);
// Access elements
console.log(fruits[2]); 
console.log(fruits[7]); /*undefined*/

// // Length of the index
// console.log(fruits.length);

// // Update elements
// fruits[1] = 'Avocado';
// console.log(fruits);

// // Adding elements
// // .push adding elements at the end of the array 
// fruits.push("Dewberry");
// console.log(fruits);

// // .unshift adding elements at the beginning of the array
// fruits.unshift("Banana");
// console.log(fruits);

// // .pop delete elements at the end of the array
// fruits.pop();
// console.log(fruits);

// // .shift delete elements at the beginning of the array
// fruits.shift();
// console.log(fruits);

// // Sorting
// // Alphabetically
// fruits.sort();
// console.log(fruits);

// // Reverse sort
// fruits.reverse();
// console.log(fruits);

// // Searching
// // indexOF method
// let index = fruits.indexOf('Avocado');
// console.log("Index:", index)

// // Includes method
// console.log("Is Apple in fruits:", fruits.includes('Pomelo'));

// // Joining
// // Join method
// console.log("Joined fruits:", fruits.join("-"));

// // Slice method
// let sliced_fruits = fruits.slice(1, 3);
// console.log(sliced_fruits);

// // Splice method
// fruits.splice(1 ,3)
// console.log(fruits);

// // Looping through the elements
// fruits.forEach(function(fruit){
//     console.log(fruit);
// })

// For loop
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// Reverse for loop
for (let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

// For Of Loop
for (fruit of fruits){
    console.log(fruit);
}