function getRandomNumber() {
  return Math.floor(Math.random() * 78);
}





function printCard() {
  var output = document.getElementById("output");

  var randomNumber = getRandomNumber();

  const cardIndex = cards.find(card => card.index === randomNumber);

  output.innerHTML = `
    <div class="card">
      <h1 class="card-name">${cardIndex.name}</h1>
      <p class="card-interpretation">${cardIndex.interpretation}</p>
    </div>
  `;
  

}

