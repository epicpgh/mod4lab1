//lab 1: Variables and Functions
/* Task 1: Flexible String Manipulation with Functions

    Create a function called formatFullName that takes two parameters: firstName and lastName. The function should return the full name in the format lastName, firstName.
    Format the firstName and lastName so that the first letter of each is always capatilized.
    Add a condition that checks if either the first or last name is missing. If so, return a string saying “Invalid name input.” */
    // const input = document.getElementById("nameInput");
    // const nameBtn = document.getElementById('nameBtn');
    // nameBtn.addEventListener('click', function(){
    //         return input;
    
    //     });
    
    
    
    
    
    
    let firstName = "Ronin";
    let lastName = "Miller";
    let fullName = lastName + ', ' + firstName;


    function formatFullName(lastName, firstName){
       

       if(firstName == null || lastName ==null || firstName==""||lastName=="")
       {
       return 'Invalid Name Input';
    }

        else {
            firstName.charAt(0).toUpperCase(); + firstName.slice(1);
            lastName.charAt(0).toUpperCase();+ firstName.slice(1);
        
        let fullName = lastName + ', ' + firstName;
        return fullName;}
        }
    

        
 console.log(formatFullName('ronin','miller'));
    
   
// let p = Number('price');
// let q = Number('quantity');
// let t = Number('taxRate');



// function calculateTotalCost(){
//     if (isNaN(p)||isNaN(q)||isNaN(t)){
//         return "Invalid Input";
//     }



// let totalCost =(p*q) * (1+t);

// return parseFloat(totalCost).toFixed(2);
// }

// let result = calculateTotalCost;

// result = (20 * 2) * (1 + .07);

// console.log(result);






//Task 3: Functions with Conditional Logic
// Write a function called checkEligibility that takes two parameters: age and isEmployed. The function should check if a person is eligible for a program based on the following rules:
// If the person is over 18 and employed, they are eligible.
// If the person is over 18 but unemployed, they are conditionally eligible.
// If the person is 18 or younger, they are not eligible.
// Return an appropriate string message for each scenario.



function checkIfEligible(age , isEmployed){
    let a = Number(age);
    if (isNaN(a) || typeof isEmployed == false){
        return "Invalid Input";
    }

    if (a >= 18 && isEmployed){
        return "Is Eligible";

    } else {
        return "Not Eligible";
    }
}

console.log(checkIfEligible(18, true));



//Task 4: Refactoring for Reusability
// Refactor the calculateTotalCost function from Task 2 to include an optional discount parameter. If the discount is provided, the function should subtract the discount from the total cost before applying tax.
// If no discount is provided, calculate the total cost as before.
// Submission Instructions
// Complete all the tasks outlined above.
// Ensure that each task works as expected by testing it in your local development environment.
// Once complete, submit your code by sharing the link to a GitHub repository containing the file via Canvas.


let p = Number('price');
let q = Number('quantity');
let t = Number('taxRate');
let d = Number('discount');


function calculateTotalCost(){
    if (isNaN(p)||isNaN(q)||isNaN(t) || isNaN(d)){
        return "Invalid Input";
    }


let discountCost = p * q - d;

    if (discountCost < 0) discountCost = 0;


let totalCost = discountCost * (1+t);

return parseFloat(totalCost).toFixed(2);
}

let result = calculateTotalCost;

result = (20 * 2 - 4) * (1 + .07);

console.log(result);