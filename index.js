// Code your solution here
//const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(array, name) {
    const driverList = array.filter(element => element.toLowerCase() === name.toLowerCase())
    console.log(driverList)
    return driverList
}

findMatching(drivers, "Bobby");

function fuzzyMatch(array, name) {
    const driverInitial = array.filter(element => element[0].toLowerCase() === name[0].toLowerCase())
    console.log(driverInitial)
    return driverInitial
}


const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function matchName(array, name) {
    const nameMatches = array.filter(element => element.name === name)
    return nameMatches
}