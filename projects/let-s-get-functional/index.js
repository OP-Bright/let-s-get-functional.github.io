// #!/usr/bin/env node

'use strict';

const { filter, toNumber } = require('lodash');
var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let maleArray = _.filter(array, (element) => {
        if (element.gender === "male") {
            return true
        } else {
            return false
        }
    })
    return maleArray.length
};

var femaleCount = function(array) {
    let femaleArray = _.filter(array, (element) => {
        if (element.gender === "female") {
            return true
        } else {
            return false
        }
    })
    return femaleArray.length
};

var oldestCustomer = function(arr) {
    let currentOldest = {age: 0, name: null};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age > currentOldest.age) {
            currentOldest.age = arr[i].age;
            currentOldest.name = arr[i].name;
        }
    }
    return currentOldest.name;
};

var youngestCustomer = function(arr) {
    let currentYoungest = {age: arr[0].age, name: arr[0].name};
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].age < currentYoungest.age) {
            currentYoungest.age = arr[i].age;
            currentYoungest.name = arr[i].name;
        }
    }
    return currentYoungest.name;
};

var averageBalance = (arr) => {
    let balances = _.pluck(arr, "balance");
    balances = _.map(balances, (element) => {
        let temp = element;
        temp = temp.replace("$", "");
        temp = temp.replace(",", "");
        temp = toNumber(temp);
        return temp;
        })
    let total = 0
    for (let i = 0; i < balances.length; i++) {
        total += balances[i]
    }
    total /= balances.length
    return total
};

var firstLetterCount = (arr, letter) => {
    let guideLetter = letter.toUpperCase();
    let names = _.pluck(arr, "name");
    let firstLetters = _.map(names, (element) => {
        let temp = element;
        temp = temp.slice(0, 1)
        temp = temp.toUpperCase();
        return temp;
    })
    let theLettersWereLookingFor = _.filter(firstLetters, (element) => {
        if (element === guideLetter) {
            return true;
        } else {
            return false;
        }
    })
    return theLettersWereLookingFor.length;
};

var friendFirstLetterCount = (arr, customerName, letter) => {
    let customer = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === customerName) {
            customer = arr[i];
        }
    }
    let guideLetter = letter.toUpperCase();
    let friends = customer.friends
    friends = _.pluck(friends, "name")
    let count = 0;
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].slice(0, 1).toUpperCase() === guideLetter) {
            count++
        }
    }
    return count;
};

var friendsCount = (arr, customerName) => {
    let output = [];
    let friends = _.pluck(arr, "friends")
    for (let i = 0; i < friends.length; i++) {
        friends[i] = _.pluck(friends[i], "name");
    }
    for (let i = 0; i < friends.length; i++) {
        if (_.contains(friends[i], customerName)) {
            output.push(arr[i].name)
        }
    }
    return output
};

var topThreeTags;

var genderCount = (arr) => {
    let output = {
        male: 0,
        female: 0,
        'non-binary': 0,
    }
    let genders = _.pluck(arr, "gender")
    for (let i = 0; i < genders.length; i++) {
        if (genders[i] === "male") {
            output.male++
        }
        if (genders[i] === "female") {
            output.female++
        }
        if (genders[i] === "non-binary") {
            output['non-binary']++
        }
    }
    return output;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
