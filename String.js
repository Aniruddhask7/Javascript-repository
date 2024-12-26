const name  = "Aniruddha"
const repoCount = 100
// console.log(name + repoCount  + "value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

//another type represent string
//const gameName = new String (`Aniruddha`)

const gameName = new String (`Aniruddha.Vikas.Aryan`)
console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName[2]);
console.log(gameName[3]);
console.log(gameName[4]);
console.log(gameName[5]);
console.log(gameName[6]);
console.log(gameName[7]);
console.log(gameName[8]);

console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLocaleLowerCase());
 console.log(gameName.toUpperCase());
 //to chack position and index
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));
//************************************************************************************************************************
 const newString = gameName.substring(0,4)
 console.log(newString);

 //slice me negative can be prafered 
 //At least one value will be negative 
  const anotherString = gameName.slice(-8,4)
  console.log(anotherString);

//   //space remove
  const newStringOne = "     Aniruddha     "
  console.log(newStringOne);
  console.log(newStringOne.trim());
  
//areplace the value this are the syntax
  const url = "https://aniruddha.com/aniruddha%20kanade"
  console.log(url.replace('%20','@'));
  
  console.log(url.includes('vishal'));
  console.log(url.includes('aniruddha'));
  
  console.log(gameName.split('.'));

  const text = "Click here";
  const anchorElement = text.anchor("myAnchor");
  console.log(anchorElement);
  // Output: <a name="myAnchor">Click here</a>
  