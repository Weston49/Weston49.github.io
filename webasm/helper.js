function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

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

//new_function_name = Module.cwrap('name_original_func', 'return_type', ['array', 'of', 'paramater', 'types'])
//parameter 2 is null if no return type, parameter 3 is optional if no parameters
int_sqrt = Module.cwrap('int_sqrt', 'number', ['number'])
float_sqrt = Module.cwrap('float_sqrt', 'number', ['number'])
test = Module.cwrap('test', 'number', ['number', 'number'])
gen_maze = Module.cwrap('gen_maze', 'number', ['number', 'number']);


//============================ Below this line is just pure js stuff that talks to the cpp above sometimes ===================================== 


function draw_maze(){
  let rows = document.getElementById("rowsInput").value;
  let cols = document.getElementById("colsInput").value;
  document.getElementById("mazeWrapper").innerHTML = "";
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
}