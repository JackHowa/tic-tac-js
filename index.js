const potentialSlots = document.querySelectorAll('.js-board__cell');

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

const checkSolutionOutput = document.querySelector("#js-how-win");

function answerWinner(answer) {
	checkSolutionOutput.innerHTML = answer;
}

// reset 
const resetBoardButton = document.querySelector("#js-reset-board-button");
resetBoardButton.addEventListener('click', handleResetClick);

function handleResetClick(e) {
	// reset all of the slots
	potentialSlots.forEach(potentialSlot => {
		potentialSlot.innerHTML = "_";
	})

	// reset the win message 
	checkSolutionOutput.innerHTML = "";
}

