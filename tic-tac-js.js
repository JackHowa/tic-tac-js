const WINNING_SOLUTIONS = [
	// horizontal
	[0,1,2],
	[3,4,5],
	[6,7,9],
	// vertical
	[0,3,6],
	[1,4,7],
	[2,5,9],
	// diagonal
	[0,4,9],
	[2,4,7]
]

function determineHowWon(indexWinner) {
	switch(indexWinner) {
		case 0:
		case 1:
		case 2:
			return "Won via horizontal";
			break;
		case 3:
		case 4:
		case 5:
			return "Won via vertical";
			break;
		case 6:
		case 7:
			return "Won via diagonal";
			break;
		default:
			return "No winner or unrecognized solution";
	}
}

// part of the assignment I saw was to figure out how the winner was won 
function playGame(wholeBoard) {
	let indexWinner;
	for (let i = 0; i <= WINNING_SOLUTIONS.length; i++) {
		if (isWinner(wholeBoard, WINNING_SOLUTIONS[i]) == true) {
			indexWinner = i;

			// crude for now
			// refactor: could use a while loop
			break;
		}
	}
	return indexWinner;
}

// simple check for whether array of indices have values in any of the inputted spots 
function isWinner(inputArray, targetIndex) {
	let targetValues = inputArray.filter((input, index) => targetIndex.includes(index)); // ["X","X","X"] 
	return targetValues.every(value => value != ""); // true if there's not empty strings in any of the values
};

function runner(wholeBoard) {
	let winningIndex = playGame(wholeBoard);
	return determineHowWon(winningIndex);
}

let targetIndex = [0,1,2];

// make sure there's only nine spots in the input array
// will find an undefined index based on indices of solutions otherwise 
let inputArray = ["X","X","X","","","","","",""];

console.assert(isWinner(inputArray, targetIndex)); // should return true with no errors 

let wrongTargetIndex = [0,1,3];

console.assert(isWinner(inputArray, wrongTargetIndex) == false); // should return true with no errors 

console.assert(playGame(inputArray) === 0); // finds at index 0 the solution based on previous variables

// let's see if it can find a latter solution 
let lateWinnerInputArray = ["","","","","","","X","X","X"];
console.assert(playGame(lateWinnerInputArray) === 2); // this would be the last horizontal index 

let winningIndex = 2;
console.assert(determineHowWon(winningIndex) === "Won via horizontal");

// [2,4,7]
let diagonalWinnerInputArray = ["","","X","","X","","","X",""];
console.assert(runner(diagonalWinnerInputArray) === "Won via diagonal");