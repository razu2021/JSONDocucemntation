// js objects 
const jsObject = {
    name:"md razu hossain raj ",
    age : 23 ,
    Student : "Dinajpur polytechnice institute ",
    session:['2016','2027'],
}
const myArray = ["Ford", "BMW", "Fiat"];



// conver to jsnon strign of js objects 
console.log(jsObject);
const myString =  JSON.stringify(jsObject);
console.log(myString);

// convert to json array of js array 

const myArrytoString = JSON.stringify(myArray);
console.log(myArrytoString);


/*====================  js string to convert js objects and js array========= */
const jsonObjectString = '{"name": "md razu hossain raj","age":30,"student":"dinajpur polytechnic institute"}'
const jsonArrytoString = ["name","md razu hossain raj",30]

// row output 
console.log(jsonObjectString);
console.log(jsonArrytoString);


// convet to json tring to js obejct and arrays 

const convetoObject = JSON.parse(jsonObjectString);
console.log(convetoObject);




