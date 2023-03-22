const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    },
    {
    type: "input",
    name: "description",
    message: "Please provide a description of your project:",
    },
    {
    type: "editor",
    name: "installation",
    message: "Please provide installation instructions for your project:",
    },
    {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project:",
    },
    {
    type: "list",
    name: "license",
    message: "Which license would you like to use for your project?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    default: "None"
    },
    {
    type: "editor",
    name: "contributing",
    message: "Please provide contribution guidelines for your project:",
    },
    {
    type: "input",
    name: "tests",
    message: "Please provide test instructions for your project:",
    },
    {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
    },
    {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: function(input) {
            const isValidEmail = /\S+@\S+\.\S+/.test(input);
            if (isValidEmail) {
                return true;
            } else {
                return "Please enter a valid email address";
            }
        }
    },
];
