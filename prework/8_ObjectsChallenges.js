// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com 
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// keys(obj); // ["a", "b", "c"]
// let obj2 = { first: 'Matt', last: 'Lane' };
// keys(obj2); // ["first", "last"]
// let obj3 = {};
// keys(obj3); // []
const keys = (obj) =>{
    let newArray = []; 
     for (const property in obj){
      newArray.push(property)
       }
     return newArray;
   }
   console.log(keys({ a: 1, b: 2, c: 3 }))

// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]
// let obj3 = {};
// values(obj3); // []
const values= (obj2) => {
    let newArray2 = [];
    
    for (const propertyValue in obj2){
      newArray2.push (obj2[propertyValue])
    } 
    return newArray2;
  }
  console.log(values({ a: 1, b: 2, c: 3 }))
  console.log(values({ first: 'Matt', last: 'Lane', isDogOwner: true }))
  console.log(values({}))

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// entries(obj3); // []

const entries = (obj3) =>{
    let newArray3 = [];

for (properties in obj3){
   
   newArray3.push([properties, obj3[properties]])
   
     }
  return newArray3;
}

console.log(entries({ a: 1, b: 2, c: 3 }))


// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.
// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

const pluck = (arr, key) => {
  
    const p = arr.map((newArray4) => {
      if(key in newArray4){
        return newArray4[key]
      }else{
        return undefined
      }
      
      
    }) 
  return p
  }
  
  console.log(pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name'))
  

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""
const stringFromObject = (obj5) => {
    const stringArray = [];
  for (const string in obj5){
    stringArray.push(string + ' = ' + obj5[string])
  }
    return stringArray.join(',')
    }
  
  console.log(stringFromObject({ a: 1, b: '2' }))
  console.log(stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false }))
// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]

const minMaxKeyInObject = (obj6) => {
    let newArray6 = [];
    let minMaxArray = [];
    
    for (const prop in obj6){
      newArray6.push(prop*1)
    } 
   newArray6.sort((a,b)=>{return(a - b)}); 
   minMaxArray.push (newArray6[0] , newArray6[newArray6.length - 1])
    return minMaxArray
    }
  
  console.log(minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' }));
  
  
  

