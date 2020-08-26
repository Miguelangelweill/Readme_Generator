const fs=require("fs");
const inquirer = require("inquirer");
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");
const Choice = require("inquirer/lib/objects/choice");
const Choices = require("inquirer/lib/objects/choices");
const { resolve } = require("path");
const { rejects } = require("assert");

// array of questions for user
 const questions=([
   {
     type: "input",
     name: "title",
     message: "What is your project title?"
   }, 
   {
     type: "checkbox",
     name: "license",
     message: "Choose a lisence.",
     choices:[
       "MIT",
       "Apache",
       "GPL",
       "Public"
     ]
   },
   {
     type: "input",
     name: "description",
     message: "Please provide your project's description"
   },
   {
     type:"input",
     name:"projectImage",
     message:"Provide a screen shot of your project"
   },
   {
     type: "input",
     name: "installation",
     message: "Please provide the installation instructions"
   },
   {
     type: "input",
     name: "usage",
     message: "Please provide the project usage"
   },
   {
     type: "input",
     name: "contributing",
     message: "Please provide the contributing parties"
   },
   {
     type: "input",
     name: "test",
     message: "Please provide the project tests"
   },
   {
     type: "input",
     name: "username",
     message: "What is your github user name?"
   },
   {
     type: "input",
     name: "repo",
     message: "What is your Git hub repository link?"
   },
   {
     type:"input",
     name:"image",
     message:"If you wish to add an image please enter the file path to that image or URL of the image"
   }
 ]);

// function to write README file
inquirer
.prompt(questions)
.then(function(data){
  const queryUrl = `https://api.github.com/users/${data.username}`

  axios.get(queryUrl).then(res=>{

    const githubInfos={
      imageGitHub:res.data.avatar_url,
      profile:res.data.url
    }
    fs.writeFile("README.md",generateMarkdown(data,githubInfos),err=>{
    if(err){
      throw err
    }else{
      console.log("Success file was created!!!")
    }
  })
  })
  
})


