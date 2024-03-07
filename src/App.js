import './App.css';
import { ReactP5Wrapper } from "@p5-wrapper/react";
import sketch from './components/sketch/sketch'

function App() {
  return (
    <div className="App">
      PFOLIOLIO
    <ReactP5Wrapper sketch={sketch}/>
    </div>
  );
}

export default App;
