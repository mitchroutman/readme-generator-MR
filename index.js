// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
// const questions = [
//     {
//         type: input,
//         name: 'title',
//         message: "What is your project name?"
//     },
//     {
//         type: 'input', 
//         name: 'repo',
//         message: 'What is your GitHub repo URL?'
//     },
//     {
//         type: 'input',
//         name: 'description',
//         message: 'How would you describe your project?'
//     },
//     {
//         type: 'confirm',
//         name: 'table confirm',
//         message: 'Do you want a Table of Contents?'
//     },
//     {
//         type: 'input',
//         name: 'installation',
//         message: 'How is your app installed?'
//     },
//     {
//        type: 'input',
//        name: 'usage',
//        message: 'What is the usage?'
//     },
//     {
//        type: 'list',
//        name: 'license',
//        message: 'What is the license for this project?',
//        choices: ['MIT','GPL','Apache','GNU', 'None']
//     },
//     {
//        type: 'input',
//        name: 'contributors',
//        message: 'Who are the contibutors to this project?'
//     },
//     {
//        type: 'input',
//        name: 'testing',
//        message: 'Please share testing results'
//     },
//     {
//        type: 'input',
//        name: 'questions',
//        message: 'How do people contact you for questions?'
//     },
// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
 

///////////
 const generateMarkdown = require("./utils/generateMarkdown")
 const inquirer = require('inquirer');
 const fs = require('fs');

 inquirer
  .prompt([
     {
         type: 'input',
         name: 'title',
         message: "What is your project name?"
     },
     {
         type: 'input', 
         name: 'repo',
         message: 'What is your GitHub repo URL?'
     },
     {
         type: 'input',
         name: 'description',
         message: 'How would you describe your project?'
     },
     {
         type: 'confirm',
         name: 'table',
         message: 'Do you want a Table of Contents?'
     },
     {
         type: 'input',
         name: 'installation',
         message: 'How is your app installed?'
     },
     {
        type: 'input',
        name: 'usage',
        message: 'What is the usage?'
     },
     {
        type: 'list',
        name: 'license',
        message: 'What is the license for this project?',
        choices: ['MIT','GPL','Apache','GNU', 'None']
     },
     {
        type: 'input',
        name: 'contributors',
        message: 'To contribute to this project - fork the exisitng repository into an empty repository. Continue press [Enter]'
     },
     {
        type: 'input',
        name: 'testing',
        message: 'Please share testing results'
     },
     {
        type: 'input',
        name: 'questions',
        message: 'How do people contact you for questions?'
     },
    ])
.then((data) => {
    const readMeTemplate = generateMarkdown(data)

    fs.writeFile('README.md', readMeTemplate, (error) =>
       error ? console.log(error) : console.log('Generated your README.md')
    );
})
