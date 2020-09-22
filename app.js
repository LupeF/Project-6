const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
let missed = 0;
const phrases = [   'hello world',
                    'this is an element',
                    'i love programming',
                    'javascript',
                    'create an element'  
];

btnReset.addEventListener('click', () =>{
    btnReset.style.display = "none";

})

const getRandomPhraseAsArray = (arr) => {
    let newArray = [];
    let phrase = Math.floor(Math.random()*arr.length);

    // let phrase = arr[Math.floor(Math.random()*phrases.length)];  //randomely selects a number and returns string in array
    let words = phrase.split(''); // splits the words into letters
    // newArray.push(words);
    return words;
}
//stored function in a variable
const phraseArray = getRandomPhraseAsArray(phrases);


const addPhraseToDisplay = (arr) => {
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i < arr.length; i++){
        let li = document.createElement('li');
        li = arr[i].textContent;
        phrase.appendChild(li);
        return 

    }
}

console.log(getRandomPhraseAsArray(phrases));
// console.log(addPhraseToDisplay(phraseArray));

