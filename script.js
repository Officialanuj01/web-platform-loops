// Challenge 1: Create a for loop to print all the even numbers till 100 in the console.

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// Challenge 2: Create a while loop to print all the odd numbers till 100 in the console.

let i = 1;
while (i <= 100) {
  if (i % 2 != 0) {
    console.log(i);
  }
  i += 1;
}

// Challenge 3: Create a do while loop to print all the multiples of 3 till 100 in the console.

var a = 3;

do {
  if (a % 3 == 0) {
    console.log(a);

  }
  a+= 1
} while (a <= 100);

// Challenge 4: Create a for loop to print all the prime numbers till 100 in the console.

function checkPrime(number){
  if(number<=1){
    return false
  }

  for(let i=2; i<= Math.sqrt(number); i++){
    if (number%i==0){
      return false
    }
  }
  return true
}

for(let i = 0; i <= 100; i++){
  if(checkPrime(i)){
    console.log(i)
  }
}
