function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function draw_circle(x, y, r){
  const canvas = document.getElementById("canvas");
  if(canvas.getContext){
    const ctx = canvas.getContext("2d");

    const circle = new Path2D();
    circle.arc(x, y, r, 0, 2 * Math.PI);
    ctx.stroke(circle);
  }
}

function draw_rect(x, y, w, h){
  const canvas = document.getElementById("canvas");
  if(canvas.getContext){
    const ctx = canvas.getContext("2d");
    ctx.fillRect(x, y, w, h);
  }
}

function clear_draw(){
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

let rendering = false;
let stop = false;

function onLoad(){
  document.getElementById("timeSlider").oninput = function() {
    document.getElementById("timeDisplay").innerHTML = this.value;
  }
}



function stop_render(){
  stop = true;
}

async function render(){
  let fall = true;
  let right = true;
  let x = 20;
  let y = 20;
  if(rendering) return;
  while(1){
    if(document.getElementById("playSim").checked){
      clear_draw();
      if(fall){
        y++;
      }else{
        y--;
      }
      if(right){
        x++;
      }else{
        x--;
      }
      if(y >= 130) fall = false;
      if(y <= 0) fall = true;
      if(x >= 270) right = false;
      if(x <= 0) right = true;
      
      draw_rect(x, y, 30, 20);
    }
    await sleep(105 - document.getElementById("timeSlider").value); // determines the fps
    rendering = true;
    if(stop){
      clear_draw();
      stop = false;
      rendering = false;
      return;
    }
  }
}

