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
    opponentCards: Card[];
    playerCards: Card[];
    opponentPower: number;
    playerPower: number;
    abilityID: number; //abilityID is -1 if no ability or if ability is meaningless to the puzzle (like central park)

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
    type: string; //ongoing, onReveal, other, or none
    abilityID: number; //abilityID just a unique number for later usage, just an integer for later use
    posistion: number; //position is -1 if the card is in a hand and not on the board, 0-4 to describe where in its lane
    pool: number;
    currentLane: Lane;

    constructor(name: string, cost: number, power: number, description: string, type: string, abilityID: number, pool: number){
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

    play(lane: Lane){

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

    }

    changeLane(lane: Lane){

    }
}

//Generates the card array from cards.json
let cards;
let whichCards = [1,3]; // an array of
fetch('../cards.json')
    .then((response) => response.json())
    .then((json) => generateCards(json, whichCards));

function generateCards(cardsJSON, whichCards){
    for (let i = 0; i < whichCards.length; i++) {
        console.log(cards[Object.keys(cardsJSON)[i]].name); // just console logging each card name to make sure this is grabbing them correctly
        console.log(cards[Object.keys(cardsJSON)[i]].description);
    };
}

function runAbility(card: Card){
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