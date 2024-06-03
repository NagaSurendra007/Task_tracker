//import logo from './logo.svg';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import TaskTracker from './components/TaskTracker'
import Login from './components/Login';
import Registration from './components/Registration';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar></Navbar>
     
      <Routes>
        <Route path="/" element={<Login></Login>}/>
        <Route path="/Registration" element={<Registration></Registration>}/>
        <Route path="/Tracker" element ={<TaskTracker></TaskTracker>}/>
      </Routes>
     
    
    </div>
    </BrowserRouter>
  );
}

export default App;
