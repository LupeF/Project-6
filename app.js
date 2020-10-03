const keyboard = document.getElementById('qwerty');
let phraseDiv = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
const buttons = document.querySelectorAll('button');
let tries = document.getElementsByClassName('tries');
let missed = 0;
const phrases = [   'hello world',
                    'this is an element',
                    'i love programming',
                    'javascript',
                    'create an element'  
];

btnReset.addEventListener('click', () =>{
    overlay.style.display = "none"; //hides overlaybackground when start is clicked

})

const getRandomPhraseAsArray = (arr) => {
    let phrase = Math.floor(Math.random()*arr.length); //generates a random number based on array
    let words = arr[phrase].split(''); //splits the phrases into letters based on index
    return words;
}

const phraseArray = getRandomPhraseAsArray(phrases); //stored function in a variable


const addPhraseToDisplay = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let li = document.createElement('li'); // create li elements
        li.textContent = arr[i]; // passing the text into li
        phraseDiv.firstElementChild.appendChild(li); // selecting the ul form the div element and append li
        if (arr[i] === " "){
            li.className = "space";
        }else{
            li.className = "letter";
        }
    }
}

addPhraseToDisplay(phraseArray); //calls function to add phrase to display

const checkLetter = (button) => {
    let letter = document.querySelectorAll('ul .letter'); //selects li with class of letter
    let match = null;
    for (let i =0; i < letter.length; i++) {
        if (letter[i].textContent === button.textContent){ //compares the text of li with the button
            letter.className = "show"; //adds class name to li
            match = letter[i].textContent; // adds textcontent of letter to a variable
        } if (match !== null){
            return match;
        } else {
            return null;
        }
    }
}

keyboard.addEventListener('click', (e) => { //adds eventlistener on keyboard div
    
    if (e.target.tagName === 'BUTTON'){    
        e.target.className = "chosen"; //adds class of chosen if button is clicked
    } if (e.target.className === 'chosen'){
        e.target.disabled = "true"; //disables button if it has been selected
        let letterFound = checkLetter(e.target);
        return letterFound;
        }
        if (letter === null){
            missed += 1;
            for (let i =0; i < tries.length; i++){
            tries[i].style.display = "none"
            }
        }
        
        

});
