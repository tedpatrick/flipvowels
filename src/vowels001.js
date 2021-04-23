const flipVowels = (start) => {
	// define "vowels"
	const vowels = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);

	// original string to array
	const out = start.split("");

	const vowelPositions = [];
	out.forEach((letter, index)=>{
		if( vowels.has(letter) ){
			vowelPositions.push(index);
		}
	})

	// process final output
	while( vowelPositions.length > 1 ) {
		const firstPosition = vowelPositions.shift();
		const lastPosition = vowelPositions.pop();
		const firstLetter = start.charAt(firstPosition);
		const lastLetter = start.charAt(lastPosition);
		out[firstPosition] = lastLetter;
		out[lastPosition] = firstLetter;
	}
	return out.join("");
};

console.log(flipVowels("Apple"));
console.log(flipVowels("AppleApple"));
console.log(flipVowels("AppleUApple"));