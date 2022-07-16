const findTheOldest = people => {
    let total = 0;
    let oldestPerson = { };
    let todaysDate = new Date().getFullYear();

    people.reduce((a, b) => {
        if (!a.hasOwnProperty("yearOfDeath")) a["yearOfDeath"] = todaysDate;
        if ((a.yearOfDeath - a.yearOfBirth) > total) {
            total = (a.yearOfDeath - a.yearOfBirth);
            oldestPerson = a;
        }
        return b;
    });
    console.log(oldestPerson);
    return oldestPerson;
}

// Do not edit below this line
module.exports = findTheOldest;
