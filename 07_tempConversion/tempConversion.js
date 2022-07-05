const ftoc = function(temp) {
  // ([°F] − 32) × 5⁄9
  let cel =((temp - 32) * (5/9));
  if (cel === 0 ) return cel;

  return Number(cel.toFixed(1));
  
};

const ctof = function(temp) {
  // [°C] × 9⁄5 + 32
  let fah = (temp * (9/5)) + 32; 
  if (fah === 0 ) return fah;

  return Number(fah.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
