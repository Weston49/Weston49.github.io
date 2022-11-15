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
    function Card(name, cost, power, description, type, abilityID, hasAbility) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.originalCost = cost;
        this.originalPower = power;
        this.description = description;
        this.type = type;
        this.abilityID = abilityID;
        this.hasAbility = hasAbility;
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
//an array of all the cards being used in the current puzzle, in the future generate this array from iterating through a json file
var cards;
[
    new Card("Hulk", 6, 12, "Hulk smash!", "neither", -1, false),
    new Card("Quicksilver", 1, 2, "Something here i dont remember", "neither", -1, true)
];
