function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

function jsprint(i){
  console.log(i);
}
//new_function_name = Module.cwrap('name_original_func', 'return_type', ['array', 'of', 'paramater', 'types'])
//parameter 2 is null if no return type, parameter 3 is optional if no parameters
int_sqrt = Module.cwrap('int_sqrt', 'number', ['number'])
float_sqrt = Module.cwrap('float_sqrt', 'number', ['number'])
test = Module.cwrap('test', 'number', ['number', 'number'])
gen_maze = Module.cwrap('gen_maze', 'number', ['number', 'number']);