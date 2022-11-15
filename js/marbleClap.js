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
var cards; //an array of all the cards being used in the current puzzle
var Card = /** @class */ (function () {
    function Card() {
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
