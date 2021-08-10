// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projName',
        message: 'Enter The Name Of Your Project',
        validate: projAnswers => {
            if(projAnswers){
                return true;
            } else {
                console.log('You gotta put something in man');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'projDescription',
        message: 'Enter The Description Of Your Project',
        validate: projAnswers => {
            if(projAnswers){
                return true;
            } else {
                console.log('You gotta put something in man');
                return false;
            }
        }
    },
];
    

// TODO: Create a function to write README file
const writeToFile = (fileName, data)=> {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./generated/README.md', (fileName, data), err =>{
            if (err) {
                //reject promise if there's an error
                reject(err);
                return;
            }
            console.log('README Generated!')
        })
    })
    
}

// TODO: Create a function to initialize app
function init() {
        return inquirer.prompt(questions)
        .then((data)=>{
            writeToFile('README.md', generateMarkdown(data))
        })
}

// Function call to initialize app
init();