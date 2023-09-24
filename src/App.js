
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Frontpage from './components/frontpage';
import Signup from './components/singup';
import Profile from './components/profile';

function App() {
  return (
    <div className="App">
      <Profile />
   {/* <Frontpage /> */}
   {/* <Signup /> */}
   {/* <Router>
             
      
       
             <Routes>
             
             <Route path='/frontpage' Component={Frontpage}  />
   
            <Route path='/signup' Component={Signup} />
   
    
          </Routes>
          
          
    </Router>
    */}
    </div>
  );
}

export default App;
