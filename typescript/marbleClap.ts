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

let cards: Card[]; //an array of all the cards being used in the current puzzle

class Card {
    name: string;
    cost: number;
    originialCost: number; //Number to calculate things like killmonger when cost has been changed 
    power: number;
    description: string;
    type: string; //ongoing, onReveal, neither
    posistion: number; //position is -1 if the card is in a hand and not on the board, 0-4 to describe where in its lane
    abilityID: number; //abilityID is -1 if it has no ability
    currentLane: Lane;

    createCard

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