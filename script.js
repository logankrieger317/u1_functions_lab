// Exercise
const isLoggedIn = 'true';
// formula for is loggedin?
const logIn = (name) => { 
    if (isLoggedIn === 'true' || isLoggedIn === 'True' || isLoggedIn === 't' ){
        console.log(`Welcome ${name}`);
    } else {
        console.log('Please log in to continue');
    }
}

// logIn('John');

// Exercise 2

function calculateLawnCost (length, width, laborCost, sodCost, budget){
    let total =  ((length * width * sodCost)+ laborCost) ;
        if (total <= budget){
            console.log('You can afford the sod. You will have $' + (budget - total) + ' left over');
        } else {
            console.log('You cannot afford it. you will need $' + (total - budget) + ' more');
        }
        
    
}

calculateLawnCost(20, 30, 100, 1.45, 700);
calculateLawnCost(20, 30, 100, 1.45, 1200);
calculateLawnCost(20, 30, 100, 1.45, 970);


// Exercise 4

const students = [
    'Alice',
    'Andy',
    'Andrew',
    'Casey',
    'Damian',
    'Emily',
    'Emilie',
    'Grant',
    'Howie',
    'Isabella',
    'Kat',
    'Kimbrad',
    'Kiu',
    'Natasha',
    'Obi',
    'Oscar',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Umberto',
    'Wade',
    'Zhe'
  ]


function loopFunction () {
   //obtains first letter of each student name
    let vowelStudents = students.map(firstLetter => firstLetter[0]);
    //iterates through the array listing the students with names longer than 5 characters
    for (let i = 0; i < students.length; i++){
        if (students[i].length >= 5 && ( vowelStudents[i] === 'A' || vowelStudents[i] === 'E' || vowelStudents[i] === 'I' || vowelStudents[i] === 'O' || vowelStudents[i] === 'U')){
    console.log(students[i] +' '+ students[i].length);

        }
    }
}

loopFunction();


function fizzBuzz () {
for (let i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
        console.log([i]+ ' FizzBuzz');
    } else if (i % 3 === 0){
        console.log([i]+' Fizz');
    } else if (i % 5 === 0){
        console.log([i]+' Buzz');
    } else {
        console.log(i);
    }
}
}

fizzBuzz();