
let input = document.getElementById("message")
let charaterCount = document.querySelector(".char")
let wordCount = document.querySelector(".word")
let sentences = document.querySelector(".sentence")

input.addEventListener("input", ()=>{
    let value = input.value
    let char = value.length
    charaterCount.innerHTML = char
    value =value.trim(); // remove space start and end  to word

    let words = value.split(" ")  // string convert into array 

    let onlyWords = words.filter((word)=>{
       return word !== "" ;
    }) // remove empty string value in words array 

    wordCount.innerHTML  = onlyWords.length
   console.log(words)
    let onlysentence = words.filter((word)=>{
        return  word === ".";
    }) // when . dot add  then show sentences value 
    console.log(onlysentence)
    sentences.innerHTML = onlysentence.length  
})