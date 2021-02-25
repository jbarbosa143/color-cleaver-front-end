const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!

const color1 = getInput(1);
const color2 = getInput(2);


if(color1 === undefined){
    console.log("Please enter at least one color!")
}

if(color1 !== undefined && color2 === undefined){
    if(isValidSecondary(color1) === true){
    console.log(colorDeconstructor(color1))
    return true
    }
    if(isValidPrimary(color1) === true){
        console.log(color1 + " is a Primary Color. Please enter a second Primary color for mr to tell you what those colors will be when combined!")
        return true
    } else {
        console.log(color1 + " is not a color. Please enter a color.")
        return true
    }
}

if (color1 !== undefined && color2 !== undefined){
    if(isValidPrimary(color1) === true && isValidPrimary(color2) === true){
        console.log(colorCombinator(color1, color2))
    }
    if(isValidPrimary(color1) === false || isValidPrimary(color2) === false){
        console.log("One or more of your colors are not Primary colors. Please enter 2 Primary colors OR 1 Secondary colors!")
    }
}