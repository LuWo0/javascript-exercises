const palindromes = function isPalindrome(str){
    const newStr = str.replace(/[^\w]/gi, '').toLowerCase();
    console.log(newStr);
    let left = 0;
    let right = newStr.length - 1;
    while (left < right) {
        if (newStr[left] !== newStr[right]) return false;
        left++;
        right--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
