import { ReactP5Wrapper } from "@p5-wrapper/react";

  let count=0;
  let dec=false;
  function sketch(p5){
    p5.setup=function() {
      // Your setup code goes here
      p5.createCanvas(400, 400);
      // Run the draw() function once per second (you will learn about the frameRate() function in a later lesson)
      //p5.frameRate(1);
      // TODO: Move the background() function below to the draw() function
      p5.background(200);
    }
    
    p5.draw=function() {
      if(count>230)dec=true;
      if(dec){
        count--;
        if(count===0)dec=false;
      }
      else{
      count++;
      }
      console.log(count);
      p5.background(count);
      // Your drawing code goes here
      // TODO: Set background color to a random gray value
    
    }

    
  }

  export default function SketchComp(){
    return (
      <ReactP5Wrapper sketch={sketch}/>
    );
  };