const removeFromArray = function(arr, ...nums) {
    nums.forEach(num => {
        let index = arr.indexOf(num);
        if (index > -1) arr.splice(index, 1);
    });
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
