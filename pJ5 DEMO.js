let randomWalker = [];
let maxWalkers;
let colorPalette = ['red','purple','blue','green','orange'];

function setup() {
  createCanvas(windowHeight, windowWidth);
  background('black');
  
  maxWalkers = 5;
  
  for ( i = 0; i < maxWalkers; i++)
    {
      randomWalker.push(new walker(random(0,width),random(0,height),random(-5,10),colorPalette[i]))
    }
  

}

function draw() { 
 
  for ( i = 0; i < maxWalkers; i++)
 {

  randomWalker[i].display();
  randomWalker[i].walkingDirection();
  randomWalker[i].keepInCanvas();

  // keep website canvas size updated
/// function windowResized () {}



}
  
  
}
