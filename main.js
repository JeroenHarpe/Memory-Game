var colors = [
    'red',
    'green',
    'yellow',
    'purple',
    'orange',
    'blue',
    'pink',
    'cyan'
];
//double the array
var doubleColors = colors.reduce(function (res, current, index, array) {
    return res.concat([current, current]);
}, []);
// get a random color
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
// select div's and add the colors
for (var i = 0; i < randomColors.length; i++) {
    if (counter <= randomColors.length) {
        var elem = document.querySelector(".nr" + counter);
        elem.style.background = randomColors[i];
        counter++;
    }
}
var tiles = document.querySelectorAll('.tile');
var flipCounter = 0;
var colorsFlipped = '';
tiles.forEach(function (tile) {
    tile.addEventListener('click', function () {
        tile.classList.add('flip');
        // add to flipcounter when user clicks tile
        if (tile.classList.contains('flip')) {
            flipCounter++;
        }
        //check if there's a match
        if (tile.classList.contains('flip')) {
            var matchingTiles = document
                .querySelectorAll('.tile.flip[style*="background: ' + tile.style.background + ';"]');
            if (matchingTiles.length > 1) {
                setTimeout(function () {
                    gotPair();
                    allchecked();
                }, 1000);
            }
        }
        // Clear tiles when there's not a pair
        if (flipCounter >= 2) {
            setTimeout(function () {
                clearFlippedTiles();
                flipCounter = 0;
            }, 1000);
        }
    });
});
//clears the flipped tiles
var clearFlippedTiles = function () {
    document.querySelectorAll('.tile.flip').forEach(function (tile) {
        tile.classList.remove('flip');
    });
};
// When user got a pair
var gotPair = function () {
    var flipped = document.querySelectorAll('.flip');
    flipped.forEach(function (tile) {
        tile.removeAttribute("style");
        tile.classList.remove('flip');
        tile.innerHTML = '<i class="fas fa-check"></i>';
        tile.classList.add('check');
        tile.classList.remove('tile');
    });
};
var allchecked = function () {
    var checked = document.querySelectorAll('.check');
    if (checked.length >= doubleColors.length) {
        console.log('congrats!');
    }
};
//# sourceMappingURL=main.js.map