const potentialSlots = document.querySelectorAll('.js-board__cell');

potentialSlots.forEach(potentialSlot => {
  potentialSlot.addEventListener('click', handleClick);
});

function handleClick(e) {
	this.innerHTML = "X";

	this.classList.add("js-board__cell--filled");

	// before the computer move may want to check for winner
	checkForWinner();

	// could build the computer into this part
	computerMove();
}

let openSlots = document.querySelectorAll('.js-board__cell--filled');

function computerMove() {
	// all the board cells that aren't filled 
	openSlots = document.querySelectorAll('.js-board__cell:not(.js-board__cell--filled)');

	// subtract one so it's 0 indexed 
	let potentialIndex = openSlots.length - 1;

	// this will always take the last indexed available spot
	let randomComputerFilledSlot = openSlots.item(potentialIndex);
	randomComputerFilledSlot.innerHTML = "O";
	randomComputerFilledSlot.classList.add("js-board__cell--filled");
}

function checkForWinner() {
	let wholeBoardValues = [];
	potentialSlots.forEach(potentialSlot => {
		wholeBoardValues.push(potentialSlot.innerHTML);
	})
	answerWinner(runner(wholeBoardValues));
}

const checkSolutionOutput = document.querySelector("#js-how-win");

// define jquery sleep using Promise 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// made it an async function
async function answerWinner(answer) {
	// only show a winner
	if (answer != "No winner or unrecognized solution") {
		checkSolutionOutput.innerHTML = answer;

		// one second delay 
		await sleep(1000);
		
		resetBoard();
	}
}

function resetBoard() {
	// only have to reset the filled slots
	filledSlots = document.querySelectorAll('.js-board__cell--filled');
	filledSlots.forEach(filledSlot => {
		filledSlot.innerHTML = "_";
		filledSlot.classList.remove("js-board__cell--filled");
	})

	// reset the win message 
	checkSolutionOutput.innerHTML = "";
}

