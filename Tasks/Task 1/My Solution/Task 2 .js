let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

let isAllString = fruits.every(fruit => typeof fruit === "string");
console.log(isAllString);

let isSomeStartWithA = fruits.some(fruit => fruit.startsWith("a"));
console.log(isSomeStartWithA);

let filteredFruits = fruits.filter(fruit => fruit.startsWith("b") || fruit.startsWith("s"));
console.log(filteredFruits);

let likedFruits = fruits.map(fruit => `I like ${fruit}`);


likedFruits.forEach(item => console.log(item));