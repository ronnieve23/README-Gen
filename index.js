// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'Please Provide Your Github Username',
        validate: githubName => {
            if(githubName){
                return true;
            } else {
                console.log('Please Provide Your Github Username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please Provide Your Email Address',
        validate: emailAddress => {
            if(emailAddress){
                return true;
            } else {
                console.log('Please Provide Your Email address!');
                return false;
            }
        }
    },
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

    {
        type: 'input',
        name: 'installation',
        message: 'Please Provide Instructions For Installing This Project',
        validate: installInstructions => {
            if(installInstructions){
                return true;
            } else {
                console.log('Please Provide Instructions For Installing This Project');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please Provide Usage Examples For Your Project',
        validate: installInstructions => {
            if(installInstructions){
                return true;
            } else {
                console.log('Please Provide Usage Examples For Your Project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How Can We Contribute To This Project?',
        validate: contribute => {
            if(contribute){
                return true;
            } else {
                console.log('Please Give Ways On How We Can Contribute To This Project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How Do We Run Tests For Your Project?',
        validate: testAnswer => {
            if(testAnswer){
                return true;
            } else {
                console.log('Please Provide Ways To Run Tests For Your Project');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please Choose A License For Your Project',
        choices: ['Apache-2.0', 'ISC', 'GPL-3.0', 'MIT', 'No License',],
        validate: licenseList => {
            if(licenseList){
                return true;
            } else {
                console.log('Please Provide Ways To Run Tests For Your Project');
                return false;
            }
        }
    },
];
    

// TODO: Create a function to write README file
const writeToFile = (fileName, data)=> {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/README.md', (fileName, data), err =>{
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