import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom"
import Activities from './components/Activities';
import Stats from './components/Stats';
import Snipe from './components/Snipe';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/stats' element={<Stats/>}/>
        <Route path='/snipe' element={<Snipe/>}/>
      </Routes>
    </div>
  );
}

export default App;
