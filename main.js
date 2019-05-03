var colors = [
    'red',
    'green',
    'yellow',
    'purple',
    'orange',
    'blue'
];
var doubleColors = colors.reduce(function (res, current, index, array) {
    return res.concat([current, current]);
}, []);
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
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
var randomColors = shuffle(doubleColors);
var counter = 1;
for (var i = 0; i < randomColors.length; i++) {
    if (counter <= randomColors.length) {
        var elem = document.querySelector(".nr" + counter);
        elem.style.background = randomColors[i];
        counter++;
    }
}
var tiles = document.querySelectorAll('.tile');
var flipCounter = 0;
var clearFlippedTiles = function () {
    document.querySelectorAll('.tile.flip').forEach(function (tile) {
        tile.classList.remove('flip');
    });
};
tiles.forEach(function (tile) {
    tile.addEventListener('click', function () {
        tile.classList.add('flip');
        if (tile.classList.contains('flip')) {
            flipCounter++;
            console.log(flipCounter);
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
//# sourceMappingURL=main.js.map