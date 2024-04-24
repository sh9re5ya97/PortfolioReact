import { ReactP5Wrapper } from "@p5-wrapper/react";
  function sketch(p5){
  let x=0,y1,y2,xSpeed=2;
  p5.setup=()=> {
  p5.createCanvas(400, 400);
  p5.background(0);
  p5.frameRate(30);
}

 p5.draw=()=> {
  p5.background(0,2)
  p5.strokeWeight(2);
  p5.stroke('white');
  // p5.point(x,y1);
  // p5.point(x,y2);
  // y=p5.sin(x)*10+200;
  p5.point(x,p5.sin(p5.frameCount * 0.05)*10+10);
  // y1 = 30 * p5.sin(p5.frameCount * 0.05) + 50;
  // y2 = p5.sin(x* 0.05)*10+200;
  x+=xSpeed;
  if(x>p5.width||x<0){
    xSpeed*=-1;
  }

  for(let i=0;i<100;i++){
    p5.point(x,p5.sin(p5.frameCount * 0.05*i)*10+10*i);
  }
  
}
    
  }

  export default function PiDay(){
    return (
      <ReactP5Wrapper sketch={sketch}/>
    );
  };