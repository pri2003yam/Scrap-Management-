import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/loginpage';
import Registerpage from './pages/registerpage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Routes>
       <Route path = "/login" element = {<LoginPage/>}/>
       <Route path = "/register" element = {<Registerpage/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

