//prblem-8: Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.


// function of validate keys and I take here also a string as element of union for make flexible to take another wrong word 
// which is not property thats why it can show a false result, as typescript is so much strict to take another data type of object and it is a requirement of assignment that false result have to show also 
// for wrong word which is not property of object.

const validateKeys =<T extends object>(object:T, keys:(string | keyof T)[]):boolean=>{
   const proof=  keys.every((key )=> key in object);
   return proof
   
}


//with sample input
const person2 = {
     name: "Alice",
     age: 25, 
     email: "alice@wxample.com"
    }


//the answer will be true as it is a property
console.log(validateKeys(person2, ["name", "age"]))

//which(contact) is not property or key of object, it returns a false .
console.log(validateKeys(person2, ["name", "contact"])) //contact is not a property, so answer will be false