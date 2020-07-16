// String Length
var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length;
console.log('Length of',txt, 'is', sln);
// slice() Method
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);
// substring() Method
var str = "Apple, Banana, Kiwi";
var res = str.substring(7, 13);
console.log(res);
// substr() Method
var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6);
console.log(res);
// Replacing String 
str = "My OS is Windows";
var n = str.replace("Windows", "Linux");
console.log(n);
// concat() Method
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ",text2);
console.log(text3);
// String.trim() Method
var str = "       Hello World        ";
console.log(str.trim());

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
console.log(fruits);

var fruits = ["Banana", "Orange", "Apple"];
fruits.push("Mango");
console.log(fruits);

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);
console.log(myChildren);

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(3);
console.log(citrus);
