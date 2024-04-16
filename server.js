const { error } = require("console")
const fs = require("fs")
const idrsiFiles = fs.readFileSync("./files/idris.txt", "utf-8")
console.log(idrsiFiles)


const janeContent = fs.readFileSync("./files/jane.txt", "utf-8")
console.log(janeContent)

const ralph = "security" 
fs.writeFileSync("./files/ralph.txt", ralph)

const Arsenal = "trophy less this season"
fs.writeFileSync("./files/arsenal.txt", Arsenal)

fs.readFile("./files/asynchronous.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error)
    } else{
        console.log(data)
    }
})

fs.readFile("./files/async2.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error)
    } else{
        console.log(data)
    }
})

fs.readFile("./files/async3.txt","utf-8", (error, data) => {
    if(error){
        console.log(error)
    } else{
        console.log(data)
    }
})