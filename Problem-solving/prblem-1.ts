//Hello Developers
// Question-1: Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

//with sample input
 const ArrayOfNumber:number[] = [1,2,3,4,5]

 //function
 const sumArray = (arr:number[]):number =>{
    // console.log(ArrayOfNumber)
    const sum = arr.reduce((acc, current)=>acc + current,0);
    // console.log(sum) 
    return sum
}
 sumArray(ArrayOfNumber)