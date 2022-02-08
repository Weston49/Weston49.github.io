var currentRow = 1;
var currentRowArr = [];
var codeArr = [];
var feedbackArr = ['gray','gray','gray','gray'];
var gameIsOver = true;

function addColor(color){
    if(!gameIsOver){
        if(currentRowArr.length < 4){
            currentRowArr.push(color);
            switch (color) {
                case 1:
                    colorStr = "red";
                    break;
                case 2:
                    colorStr = "green";
                    break;
                case 3:
                    colorStr = "blue";
                    break;
                case 4:
                    colorStr = "yellow";
                    break;
                case 5:
                    colorStr = "purple";
                    break;
                case 6:
                    colorStr = "white";
                    break;
                default:
                    break;
            }
            document.getElementById("row" + currentRow + "Item" + (currentRowArr.length)).style.color = colorStr;
        }else{
            //console.log("row full")
        }
        //console.log(currentRowArr);
    }else{
        newGameAlert()
    }
}

function removeColor(){
    if(!gameIsOver){
        currentRowArr.pop();
        document.getElementById("row" + currentRow + "Item" + (currentRowArr.length + 1)).style.color = "black";
        //console.log(currentRowArr);
    }else{
        newGameAlert()
    }
}

function submitGuess(){
    if(!gameIsOver){
        if(currentRowArr.length == 4){
            for(let i=0; i < 4; i++){
                if(currentRowArr[i] == codeArr[i]){
                    feedbackArr[i] = 'lime';
                    currentRowArr[i] = 0;
                }
            }
            for(let i=0; i < 4; i++){
                for(let j=0; j < 4; j++){
                    if(currentRowArr[j] != 0){
                        if(currentRowArr[i] == codeArr[j]){
                            feedbackArr[i] = 'orange';
                        }
                    }
                }
            }
            var f = 1;
            feedbackArr.forEach(feedback => {
                document.getElementById("row" + currentRow + "Item" + (f)).style.backgroundColor = feedback;
                f++;
            });
            if(feedbackArr[0] == 'lime' && feedbackArr[1] == 'lime' && feedbackArr[2] == 'lime' && feedbackArr[3] == 'lime'){
                setTimeout(() => {
                    gameOver('win');
                }, 50);
            }
            currentRowArr = [];
            currentRow++;
            feedbackArr = ['gray','gray','gray','gray'];
        }
        if(currentRow == 6){
            gameOver('lose');
        }
    }else{
        newGameAlert()
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function generateCode(){
    gameIsOver = false;
    codeArr = [];
    currentRowArr = [];
    currentRow = 1;
    for(let i = 1; i < 6; i++){
        for(let j = 1; j < 5; j++){
            document.getElementById("row" + i + "Item" + j).style.color = "black";
            document.getElementById("row" + i + "Item" + j).style.backgroundColor = "";
        }
    }
    for (i = 0; i < 4; i++) {
        codeArr.push(getRandomInt(1,6));
    }
    //console.log("New Game " + codeArr);
}

function gameOver(winOrLose){
    if(winOrLose == 'win'){
        alert("win");
        gameIsOver = true;
    }else{
        alert("lose");
        gameIsOver = true;
    }
}

function newGameAlert(){
    alert("start a new game!");
}

window.onload = generateCode;