import { Routes,Route } from 'react-router-dom';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Signin from './components/Signin';
import LandingPage from './components/LandingPage';


function App() {
  return (
    <div className="App">
    {/* <h1>This is app.js</h1> */}
    <Routes>
      {/* <Route path='/' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path="/contact" element={<Contact/>}/> */}
      <Route path='/' element={<LandingPage></LandingPage>} />
    </Routes>
    </div>
  );
}

export default App;
