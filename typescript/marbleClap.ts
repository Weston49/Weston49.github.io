/*
    Deck will probably not be used much for the puzzle
    Only needed if Jubilee is part of the situation maybe?
    Just a placeholder for now for if it becomes useful
*/
class Deck {
    size: number; //number of cards in the deck still
    cards: Card[];
    
    shuffle(){

    }

    drawCard(drawPosition: number, playLane: Lane, playLocation: number){ //position so you can specify drawing from the top or bottom or randomly

    }
}

class Lane { //Primarily just holds values and which cards are in the lane
    name: string;
    description: string;
    opponentCards: Card[] = [];
    playerCards: Card[] = [];
    opponentPower: number = 0;
    playerPower: number = 0;

    constructor(name: string, description: string){
        this.name = name;
        this.description = description;
    }

    destory(){ //Just for puzzles with Galactus for now

    }

    moveLocation(){ //Only really used for Quake for now, possibly more in the future though

    }
}
class Card {
    name: string;
    cost: number;
    originalCost: number; //Number to calculate things like killmonger when cost has been changed 
    power: number;
    originalPower: number;
    description: string;
    abilityType: string; //ongoing, onReveal, other, or none !!other and none are not the same!! *patriot* 
    position: number; //position is -1 if the card is in a hand and not on the board, 0-3 to describe where in its lane, undefined if in 'deck'
    pool: number;
    currentLane: Lane;

    constructor(name: string, cost: number, power: number, description: string, abilityType: string, pool: number){
        this.name = name;
        this.cost = cost;
        this.power = power;
        this.originalCost = cost;
        this.originalPower = power;
        this.description = description;
        this.abilityType = abilityType;
        this.pool = pool;
    }

    play(lane: Lane){
        if(lane.playerCards.length != 4){
            this.currentLane = lane;
            this.position = lane.playerCards.length;
            lane.playerCards.push(this);
        }else{
            console.log("location is full");
        }
    }

    destroy(){

    }

    discard(){

    }

    changePower(power: number){

    }

    changeCost(cost: number){
        
    }

    changePosition(position: number){
        this.position = position;
        if(this.position = -1){
            //add the card to hand
            console.log(hand);
        }
    }

    changeLane(lane: Lane){

    }

}

let lanes: Lane[] = [];
let whichLocations = [0,2,3]; //should always just be three locations
fetch('../locations.json')
    .then((lane_response) => lane_response.json())
    .then((lane_json) => generateLanes(lane_json, whichLocations));
function generateLanes(locationsJSON, whichLocations){
    for(let i = 0; i < whichLocations.length; i++){
        let currentLocation = locationsJSON[Object.keys(locationsJSON)[whichLocations[i]]];
        console.log(currentLocation.name);
        lanes.push(new Lane(currentLocation.name, currentLocation.description));
    }
    console.log(lanes);
}

//Generates the card array from cards.json
let cards: Card[] = [];
let whichCards = [0,1,2]; // an array of which cards to generate, this example will not generate hulk
fetch('https://snapi.lol/api/cards')
    .then((card_response) => card_response.json())
    .then((card_json) => generateCards(card_json, whichCards));

//just for now fetching and then drawing the first three cards to your hand
let hand: Card[] = [];

function generateCards(cardsJSON, whichCards){
    for (let i = 0; i < whichCards.length; i++) {
        let currentCard = cardsJSON[whichCards[i]]; // this is confusing and weird just trust it works cause it does
        console.log(currentCard.name); //testing that it does work
        cards.push(new Card(currentCard.name, currentCard.cost, currentCard.power, currentCard.description, currentCard.abilityType, currentCard.pool));
    };
    console.log(cards); // shows the generated cards, pogu
}

function cardClicked(whichCard){
    for (let i = 1; i <= 5; i++) {
        document.getElementById("playerCard" + i).className = "card";        
    }
    if(whichCard != -1){
        document.getElementById("playerCard" + whichCard).className = "card clicked";
    }
}

function drawCard(card: Card){
    hand.push(card);
    card.changePosition(-1);
    updatePlayerHand();
}

function updatePlayerHand(){
    for (let i = 0; i < hand.length; i++) {
        let card = hand[i];
        let j: string = (i+1).toString();
        document.getElementById("playerCard" + j + "Cost").innerHTML = card.cost.toString();
        document.getElementById("playerCard" + j + "Power").innerHTML = card.power.toString();
        document.getElementById("playerCard" + j + "Name").innerHTML = card.name;
    }

}

function calculatePower(lane: Lane){
    let power = 0;
    lane.playerCards.forEach(card => {
        power += card.power;
    });
    lane.playerPower = power;
    console.log(lane.playerPower);
}

function runAbility(card: Card){
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