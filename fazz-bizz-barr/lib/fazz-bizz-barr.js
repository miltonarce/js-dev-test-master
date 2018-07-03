module.exports = function fbb(int) {
  let response = [];
  if (int % 3 === 0) {
    response.push("Fazz");
  }
  if (int % 5 === 0) {
    response.push("Bizz");
  }
  if (int % 7 === 0) {
    response.push("Barr");
  }

  return response.length ? response.join(" ") : int;
};
