function jsprint(i){
  console.log(i);
}

function genwall(c1, c2, cols){
  c1 = parseInt(c1);
  c2 = parseInt(c2);
  cell1 = document.getElementById("cell" + c1);
  cell2 = document.getElementById("cell" + c2);
  if(c1 == (c2-1)){
    cell1.classList.add("wall-right");
    cell2.classList.add("wall-left");
  }
  if(c1 == (c2-cols)){
    cell1.classList.add("wall-down");
    cell2.classList.add("wall-up");
  }
}

let pathArr = [];
let mazeSize = 0;
let running = false;

function savePath(index){
  pathArr.push(index);
  //console.log("MAZE PATH: " + index);
}

//new_function_name = Module.cwrap('name_original_func', 'return_type', ['array', 'of', 'paramater', 'types'])
//parameter 2 is null if no return type, parameter 3 is optional if no parameters
int_sqrt = Module.cwrap('int_sqrt', 'number', ['number'])
float_sqrt = Module.cwrap('float_sqrt', 'number', ['number'])
test = Module.cwrap('test', 'number', ['number', 'number'])
gen_maze = Module.cwrap('gen_maze', 'number', ['number', 'number']);


//============================ Below this line is just pure js stuff that talks to the cpp above sometimes ===================================== 

//calculates this value on page load so that it never changes, refresh the page to change these
const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height  = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


function draw_maze(){
  running = false;
  let rows = document.getElementById("rowsInput").value;
  let cols = document.getElementById("colsInput").value;
  let cellSize = 0;
  if(!(document.getElementById("sizeBypass").checked)){
    cellSize = (width - (cols*2) - (width*0.45)) / cols;
    if((cellSize < 4) || ((rows * cellSize) > (height*0.7))){
      alert("Maze will not fit on screen");
      return;
    }
  }

  document.getElementById("mazeWrapper").innerHTML = "";
  pathArr = [];
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < cols; j++){
      document.getElementById("mazeWrapper").insertAdjacentHTML("beforeend", "<div class='cell' id='cell" + (i*cols+j) + "'></div>");
      if(i == 0 && (i*cols+j) != (0)){
        document.getElementById("cell" + (i*cols+j)).classList.add("wall-up");
      }
      if(i == rows-1 && (i*cols+j) != (rows*cols-1)){
        document.getElementById("cell" + (i*cols+j)).classList.add("wall-down");
      }
      if(j == 0){
        document.getElementById("cell" + (i*cols+j)).classList.add("wall-left");
      }
      if(j == cols-1){
        document.getElementById("cell" + (i*cols+j)).classList.add("wall-right");
      }
    }
    document.getElementById("mazeWrapper").insertAdjacentHTML("beforeend", "<br>");
  }
  gen_maze(rows, cols);
  mazeSize = rows*cols;
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; ++i) {
      var item = cells[i];  
      item.style.width = ((cellSize) + "px");
      item.style.height = ((cellSize) + "px");
  }
}

const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))

async function visualizeDFS(){
  if(!running){
    running = true;
    let speed = document.getElementById("speedInput").value;
    for (let i = 0; i < pathArr.length; i++) {
      if(running){
        document.getElementById("cell" + (pathArr[i])).classList.toggle("visiting");
        await sleep(speed);
        if((pathArr[i] + 1) == mazeSize){
          break;
        }
      }else{
        break;
      }
    }
    running = false;
  }
}