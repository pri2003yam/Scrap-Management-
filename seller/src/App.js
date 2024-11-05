import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/loginpage';
import Registerpage from './pages/registerpage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './componenets/Navbar';
import Carousal from './componenets/carousal';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <BrowserRouter>
       <Routes>
       <Route path = "/home" element = {<Home/>}/>
       <Route path = "/login" element = {<LoginPage/>}/>
       <Route path = "/register" element = {<Registerpage/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

