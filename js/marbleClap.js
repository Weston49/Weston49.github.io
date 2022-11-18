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
    function Lane(name, description) {
        this.opponentCards = [];
        this.playerCards = [];
        this.opponentPower = 0;
        this.playerPower = 0;
        this.name = name;
        this.description = description;
    }
    Lane.prototype.destory = function () {
    };
    Lane.prototype.moveLocation = function () {
    };
    return Lane;
}());
var Card = /** @class */ (function () {
    function Card(name, cost, power, description, abilityType, pool) {
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.originalCost = cost;
        this.originalPower = power;
        this.description = description;
        this.abilityType = abilityType;
        this.pool = pool;
    }
    Card.prototype.play = function (lane) {
        if (lane.playerCards.length != 4) {
            this.currentLane = lane;
            this.position = lane.playerCards.length;
            lane.playerCards.push(this);
        }
        else {
            console.log("location is full");
        }
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
        this.position = position;
        if (this.position = -1) {
            //add the card to hand
            console.log(hand);
        }
    };
    Card.prototype.changeLane = function (lane) {
    };
    return Card;
}());
var lanes = [];
var whichLocations = [0, 2, 3]; //should always just be three locations
fetch('../locations.json')
    .then(function (lane_response) { return lane_response.json(); })
    .then(function (lane_json) { return generateLanes(lane_json, whichLocations); });
function generateLanes(locationsJSON, whichLocations) {
    for (var i = 0; i < whichLocations.length; i++) {
        var currentLocation = locationsJSON[Object.keys(locationsJSON)[whichLocations[i]]];
        console.log(currentLocation.name);
        lanes.push(new Lane(currentLocation.name, currentLocation.description));
    }
    console.log(lanes);
}
//Generates the card array from cards.json
var cards = [];
var whichCards = [0, 1, 2]; // an array of which cards to generate, this example will not generate hulk
fetch('https://snapi.lol/api/cards')
    .then(function (card_response) { return card_response.json(); })
    .then(function (card_json) { return generateCards(card_json, whichCards); });
//just for now fetching and then drawing the first three cards to your hand
var hand = [];
function generateCards(cardsJSON, whichCards) {
    for (var i = 0; i < whichCards.length; i++) {
        var currentCard = cardsJSON[whichCards[i]]; // this is confusing and weird just trust it works cause it does
        console.log(currentCard.name); //testing that it does work
        cards.push(new Card(currentCard.name, currentCard.cost, currentCard.power, currentCard.description, currentCard.abilityType, currentCard.pool));
    }
    ;
    console.log(cards); // shows the generated cards, pogu
}
function cardClicked(whichCard) {
    for (var i = 1; i <= 5; i++) {
        document.getElementById("playerCard" + i).className = "card";
    }
    if (whichCard != -1) {
        document.getElementById("playerCard" + whichCard).className = "card clicked";
    }
}
function drawCard(card) {
    hand.push(card);
    card.changePosition(-1);
    updatePlayerHand();
}
function updatePlayerHand() {
    for (var i = 0; i < hand.length; i++) {
        var card = hand[i];
        var j = (i + 1).toString();
        document.getElementById("playerCard" + j + "Cost").innerHTML = card.cost.toString();
        document.getElementById("playerCard" + j + "Power").innerHTML = card.power.toString();
        document.getElementById("playerCard" + j + "Name").innerHTML = card.name;
    }
}
function calculatePower(lane) {
    var power = 0;
    lane.playerCards.forEach(function (card) {
        power += card.power;
    });
    lane.playerPower = power;
    console.log(lane.playerPower);
}
function runAbility(card) {
    switch (card.name) {
        case "Mister Fantastic":
            //runs mister fantastic's ability :)
            //*psuedocode 
            //if card.lane is the middle then add two power to left and right lanes
            //if card.lane is left or right then add two power to right and left
            //store the value 2 in a variable so it can be more easily doubled by onslaught etc.
            console.log("mister fantastic ability ran");
            break;
        case "Quicksilver":
            //runs someone else's ability
            console.log("Someone else ability epic");
        default:
            console.log("Nice job ya broke it");
            break;
    }
}
