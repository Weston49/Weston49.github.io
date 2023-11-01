#include <stdio.h>
#include <emscripten.h>
#include <iostream>
#include <vector>
#include <math.h>

using namespace std;

vector<int> func(int n){
  vector<int> v;
  for(int i = 0; i < n; i++){
    v.push_back(i*i);
  }
  return v;
}

extern "C" {
  int int_sqrt(int x) {
    return sqrt(x);
  }
  double float_sqrt(int x) {
    return sqrt(x);
  }
  int test(int n, int i){
    return func(n)[i];
  }
}

/*How to write in line js*/
/*emscripten_run_script("js code here, try to use function calls when possible");*/

int main(){
  emscripten_run_script("hello_world(10)");

  return 0;
}


