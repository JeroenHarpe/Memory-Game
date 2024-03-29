

let colors: string[] = [
    'red',
    'green',
    'yellow',
    'purple',
    'orange',
    'blue',
    'pink',
    'cyan'
]
//double the array
let doubleColors = colors.reduce(function (res, current, index, array) {
    return res.concat([current, current]);
}, []);



// get a random color
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

let randomColors = shuffle(doubleColors);

let counter: number = 1;

// select div's and add the colors
for (let i = 0; i < randomColors.length; i++) {
    if (counter <= randomColors.length) {
        let elem = < HTMLElement > document.querySelector(`.nr${counter}`);
        elem.style.background = randomColors[i];
        counter++;
    }
}

//variables
let tiles = document.querySelectorAll < HTMLElement > ('.tile');
let flipCounter : number = 0;
let moves : number = 0;
let colorsFlipped : string = '';
let elemMoves : any = document.getElementById('moves');



tiles.forEach(function (tile) {
        tile.addEventListener('click', function () {
            tile.classList.add('flip');
            // add to flipcounter when user clicks tile and add score
            if (tile.classList.contains('flip')) {
                flipCounter++;
                moves++;
                elemMoves.innerHTML = `Moves: ${moves}`;
            }
              //check if there's a match
              if (tile.classList.contains('flip')){
                let matchingTiles = document
                    .querySelectorAll < HTMLElement > ('.tile.flip[style*="background: ' + tile.style.background +  ';"]');
                if (matchingTiles.length > 1){       
                 setTimeout(() => {
                    gotPair();
                    allchecked();
                 }, 100); 
                }
            }
            // Clear tiles when there's not a pair
            if (flipCounter >= 2) {
                setTimeout(() => {
                clearFlippedTiles();
                flipCounter = 0;
                }, 500);
              
            }
          
        
        }); 
});

//clears the flipped tiles
let clearFlippedTiles = () => {
    document.querySelectorAll < HTMLElement > ('.tile.flip').forEach((tile) => {
        tile.classList.remove('flip');
    });
}

// When user got a pair
let gotPair = () => {
let flipped = document.querySelectorAll('.flip');
flipped.forEach(tile => {
tile.classList.remove('flip');  
tile.removeAttribute("style");
tile.innerHTML = '<i class="fas fa-check"></i>';
tile.classList.add('check');
tile.classList.remove('tile');  
});
}


let allchecked = () => {
let checked = document.querySelectorAll('.check');
let score : any = document.getElementById('score');
let scoreTotal : any = document.getElementById('scoreTotal');

if (checked.length >= doubleColors.length) {
scoreTotal.innerHTML = moves;
    setTimeout(() => {
    score.style.display = 'flex';
    }, 1000);
}
}

// Restart the game
const btn = document.getElementById('btn');
btn.addEventListener('click', playAgain)

function playAgain(){
    location.reload();
}

// start the game
const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', startGame);

function startGame(){
const startGame : any = document.getElementById('startGame');
startGame.style.display = 'none';
}








