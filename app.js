const keyboard = document.getElementById('qwerty');
let phraseDiv = document.getElementById('phrase');
const btnReset = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let hearts = document.querySelectorAll('img');
let newTitle = document.querySelector('.title').textContent = "Guess the hero";
let missed = 0;
const phrases = [   'Spider Man',
                    'Iron Man',
                    'Wolverine',
                    'Batman',
                    'Hulk',  
];


btnReset.addEventListener('click', () =>{
    overlay.style.display = "none"; //hides overlaybackground when start is clicked
    let newHeader = document.querySelector('.header');
    newHeader.textContent = "What Marvel Hero am I?"

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

addPhraseToDisplay(phraseArray); //calls the function to add a phrase to the display

const checkLetter = (button) => {
    let letter = document.querySelectorAll('ul .letter'); //selects li with class of letter
    let match = null;
    for (let i =0; i < letter.length; i++) { // loops through al li elements 
        if (letter[i].textContent.toLowerCase() === button.textContent){ //compares the text of li with the button
            letter[i].className += " show"; //adds class name to li
            match += letter[i].textContent; // adds textcontent of letter to a variable
        } 
    }
    return match;
}

//adds eventlistener on keyboard div
keyboard.addEventListener('click', (e) => { 
    if (e.target.tagName === 'BUTTON'){    
        e.target.className = "chosen"; //adds class of chosen if button is clicked
    } if (e.target.className === 'chosen'){
        e.target.disabled = "true"; //disables button if it has been selected
        let letterFound = checkLetter(e.target); 
        if (letterFound === null){
            missed += 1;
            hearts[missed - 1 ].src = "images/lostHeart.png"; // removes the hearts
        }
        checkWin();
    }  
});

// **restart */
const restart = () => {
    missed = 0;
    let phraseUl = document.querySelector("ul");
    let buttons = document.querySelectorAll("button");  // selects the button
    let newArray = getRandomPhraseAsArray(phrases); //adds new array 
    
    //resets buttons and removes chosen classes
    if (btnReset.textContent === "try again"){
        btnReset.addEventListener('click', (e) =>{
            phraseUl.innerHTML = "";  // erase's the li's in the ul
            //Resests buttons
            for (let i = 0; i < buttons.length; i++ ){
                if (buttons[i].className === "chosen"){
                    buttons[i].classList.remove("chosen");
                    buttons[i].removeAttribute("disabled");
                } 
            }
            // Resets hearts
            for (let i = 0; i < hearts.length; i++) {
                hearts[i].src = "images/liveHeart.png";
                
            } 
            //adds new phrase
            addPhraseToDisplay(newArray);
            // addPhraseToDisplay(phraseArray)
        })
    }
}

const losePhrase = () => {
    // creates a P tag and is inseted in the overlay Div
    const p = document.createElement('p');
    let answer = phraseDiv.querySelectorAll("li");
    let answers = [];
    for (let i = 0; i<answer.length; i++){
        answers.push(answer[i].textContent);
    }
    p.textContent = `it was ${answers.join('').toUpperCase()}`;
    overlay.insertBefore(p, btnReset ); 
    //romoves the p tag when reset button is clicked
    if (btnReset.textContent === "try again"){
        btnReset.addEventListener('click', (e) =>{
            let eraseP = document.querySelector('.lose p');
            if(eraseP){
                overlay.removeChild(eraseP);
            }
        })
    }
}

const checkWin = () => {
    let letter = document.getElementsByClassName("letter"); //add li with class letter into variable
    let show = document.getElementsByClassName("show"); //add li with class show into variable
    let h2 = document.querySelector(".title"); //add li with class banner into variable
  
    if ( letter.length === show.length){ // compares length of both variables
        overlay.className = "win";    // adds class of win to the overlay
        h2.textContent = "correct ";    // changes the text of the banner
        overlay.style.display = "flex";
        btnReset.textContent = "try again"
        restart();
        
    } else if (missed > 4){                  //if variable is greater than 4, apply those changes
        overlay.className = "lose";
        overlay.style.display = "flex";
        h2.textContent = "try again";
        btnReset.textContent = "try again"
        losePhrase();
        restart();  
    }
    
}


