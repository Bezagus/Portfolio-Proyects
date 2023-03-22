import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import './App.css'
import Day1 from './Components/Projects/Day1/Day1.jsx';
import Day2 from './Components/Projects/Day2/Day2.jsx';
import Day3 from './Components/Projects/Day3/Day3.jsx';
import Day4 from './Components/Projects/Day4/Day4.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Expanding-Cards' element={<Day1/>}/>
        <Route exact path='/Progress-Steps' element={<Day2/>}/>
        <Route exact path='/Rotating-Navigation' element={<Day3/>}/>
        <Route exact path='/Hidden-Search' element={<Day4/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
