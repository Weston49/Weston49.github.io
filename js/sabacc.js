const Cards = [ "cg1","cg2","cg3","cg4","cg5","cg6","cg7","cg8","cg9","cg10",
                "tg1","tg2","tg3","tg4","tg5","tg6","tg7","tg8","tg9","tg10",
                "sg1","sg2","sg3","sg4","sg5","sg6","sg7","sg8","sg9","sg10",
                "cr1","cr2","cr3","cr4","cr5","cr6","cr7","cr8","cr9","cr10",
                "tr1","tr2","tr3","tr4","tr5","tr6","tr7","tr8","tr9","tr10",
                "sr1","sr2","sr3","sr4","sr5","sr6","sr7","sr8","sr9","sr10",
                "zz0","zx0"
            ];

var deck = Cards;
var discard = [];
var playerHand = [];

function shuffle() {
    let currentIndex = deck.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }

    console.log(deck);
}

function addPlayer(name){
    console.log(name);
}

function drawCard(){
    if(playerHand.length < 5){
        playerHand.push(deck.pop());
        console.log("Your new hand: " + playerHand);
    }else{
        console.log("Hand is full");
    }
    displayHand();
    displayDeck();
}

function discardCard(cardPosition){
    if(cardPosition < playerHand.length){
        discard.push(playerHand.splice(cardPosition, 1)[0]);
        console.log("Your new hand: " + playerHand);
    }else{
        console.log("no card there!");
    }
    displayHand();
    displayDeck();
    document.getElementById("discardStack").innerHTML = discard[discard.length - 1];
}

function displayDeck(){
    document.getElementById("deck").innerHTML = deck.length;
}

function mergeDiscard(){
    deck = deck.concat(discard);
    discard = [];
    displayDeck();
    document.getElementById("discardStack").innerHTML = "";
    //Possibly shuffle after this but maybe not
}

function displayHand(){
    document.getElementById("hand").innerHTML = "";
    for (let i = 0; i < playerHand.length; i++) {
        const currentCard = playerHand[i];
        document.getElementById("hand").insertAdjacentHTML("beforeend", "<p onclick='discardCard(" + i + ")'>" + currentCard + "</p>");
    }
}