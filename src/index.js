module.exports = function reverse (n) {
  n = String(n);
  let x = n.replace('-', '');
  return x.split("").reverse().join("");
}
