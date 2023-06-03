import { Routes,Route } from 'react-router-dom';
import Contact from './components/Contact';
import Signup from './signup';
import Signin from './signin'
import LandingPage from './LandingPage';


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
