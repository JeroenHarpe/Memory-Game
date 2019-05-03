let colors: string[] = [
    'red',
    'green',
    'yellow',
    'purple',
    'orange',
    'blue'
]
let doubleColors = colors.reduce(function (res, current, index, array) {
    return res.concat([current, current]);
}, []);




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

for (let i = 0; i < randomColors.length; i++) {
    if (counter <= randomColors.length) {
        let elem = < HTMLElement > document.querySelector(`.nr${counter}`);
        elem.style.background = randomColors[i];
        counter++;
    }
}

let tiles = document.querySelectorAll < HTMLElement > ('.tile');

let flipCounter : number = 0;

let clearFlippedTiles = () => {
    document.querySelectorAll < HTMLElement > ('.tile.flip').forEach((tile) => {
        tile.classList.remove('flip');
    });
}

tiles.forEach(function (tile) {
    tile.addEventListener('click', function () {
        tile.classList.add('flip');
        if (tile.classList.contains('flip')) {
            flipCounter++
            console.log(flipCounter)
        }
        if (flipCounter > 2) {
            clearFlippedTiles();
            flipCounter = 0;
        }
    });
});













// interface Tile {
//     number: number;
//     color: string;
//     div: string;
// }

// class CreateTile implements Tile {
//     number: number;
//     color: string;
//     div: string;
// }








// let x = document.querySelectorAll('.tile');
//         x.addEventListener('click', function(){
//             x.classList.toggle('flip')});