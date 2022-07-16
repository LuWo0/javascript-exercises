const fibonacci = function fib (index){
    if (index < 0) return "OOPS";
    let fibo = parseFloat((Math.pow(1.6180339, index) -  Math.pow(-0.6180339, index)) / 2.236067977);
    let rounded = Math.round(fibo);
    console.log(rounded);
    return rounded;
};

// Do not edit below this line
module.exports = fibonacci;
