const qwerty = document.getElementById('qwerty');
let phraseDiv = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let missed = 0;
const phrases = [   'hello world',
                    'this is an element',
                    'i love programming',
                    'javascript',
                    'create an element'  
];

btnReset.addEventListener('click', () =>{
    overlay.style.display = "none";

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
        let li = document.createElement('li');// create li elements
        li = arr[i].textContent;// passing the text into li
        phraseDiv = phraseDiv.children; // selecting the ul form the div element
        phraseDiv.appendChild(li);// appending li to children of div
        return phraseDiv;
    }
}

console.log(addPhraseToDisplay(phraseArray));
// console.log(addPhraseToDisplay(phraseArray));

