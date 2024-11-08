//prblm-6: Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

//define interface object of profile
interface Profile {
    name:string;
    age: number;
    email: string;
}

//function of updating profile partially
const UpdateProfile = (profile:Profile, update:Partial<Profile>):Profile => {
    return {...profile, ...update}
    
}

//with sample input

const myProfile = {
    name: "Alice",
    age:26,
    email:"alice@gmail.com"
}

//call the function
UpdateProfile(myProfile, {age:24})

console.log(UpdateProfile(myProfile, {age:24}))