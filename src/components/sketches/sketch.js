// import p5 from "p5";
import { ReactP5Wrapper} from "@p5-wrapper/react";
import * as p5 from "p5"
window.p5 = p5
import("p5/lib/addons/p5.sound");
// let count=0;
 let drops=[];
var Drop;
  function sketch(p5){
      p5.setup=function() {
      // Your setup code goes here
      p5.createCanvas(400, 400);
      // Run the draw() function once per second (you will learn about the frameRate() function in a later lesson)
      //p5.frameRate(1);
      // TODO: Move the background() function below to the draw() function
      p5.background(0);
      p5.noStroke();
      p5.frameRate(20);
       Drop=class{
        constructor(x,y,color,size){
          this.x=x;
          this.y=y;
          this.color=color;
          this.size=size;
          this.opacity=200;
        }
        draw(){
          p5.fill(this.color.r,this.color.g,this.color.b,this.opacity);
          // p5.fill(1,50,32,this.opacity);
          p5.circle(this.x,this.y,this.size);
        }
        fade(){
         if(this.opacity>40)this.opacity-=5;
          this.draw();
        }
        delete(){
          drops.pop();
        }
      }

        

    }
    
    p5.draw=function() {
     p5.background(0);
     
     if(drops.length<200){
      let color={
        r:p5.random(200,255),
        g:p5.random(50,70),
        b:p5.random(200,255),
      }
      let drop=new Drop(p5.random(400),p5.random(400),color,p5.random(10,25));
      drop.draw();
      drops.push(drop);
     };
     drops.forEach((drop)=>{
      drop.fade();
     })
    // count++;

    // dropSound.play();
    }
    
  }



  export default function SketchComp(){
    return (
      <ReactP5Wrapper sketch={sketch}/>
    );
  };