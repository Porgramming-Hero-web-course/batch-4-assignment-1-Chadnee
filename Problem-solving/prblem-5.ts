//problem-5: Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.


//generic function using constraint - using keyof
const getProperty = <X,Y extends keyof X>(obj:X, key:Y) =>{
   
 // return obj[key]
   console.log(obj[key])
}

//with sample input
const person = {name:"Alice", age:30};

//call the function
getProperty(person, "name");
