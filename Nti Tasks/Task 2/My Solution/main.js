import * as Classes from './Classes/class.js';

const myArea1 = new Classes.Rect(10, 5);
const myArea2 = new Classes.Rect(4, 2);

console.log(myArea1.toString()); 

console.log(Classes.Rect.displayCount());

const mySquare = new Classes.Square(4);
console.log(mySquare.toString());

const myCircle = new Classes.Circle(7);
console.log(myCircle.toString());