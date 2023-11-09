let previousClickedID = [];
let r;
let c;
let startID;
let finishID;
let blueCells = 0;

function generate_grid(){
  blueCells = 0;
  previousClickedID = [];
  previousClickedID.push(-1);
  let rows = document.getElementById("rowsInput").value;
  let cols = document.getElementById("colsInput").value;
  if(rows <= 1){
    rows = 2;
  }
  if(cols <= 1){
    cols = 2;
  }
  r = rows;
  c = cols;
  document.getElementById("grid").innerHTML = "";
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      document.getElementById("grid").insertAdjacentHTML("beforeend", 
      "<div onclick='toggle_cell(" + (i*cols+j) + ")' class='cell' id='cell" + (i*cols+j) + "'></div>"
      )
    }
    document.getElementById("grid").insertAdjacentHTML("beforeend", "<br>")
  }
  let x1, x2, y1, y2;
  x1 = Math.floor((Math.random() * rows));
  x2 = Math.floor((Math.random() * rows));
  while(x1 == x2){
    x2 = Math.floor((Math.random() * rows));
  }
  y1 = Math.floor((Math.random() * cols));
  y2 = Math.floor((Math.random() * cols));
  while(y1 == y2){
    y2 = Math.floor((Math.random() * cols));
  }

  document.getElementById("cell" + (x1*cols+y1)).innerHTML = "<div class='inner-start'></div>"
  startID = (x1*cols+y1);
  document.getElementById("cell" + (x2*cols+y2)).innerHTML = "<div class='inner-finish'></div>"
  finishID = (x2*cols+y2);
}

function reset_board(){
  previousClickedID = [-1];
  for(let i = 0; i < r*c; i++){
    document.getElementById("cell" + (i)).classList.remove("selected");
  }
  blueCells = 0;
}

function isAdjacent(c1, c2){
  let x1 = c1%c;
  let x2 = c2%c;
  let y1 = Math.floor(c1/c);
  let y2 = Math.floor(c2/c);
  //console.log("X1: " + x1);
  //console.log("X2: " + x2);
  //console.log("Y1: " + y1);
  //console.log("Y2: " + y2);
  if(x1 == x2 && y1 == y2) return true;
  if(x2 > 0 && x1 == x2 - 1 && y2 == y1) return true;
  if(x2 < c-1 && x1 == x2 + 1 && y2 == y1) return true;
  if(y2 > 0 && y1 == y2 - 1 && x2 == x1) return true;
  if(y2 < r-1 && y1 == y2 + 1 && x2 == x1) return true;
  return false;
}

function toggle_cell(id){
  //console.log(previousClickedID[previousClickedID.length-1]);
  if((previousClickedID[previousClickedID.length-1] == -1 && id == startID) || isAdjacent(previousClickedID[previousClickedID.length-1], id)){
    document.getElementById("cell" + (id)).classList.toggle("selected");
    if(document.getElementById("cell" + (id)).classList.contains("selected")){
      previousClickedID.push(id);
      blueCells++;
      if(id == finishID){
        if(blueCells == r*c){
          alert("You win!");
        }else{
          alert("Try again.");
        }
      }
    }else{
      previousClickedID.pop();
      if(previousClickedID.length == 0){
        previousClickedID.push(-1);
      }
      blueCells--;
    }
  }
  //console.log("Blue cells: " + blueCells);
}