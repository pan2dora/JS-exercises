// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let num = 1;
while (num>=1 && num<5){
  console.log(num);
  num++
}


// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let num2=1;
do{
  console.log(num2);
  num2++
}while (num2>=1 && num2<5);



// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let i = 1; i<=5; i++){
  console.log(i)
}





// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

for (let n1 = 10; n1>=1; n1--){
  console.log(n)

let n2 = 10;
do{
  console.log(n2);
  n2--;
}while(n2>=1)


let n3 = 10;
while (n3>=1){
  console.log(n3);
  n3--;
}

// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
for (let j1 = 7; j1<=27; j1++){
  console.log(j1)}

let j2 = 7;
do{
  console.log(j2);
  j2++;
}while(j2<=27);


let j3 = 7;
while (j3<=27){
  console.log(j3);
  j3++;
}


// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

for (let k1 =10; k1<=100; k1+=10){
  console.log(k1)}

let k2 = 10;
do{
  console.log(k2);
  k2+=10;
}while(k2<=100);


let k3 = 10;
while (k3<=100){
  console.log(k3);
  k3+=10;
}


// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

let counterFour =0;
while (counterFour>=-100) {
  console.log(counterFour,"HELP ME!");
  counterFour--;
} 

// It becomes an infinite loop because the while loop will always be true so it will continue to run. 

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.


for (let i = 0; i<=23; i++){
  console.log(i)
}


// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
for (let i = 0; i<=100; i++){
  if (i!=23) {
    console.log(`${i} is not my favorite number`)
  }else {
    console.log(`${i} is my favorite number!`)
  }
  }

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
// I think a for loop is easier when you want to iterate through something like an array or something that can be treated or converted into an array. 
//For a do while loop its good to use when you need the code to only excute once  while the while loop is good if you want the  codition to repeat until it is no longer true

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3;outsideCounter++ ) {
    console.log("counting down from", outsideCounter);
for (let insideCounter = outsideCounter;insideCounter>=1 ;insideCounter-- ) {
    console.log("inside",insideCounter);
  }
    console.log("***********************************");
}
}



// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
///It was pretty easy, I struggled with some but it was just really remembering how to put things in proper scope and using the proper syntax. I used freecodecamp alot for review. 

// Email your file to us or commit your file to GitHub and email us a link.
