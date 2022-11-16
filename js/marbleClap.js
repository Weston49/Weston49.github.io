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
    function Card(name, cost, power, description, abilityType, abilityID, pool) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.originalCost = cost;
        this.originalPower = power;
        this.description = description;
        this.abilityType = abilityType;
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
var cards = [];
var whichCards = [0, 2]; // an array of which cards to generate, this example will not generate hulk
fetch('../cards.json')
    .then(function (response) { return response.json(); })
    .then(function (json) { return generateCards(json, whichCards); });
function generateCards(cardsJSON, whichCards) {
    for (var i = 0; i < whichCards.length; i++) {
        var currentCard = cardsJSON[Object.keys(cardsJSON)[whichCards[i]]]; // this is confusing and weird just trust it works cause it does
        console.log(currentCard.name); //testing that it does work
        cards.push(new Card(currentCard.name, currentCard.cost, currentCard.power, currentCard.description, currentCard.abilityType, currentCard.abilityID, currentCard.pool));
    }
    ;
    console.log(cards); // shows the generated cards, pogu
}
function runAbility(card) {
    switch (card.abilityID) {
        case 1:
            //runs mister fantastic's ability :)
            //*psuedocode 
            //if card.lane is the middle then add two power to left and right lanes
            //if card.lane is left or right then add two power to right and left
            //store the value 2 in a variable so it can be more easily doubled by onslaught etc.
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
