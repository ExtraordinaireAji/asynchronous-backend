const http = require("http")
const port = 7080
const fs = require("fs")

const homePage = fs.readFileSync("./pages/home.html", "utf-8")
const contactPage = fs.readFileSync("./pages/contact.html", "utf-8")
const aboutPage = fs.readFileSync("./pages/about.html", "utf-8")
const loginPage = fs.readFileSync("./pages/login.html", "utf-8")
const testimonialPage = fs.readFileSync("./pages/testimonials.html", "utf-8")
const errorPage = fs.readFileSync("./pages/error.html", "utf-8")

 const server = http.createServer((req, res) => {
    let path = req.url
    if(path === "/" || path === "/home"){
        res.end(homePage)
    } else if(path === "/about"){
        res.end(aboutPage)
    } else if(path === "/contact"){
        res.end(contactPage)
    } else if(path === "/login"){
        res.end(loginPage)
    } else if(path === "/testimonials"){
        res.end(testimonialPage)
    }else {
        res.end(errorPage)
    }
})


server.listen(port, () => {
    console.log("server don start successfully oo")
})