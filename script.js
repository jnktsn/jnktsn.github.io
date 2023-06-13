function getRandomNumber() {
  return Math.floor(Math.random() * 78);
}

var randomNumber = getRandomNumber();
console.log(randomNumber);

function printHello() {
  var output = document.getElementById("output");
  output.textContent = getRandomNumber();
}