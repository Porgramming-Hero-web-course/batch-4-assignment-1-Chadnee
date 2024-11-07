//problem - 3 : Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

//with sample input

const sentence:string =  "I love Typescript ! typescript ! & typescript !";
const word:string = "typescript"

const countWordOccurrences = (param1:string, param2:string) =>{
 //console.log(param1, param2)

 //if we want to count the word ignoring case , at first We want to make them in a same types case(for example:lowercase or uppercase)
// thats why it dont make any fact in case sensitive which will be given in question.
 const wordOfSentence = param1.toLocaleLowerCase().split(/\s+/)
 const singleWord = param2.toLocaleLowerCase()
 //console.log(wordOfSentence, singleWord)

 let count:number = 0

 wordOfSentence.forEach(Element => {
    if (Element === singleWord) {
        count++
    }
 })
 console.log(count)
}

countWordOccurrences(sentence, word)
