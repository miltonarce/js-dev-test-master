function BtoH(val) {
  return parseInt(val, 2)
    .toString(16)
    .toUpperCase();
}

function HtoB(val) {
  return parseInt(val, 16)
    .toString(2)
    .substr(-8);
}

module.exports = {
  BtoH,
  HtoB
};
