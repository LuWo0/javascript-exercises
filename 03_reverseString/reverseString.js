const reverseString = function(str) {
    const splitStr = str.split("");
    const reverseStr = splitStr.reverse();
    const newStr = reverseStr.join("");
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
