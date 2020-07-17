let mark = prompt("Enter your marks.");
let grade;

// Using nested if-else
if (mark < 50) {
    grade = "Fail";
  } else if (mark >= 50 && mark <= 59) {
    grade = "B";
  } else if (mark >= 60 && mark <= 69) {
    grade = "B+";
  } else if (mark >= 70 && mark <= 79) {
    grade = "A";
  } else if (mark >= 80 && mark <= 89) {
    grade = "A+";
  } else if (mark >= 90 && mark <= 100) {
    grade = "O";
  } 
    else{
    grade = "Incorrect"
    }
console.log(`Marks are ${mark} and grade is ${grade}`); 

// Using ternary operator
grade = (mark >= 90 && mark <= 100) ? "O" : (mark >= 80 && mark <= 89) ? "A+" : (mark >= 70 && mark <= 79) ? "A": (mark >= 60 && mark <= 69) ? "B+": (mark >= 50 && mark <= 59) ? "B" : "Fail" ;

console.log(`Marks are ${mark} and grade is ${grade}`); 

// Using Switch case
switch (true) {
    case (mark < 50):
      console.log(`Marks are ${mark} and grade is Fail`);
      break;
    case (mark >= 50 && mark <= 59):
      console.log(`Marks are ${mark} and grade is B`);
      break;
    case (mark >= 60 && mark <= 69):
      console.log(`Marks are ${mark} and grade is B+`);
      break;
    case (mark >= 70 && mark <= 79):
      console.log(`Marks are ${mark} and grade is A`);
      break;
    case (mark >= 80 && mark <= 89):
      console.log(`Marks are ${mark} and grade is A+`);
      break;
    case (mark >= 90 && mark <= 100):
      console.log(`Marks are ${mark} and grade is O`);
      break;
    default:
        console.log(`Marks are ${mark} and grade is Incorrect`);
    }