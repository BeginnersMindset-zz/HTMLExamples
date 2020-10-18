let emptyArray = [];
let singleArray = ["prod"];
let doubleArray = ["test", "prod"]
let trippleArray = ["sand", "test", "prod"]
let quadArray = ["dev", "sand", "test", "prod"]

//todo: what if elements in array are empty?
//todo: what if elements in array are pseudo-empty?
//todo: what about type-enforcing the input parameter to a true array?
//todo: what about handling an Object and its properties?
//todo: what about a serialized Object in JSON notation?
function getWordList ( wordArray ){
    let listOfWords = ""

    if (wordArray.length > 1) {        
        listOfWords = wordArray.slice(0, wordArray.length -1).join( ", " )
        
        let conjunction = " and "
        
        if (wordArray.length > 2) {
            conjunction = "," + conjunction
        }
        listOfWords = listOfWords + conjunction + wordArray[wordArray.length - 1]
    } else if (wordArray.length === 1) {
        listOfWords = wordArray[0]
    }

    return listOfWords
}
