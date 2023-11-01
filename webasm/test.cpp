#include <stdio.h>
#include <emscripten.h>
#include <iostream>
#include <vector>
#include <math.h>
#include <cstdlib>
#include <cstdio>
#include <map>

using namespace std;

class DisjointSet {
  public:
    DisjointSet(int nelements);
    int Union(int s1, int s2);
    int Find(int element); 
    void Print() const;
  private:
    vector <int> links;
    vector <int> ranks;
};

DisjointSet::DisjointSet(int nelements)
{
  links.resize(nelements, -1);
  ranks.resize(nelements, 1);
}

int DisjointSet::Union(int s1, int s2)
{
  int p, c;

  if (links[s1] != -1 || links[s2] != -1) {
    cerr << "Must call union on a set, and not just an element.\n";
    exit(1);
  }

  if (ranks[s1] > ranks[s2]) {
    p = s1;
    c = s2;
  } else {
    p = s2;
    c = s1;
  }
  
  links[c] = p;
  if (ranks[p] == ranks[c]) ranks[p]++;
  return p;
}

int DisjointSet::Find(int e)
{
  int p, c;   // P is the parent, c is the child.
  c = -1;

  /* Find the root of the tree, but along the way, set
     the parents' links to the children. */

  c = -1;
  while (links[e] != -1) {
    p = links[e];
    links[e] = c;
    c = e;
    e = p;
  }

  /* Now, travel back to the original element, setting
     every link to the root of the tree. */

  p = e;
  e = c;
  while (e != -1) {
    c = links[e];
    links[e] = p;
    e =c;
  }
  return p;
}

////////Maze Generator

vector < vector <int> > maze_gen(int r, int c){
  int row, column, c1, c2, ncomp, s1, s2;
  DisjointSet *d;
  map <double, int> walls;
  map <double, int>::iterator wit;
  map <double, int>::iterator tmp;
  vector< vector <int> > return_walls;
  vector <int> tempV;

  d = new DisjointSet(r*c);

  /* Generate walls that separate vertical cells. */

  for (row = 0; row < r-1; row++) {
    for (column = 0; column < c; column++) {
      c1 = row*c + column;
      walls.insert(make_pair(drand48(), c1));
    }
  }

  /* Generate walls that separate horizontal cells. */

  for (row = 0; row < r; row++) {
    for (column = 0; column < c-1; column++) {
      c1 = (row*c + column) + r*c;
      walls.insert(make_pair(drand48(), c1));
    }
  }

  /* Run through the walls map, deleting walls when they
     separate cells in different disjoint sets. */

  ncomp = r*c;
  wit = walls.begin();
  while (ncomp > 1) {
    c1 = wit->second;
    if (c1 < r*c) {    // This is a wall separating vertical cells.
      c2 = c1 + c;
    } else {           // This is a wall separating horizontal cells.
      c1 -= r*c;
      c2 = c1+1;
    }
    s1 = d->Find(c1);
    s2 = d->Find(c2);
    if (s1 != s2) {     // Test for different connected components.
      d->Union(s1, s2);
      tmp = wit;
      wit++;
      walls.erase(tmp);
      ncomp--;
    } else {
      wit++;
    }
  }

  /* Print out the remaining walls. */

  //printf("ROWS %d COLS %d\n", r, c);

  for (wit = walls.begin(); wit != walls.end(); wit++) {
    c1 = wit->second;
    if (c1 < r*c) {
      c2 = c1 + c;
    } else {
      c1 -= r*c;
      c2 = c1+1;
    }
    //printf("WALL %d %d\n", c1, c2);
    tempV.clear();
    tempV.push_back(c1);
    tempV.push_back(c2);
    return_walls.push_back(tempV);
  }
  return return_walls;
}



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
  int gen_maze(int r, int c){
    vector <vector <int> > maze;
    string s;
    maze = maze_gen(r,c);
    for(int i = 0; i < maze.size(); i++){
      /*s = "\'WALL " + to_string(maze[i][0]) + " " + to_string(maze[i][1]) + "\'";
      s = "jsprint(" + s + ")";
      emscripten_run_script(s.c_str());*/
      s = to_string(maze[i][0]) + "," + to_string(maze[i][1]) + "," + to_string(c);
      s = "genwall(" + s + ")";
      emscripten_run_script(s.c_str());
    } 
    return 0;
  }
}

/*How to write in line js*/
/*emscripten_run_script("js code here, try to use function calls when possible");*/

int main(){

  return 0;
}


