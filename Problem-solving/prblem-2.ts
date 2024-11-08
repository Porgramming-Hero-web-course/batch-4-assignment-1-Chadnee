//prblem-2: Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.


//with sample input

const duplicateArray: number[] = [1,2,2,3,4,4,5];

const removeDuplicates = (arr: number[]) => {
    const element:number[] = []
    // console.log(arr)
    for(const number of arr) {
        // console.log(number)
        if (!element.includes(number)){
            element.push(number)
        }
    }
   
    // console.log(element)
     return element
    
}

removeDuplicates(duplicateArray)