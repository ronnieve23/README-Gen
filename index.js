// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter The Title Of Your Project',
        validate: titleAnswer => {
            if(titleAnswer){
                return true;
            } else {
                console.log('Please Enter A Title For Your Project!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'projDescription',
        message: 'Enter The Description Of Your Project',
        validate: projectDescription => {
            if(projectDescription){
                return true;
            } else {
                console.log('Please Enter A Description For Your Project!');
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