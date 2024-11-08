//problem-5

//generic function using constraint - using keyof
const getProperty = <X,Y extends keyof X>(obj:X, key:Y) =>{
   
 // return obj[key]
   console.log(obj[key])


}

//with sample input

const person = {name:"Alice", age:30};

//call the function
getProperty(person, "name");
