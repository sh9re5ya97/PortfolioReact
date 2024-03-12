import { ReactP5Wrapper } from "@p5-wrapper/react";

 let x=200,
 y=200,
 xSpeed,
 ySpeed,
 t;
  function sketch(p5){
    p5.setup=function() {
      // Your setup code goes here
      p5.createCanvas(400, 400);
      p5.frameRate(20)
      p5.background(0);
      // Run the draw() function once per second (you will learn about the frameRate() function in a later lesson)
      //p5.frameRate(1);
      // TODO: Move the background() function below to the draw() function
    }
    
    p5.draw=function() {
        p5.noStroke();
    p5.background(0,30);
    p5.fill(p5.random(100,256),p5.random(10),p5.random(50,100),200)
    p5.ellipse(x,y,100,100);
    x+=p5.random(-5,5);
    y+=p5.random(-5,5);
        
    }

    
  }

  export default function Sk2Comp(){
    return (
      <ReactP5Wrapper sketch={sketch}/>
    );
  };