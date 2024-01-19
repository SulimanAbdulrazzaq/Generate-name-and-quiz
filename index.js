import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.render("index.ejs");
})

app.post("/submit",(req,res)=>{
    const randomAdj = namesnow[Math.floor(Math.random() * namesnow.length-1)];

    const quizz = quiz[Math.floor(Math.random() * quiz.length -1)];

    res.render("index.ejs",{
        namee:randomAdj,
        quize:quizz
    })
    

})

app.listen(port,()=>{
    console.log("server is running in port "+port);
})


const names = ["Abdulrazzaq","Hameeda","Abdulrahman","Roaa","Suliman","Mohammed","Areej"];
const namesnow = ["Suliman","Mohammed","Hassan","obai","Nedaa"];

const quiz = ["Who is the funniest person in your family?","What is the largest ocean in the world?","Which planet is known as the Red Planet?","What is the currency of Japan?","What is the official language of Brazil?","Who invented the telephone?","Who painted the Mona Lisa?","What is the capital of Australia","What about having kids didn't turn out the way you expected it?","Describe one of your most embarrassing moments ?","What is the capital of India?","How many elements are in the periodic table ?","What year was the United Nations established ?","What is the smallest planet in our solar system?","Which animal is known as the Ship of the Desert?","How many letters are there in the English alphabet?","Baby frog is known as?","What type of gas is absorbed by plants?"];


