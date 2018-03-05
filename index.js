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
			slot.classList.add("js-board__cell--filled");
    }
	});
	
	// could build the computer into this part
	computerMove();
}

let openSlots = document.querySelectorAll('.js-board__cell--filled');

function computerMove() {
	// all the board cells that aren't filled 
	openSlots = document.querySelectorAll('.js-board__cell:not(.js-board__cell--filled)');

	// subtract one so it's 0 indexed 
	let potentialIndex = openSlots.length - 1;

	// let randomIndex = Math.floor(Math.random()*10) + 1; 

	// this will always take the last indexed available spot
	let randomComputerFilledSlot = openSlots.item(potentialIndex);
	console.log(randomComputerFilledSlot);
	randomComputerFilledSlot.innerHTML = "O";
	randomComputerFilledSlot.classList.add("js-board__cell--filled");
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
	// only have to reset the filled slots
	filledSlots = document.querySelectorAll('.js-board__cell--filled');
	filledSlots.forEach(filledSlot => {
		filledSlot.innerHTML = "_";
		filledSlot.classList.remove("js-board__cell--filled");
	})

	// reset the win message 
	checkSolutionOutput.innerHTML = "";
}

