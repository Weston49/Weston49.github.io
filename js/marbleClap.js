/*
    Deck will probably not be used much for the puzzle
    Only needed if Jubilee is part of the situation maybe?
    Just a placeholder for now for if it becomes useful
*/
var Deck = /** @class */ (function () {
    function Deck() {
    }
    Deck.prototype.shuffle = function () {
    };
    Deck.prototype.drawCard = function (drawPosition, playLane, playLocation) {
    };
    return Deck;
}());
var Lane = /** @class */ (function () {
    function Lane() {
    }
    Lane.prototype.destory = function () {
    };
    Lane.prototype.moveLocation = function () {
    };
    return Lane;
}());
var Card = /** @class */ (function () {
    function Card(name, cost, power, description, type, abilityID, pool) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.originalCost = cost;
        this.originalPower = power;
        this.description = description;
        this.type = type;
        this.abilityID = abilityID;
        this.pool = pool;
    }
    Card.prototype.play = function (lane) {
    };
    Card.prototype.destroy = function () {
    };
    Card.prototype.discard = function () {
    };
    Card.prototype.changePower = function (power) {
    };
    Card.prototype.changeCost = function (cost) {
    };
    Card.prototype.changePosition = function (position) {
    };
    Card.prototype.changeLane = function (lane) {
    };
    return Card;
}());
//Generates the card array from cards.json
var cards;
var whichCards = [1, 3]; // an array of
fetch('../cards.json')
    .then(function (response) { return response.json(); })
    .then(function (json) { return generateCards(json, whichCards); });
function generateCards(cardsJSON, whichCards) {
    for (var i = 0; i < whichCards.length; i++) {
        console.log(cards[Object.keys(cardsJSON)[i]].name); // just console logging each card name to make sure this is grabbing them correctly
        console.log(cards[Object.keys(cardsJSON)[i]].description);
    }
    ;
}
function runAbility(card) {
    switch (card.abilityID) {
        case 1:
            //runs mister fantastic's ability :)
            console.log("mister fantastic ability ran");
            break;
        case 2:
            //runs someone else's ability
            console.log("Someone else ability epic");
        default:
            //runs when the abilityID is -1 or something has broken
            console.log("Nice job ya broke it");
            break;
    }
}
