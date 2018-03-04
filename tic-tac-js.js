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

// part of the assignment I saw was to figure out how the winner was won 
function playGame(wholeBoard) {
	
}

// simple check for whether array of indices have values in any of the inputted spots 
function isWinner(inputArray, targetIndex) {
	let targetValues = inputArray.filter((input, index) => targetIndex.includes(index)); // ["X","X","X"] 
	return targetValues.every(value => value != ""); // true if there's not empty strings in any of the values
};

let targetIndex = [0,1,2];

let inputArray = ["X","X","X","","","","","","","","",""];

console.assert(isWinner(inputArray, targetIndex)); // should return true with no errors 

let wrongTargetIndex = [0,1,3];

let wrongInputArray = ["X","X","X","","","","","","","","",""];

console.assert(isWinner(wrongInputArray, wrongTargetIndex) == false); // should return true with no errors 



