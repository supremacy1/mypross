
// import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Frontpage from './components/frontpage';
import Signup from './components/singup';

function App() {
  return (
    <div className="App">
   {/* <Frontpage /> */}
   {/* <Signup /> */}
   <Router>
             
      
       
             <Routes>
             
             <Route path='/frontpage' Component={Frontpage}  />
   
            <Route path='/signup' Component={Signup} />
   
    
          </Routes>
          
          
    </Router>
   
    </div>
  );
}

export default App;
