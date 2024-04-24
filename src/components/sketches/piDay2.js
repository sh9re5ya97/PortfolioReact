import { ReactP5Wrapper } from "@p5-wrapper/react";
  function sketch(p5){
    let angles = [0, 60, 120, 180, 240, 300];
let step = 0.1;
let totalFrames = 1000;

p5.setup=()=> {
  p5.createCanvas(400, 400);
  p5.frameRate(60)
}

p5.draw=()=> {
  p5.background(255);
  p5.translate(p5.width / 2, p5.height / 2);
  p5.noFill();
  p5.stroke(0);
  p5.rotate(p5.radians(p5.frameCount/5))
  for (let j = 0; j < angles.length; j++) {
    let angle = angles[j];
    let radius = 1;

    p5.beginShape();
    for (let i = 0; i < totalFrames; i++) {
      let x = radius * p5.cos(angle);
      let y = radius * p5.sin(angle);
      p5.vertex(x, y);
      angle += p5.radians(step);
      radius += 0.01;
    }
    p5.endShape();
  }
  totalFrames+=10;
  if(totalFrames){
    
  }
}

    
    
  }

  export default function PiDay2(){
    return (
      <ReactP5Wrapper sketch={sketch}/>
    );
  };