const potentialSlots = document.querySelectorAll('#js-whole-board span');

potentialSlots.forEach(potentialSlot => {
  potentialSlot.addEventListener('click', handleClick);
});

function handleClick(e) {

	// loop through all of these 
  potentialSlots.forEach(slot => {
    // check if this equal to itself 
    if (slot === this) {
      slot.innerHTML = "X";
    }
  });
}

const checkSolutionButton = document.querySelector("#js-check-board-button");
checkSolutionButton.addEventListener('click', handleButtonClick);

function handleButtonClick(e) {
	let wholeBoardValues = [];
	potentialSlots.forEach(potentialSlot => {
		wholeBoardValues.push(potentialSlot.innerHTML);
	})
	answerWinner(runner(wholeBoardValues));
}

function answerWinner(answer) {
	const checkSolutionButton = document.querySelector("#js-how-win");
	checkSolutionButton.innerHTML = answer;
}

