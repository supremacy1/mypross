
// import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Frontpage from './components/frontpage';
import Signup from './components/singup';
import Profile from './components/profile';
import Bank from './components/bank';
import MainBar from './components/mainbar';

function App() {
  return (
    <>
    {/* <MainBar /> */}
      {/* <Profile /> */}
    {/* <Frontpage /> */}
   {/* <Signup /> */}
   {/* <Bank /> */}
   <BrowserRouter>
   
             
      
       
             <Routes>
             <Route path='/' Component={Frontpage}  />
             <Route path='/frontpage' Component={Frontpage}  />
   
            <Route path='/signup' Component={Signup} />
            <Route path='/profile' Component={Profile} />
            <Route path='/bank' Component={Bank} />
   
    
          </Routes>
          
          
 
    </BrowserRouter>
    {/* <BrowserRouter>
   
             
      
       
             <Routes>
             
             <Route path='/frontpage' Component={Frontpage}  />
            <Route path='/signup' Component={Signup} />
            
           
   
    
          </Routes>
          
          
    
   </BrowserRouter> */}
    </>
  );
}

export default App;
