var a = 1;
console.log(a);
var a = "Hi";
console.log(a);
// Using var variables can be updated and re-declared within its scope
// var can be declared without being initialized

{
   let name = "Ram"; 
   name = "Raju";
   console.log("Using Let:", name);
}
// Using let variables can be updated but not re-declared
// let can be declared without being initialized

const Language = "English";
console.log(Language);
// const variables can neither be updated nor re-declared
// const must be initialized during declaration
const Vehicle = ["Bicycle", "Bike"]
console.log(Vehicle);
Vehicle.push('Car');
console.log(Vehicle);
// const variables can not be updated and re-declared 
// Using .push(New variable) is add new varible with exist variables