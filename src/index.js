module.exports = function reverse(n) {
  const numString = n.toString();
  const digitsArray = numString.split('');
  digitsArray.reverse();
  const reversedNumString = digitsArray.join('');
  const reversedNumber = parseInt(reversedNumString);
  return reversedNumber;
}