import './interfaces'

const vowels = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);

const isVowel = (letter:string, word: string, index: number) => {
    // handle case for y as vowel
    if( letter === 'y' || letter === 'Y'){
        // case y at end is a vowel
        if( word.length-1 === index ){
            return true;
        }
        const aWord = word.split(''); 
        // case y as only vowel
        if( aWord.filter( (letter) => vowels.has(letter) ).length === 0 ){
            return true;
        }
        return false;

    }else{
        return vowels.has(letter);
    }
}

export const flipVowels = (word: string) => {
	// define "vowels"
	
	// original string to array
	const out = word.split("");

    // obtain vowel postions
	const vowelPositions: number[] = [];
	out.forEach((letter, index)=>{
		if( isVowel(letter,word,index) ){
			vowelPositions.push(index);
		}
	})

	// process final output
	while( vowelPositions.length > 1 ) {
		const firstPosition = vowelPositions.shift();
		const lastPosition = vowelPositions.pop();
        if( firstPosition == undefined ){
            continue;
        }
        if( lastPosition == undefined ){
            continue;
        }
		out[firstPosition] = word.charAt(lastPosition);
		out[lastPosition] = word.charAt(firstPosition);
	}
	return out.join("");
};

const harness = (word:string, goal:string )=>{
    const result = flipVowels(word)
    if( goal !== result ){
        console.assert( result === goal , { word , goal , result } );
    }else{
        console.log( `OK ${word} => ${result}`)
    }
}

if ( process.argv[1].endsWith("vowels002.js") ){
    console.log( 'running tests')
    harness( "AWhy", "yWhA" );
    harness( "Thyanos", "Thyonas" );
    harness( "ytttttsssss", "ytttttsssss" );
    harness( "Apple", "epplA" );
    harness( "AppleApple", "epplAepplA" );
    harness( "AppleUApple", "epplAUepplA" );
    harness( "AppleUAppleY", "YppleAUppleA" );
}