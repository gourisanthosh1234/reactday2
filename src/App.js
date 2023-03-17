import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
