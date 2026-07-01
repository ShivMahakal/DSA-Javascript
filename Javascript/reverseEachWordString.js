function reverseString(str,substr){

    return str.split(substr).reverse().join(substr)
    
}

function reverseEachWord(str){
    let str1 = reverseString(str,"")
    console.log(str1)
    let str2 = reverseString(str1, " ")
    console.log(str2,"string2")
   
    
}

reverseEachWord("Hello World")


// loop without inbuilt features
function reverseString(str){
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
     }
    
     return newStr
    
    
    }
    
    
    function reverseEachWord(str) {
    
        let words = str?.split(" ")
    
        for(let i = 0; i < words.length; i++) {
            words[i] = reverseString(words[i])
        }
        let reversedSentence = words.join(" ");
    
        console.log(reversedSentence)
    
        
    }
    
    let string = reverseEachWord("Hello world!")