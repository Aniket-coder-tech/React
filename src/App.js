import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import NoteState from './context/State'
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Success from './Components/Success';
import UserState from './context/UserState';
import Main from './Components/Main';
import Alert from './Components/Alert';

function App() {
  return (<div className='o'>
    <NoteState>
    <Router>
    <UserState>
 
    <Navbar/>
    <Alert/>
    <div className="container">
    <Routes>

          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/signup" element={<SignUp/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/success" element={<Success/>}/>
          <Route exact path="/" element={<Main/>}/>
          
        </Routes>
        </div>
        </UserState>
    </Router>
    
    </NoteState>
    </div>
    
  );
}

export default App;
