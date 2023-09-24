
// import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Frontpage from './components/frontpage';
import Signup from './components/singup';
import Profile from './components/profile';

function App() {
  return (
    <>
      {/* <Profile /> */}
   {/* <Frontpage /> */}
   {/* <Signup /> */}
   {/* <BrowserRouter>
   
             
      
       
             <Routes>
             
             <Route path='/frontpage' Component={Frontpage}  />
   
            <Route path='/signup' Component={Signup} />
   
    
          </Routes>
          
          
 
    </BrowserRouter> */}
    <Router>
             
      
       
             <Routes>
             
             <Route path='/frontpage' Component={Frontpage}  />
            <Route path='/signup' Component={Signup} />
            
           
   
    
          </Routes>
          
          
    </Router>
   
    </>
  );
}

export default App;
