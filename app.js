const keyboard = document.getElementById('qwerty');
let phraseDiv = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let tries = document.querySelectorAll('img');
let ul = document.querySelector('ul');
let missed = 0;
const phrases = [   'hello world',
                    'this is an element',
                    'treehouse',
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
    let ul = document.querySelector('ul').style.perspective = "400px";
    let letter = document.querySelectorAll('ul .letter'); //selects li with class of letter
    let match = null;
    for (let i =0; i < letter.length; i++) { // loops through al li elements 
        if (letter[i].textContent === button.textContent){ //compares the text of li with the button
            letter[i].className += " show"; //adds class name to li
            letter[i].style.transform = "rotateY(360deg)";
            match += letter[i].textContent; // adds textcontent of letter to a variable

        } 
    }
    return match;
}

keyboard.addEventListener('click', (e) => { //adds eventlistener on keyboard div
    if (e.target.tagName === 'BUTTON'){    
        e.target.className = "chosen"; //adds class of chosen if button is clicked
    } if (e.target.className === 'chosen'){
        e.target.disabled = "true"; //disables button if it has been selected
        let letterFound = checkLetter(e.target); 
        if (letterFound === null){
            missed += 1;
            tries[missed - 1 ].style.display= "none";
        }
        checkWin();
    }  

});

const restart = () => {
    missed = 0;
    let phraseUl = document.querySelector("ul");
    let buttons = document.querySelectorAll("button");  // selects the button
    let newArray = getRandomPhraseAsArray(phrases); //adds new array 
    
    
    if (btnReset.textContent === "try again"){
        btnReset.addEventListener('click', (e) =>{
            phraseUl.innerHTML = "";  // erase's the li's in the ul
            for (let i = 0; i < buttons.length; i++ ){
                if (buttons[i].className === "chosen"){
                    buttons[i].classList.remove("chosen");
                    buttons[i].removeAttribute("disabled");

                } 
            }
            for (let i = 0; i < tries.length; i++) {
                tries[i].style.display = "block";
                
            } 
            addPhraseToDisplay(newArray);
        })
    }
}

const checkWin = () => {
    let letter = document.getElementsByClassName("letter"); //add li with class letter into variable
    let show = document.getElementsByClassName("show"); //add li with class show into variable
    let h2 = document.querySelector(".title"); //add li with class banner into variable
 
    if ( letter.length === show.length){ // compares length of variables
        overlay.className = "win";    // adds class of win to the over lay
        h2.textContent = "correct ";    // changes the text of the banner
        overlay.style.display = "flex";
        btnReset.textContent = "try again"
        restart();
        
    } else if (missed > 4){                  //if variable is greater than 4, apply those changes
        overlay.className = "lose";
        h2.textContent = "try again";
        overlay.style.display = "flex";
        btnReset.textContent = "try again"
        restart();
        
    }
    
}


