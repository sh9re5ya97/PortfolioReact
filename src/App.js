import './App.css';
// import { Outlet, Link } from "react-router-dom";
import SketchComp from './components/sketches/sketch'
import Sk2Comp from './components/sketches/sk2'

function App() {
  return (
    <div className="App font-mono container min-h-screen bg-gradient-to-b from-teal-950 to-emerald-800">
      <nav className="flex items-center justify-between text-teal-700 shadow-2xl shadow-teal-900/50 ">
        <div className='px-8 py-5 font-extrabold'>PFOLIOLIO</div>
        <ul className='flex font-bold'>
          <li className='p-5'>p5.js</li>
          <li className='p-5'>Gallery</li>
          <li className='p-5'>Resume</li>
        </ul>
        </nav>
        <div className='p-8'>
        <div><SketchComp /></div>
        <div><Sk2Comp /></div>
        </div>
    
    </div>
  );
}

export default App;
