const qwerty = document.getElementById('qwerty');
const phraseDiv = document.getElementById('phrase');
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
    let phrase = Math.floor(Math.random()*arr.length);//generates a random number based on array
    let words = arr[phrase].split('');//splits the phrases into letters based on index
    return words;
}
//stored function in a variable
const phraseArray = getRandomPhraseAsArray(phrases);


const addPhraseToDisplay = (arr) => {
    // do stuff any arr that is passed in, and add to `#phrase ul`
    for (let i = 0; i < arr.length; i++){
        let li = document.createElement('li');
        li = arr[i].textContent;
        phraseDiv = phraseDiv.children;
        phraseDiv.appendChild(li);
        return phraseDiv;
    }
}

console.log(addPhraseToDisplay(phraseArray));
// console.log(addPhraseToDisplay(phraseArray));

