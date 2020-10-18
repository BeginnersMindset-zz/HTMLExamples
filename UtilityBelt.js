let emptyArray = [];
let singleArray = ["prod"];
let doubleArray = ["test", "prod"]
let trippleArray = ["sand", "test", "prod"]
let quadArray = ["dev", "sand", "test", "prod"]


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
