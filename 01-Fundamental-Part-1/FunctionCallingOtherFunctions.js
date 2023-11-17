// Let's consider fruitProcessor can only make juice with smaller fruit pieces. Before making a juice the fruit processor now needs another machine that first cuts the fruits that we give it and to multiple smaller pieces. 

function cutFruitPieces(fruit) {
    return fruit * 4 // cuts the fruits in pieces
}

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice
}