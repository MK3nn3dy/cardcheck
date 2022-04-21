// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

//This iterates through it backwards, every other number, from its length minus 2 (the second to last number):

function validateCred(numToCheck){

// Declares variables for later, outside of for loop:

  let numbersToAdd = [];
  let doubledNumber;

// This iterates through the argument array numToCheck backwards, every other number, from its length minus 2 (the second to last number):

  for(let i = numToCheck.length-2; i >= 0; i=i-2){
    // sets doubeldNumber to the current indexes element times 2:
    doubledNumber = numToCheck[i] * 2;
    // minuses 9 if the doubled number is above 9:
    if(doubledNumber > 9){
      doubledNumber -= 9;
    }
    // pushes doubled number for that index to a new array, outside of the if statement but inside the loop:
    numbersToAdd.push(doubledNumber);
  }
  // This declares a variable equal to the new array with .reduce that adds all values in the new array post-Luhn.
    let numForModulo = numbersToAdd.reduce((previousValue, currentValue) => previousValue + currentValue);
  
  // final modulo check to return true or false using if statement:

  if(numForModulo % 10 === 0){
    return true;
  }else{
    return false;
  }
};

// this function takes in an an array of arrays:

function findInvalidCards(nestedCardArray){

  // this declares a new blank array, ready to take invalid arrays:
  let invalidArray = [];

  // this loops through the nested arrays forward and puts them through the validateCred function, checking if the returned value is true or false. Any that are false are .pushed to the new invalidArray array:

  for(let array = 0; array < nestedCardArray.length; array++){
    if(validateCred(nestedCardArray[array]) === false){
      invalidArray.push(nestedCardArray[array]);
    }
  }
  // the invalid array is returned outside of the for loop:
  return invalidArray;
}


//
function idInvalidCardCompanies(invalidNestedArray){

  let companies = [];

  for(xArray of invalidNestedArray){
    if(xArray[0] === 3){
      companies.push('Amex (American Express)');
      break;
    }
  };
  for(xArray of invalidNestedArray){
    if(xArray[0] === 4){
      companies.push('Visa');
      break;
    }
  };
  for(xArray of invalidNestedArray){
    if(xArray[0] === 5){
      companies.push('Mastercard');
      break;
    }
  };
  for(xArray of invalidNestedArray){
    if(xArray[0] === 6){
      companies.push('Discover');
      break;
    }
  };
  return companies;
};



console.log(idInvalidCardCompanies(findInvalidCards(batch)));
