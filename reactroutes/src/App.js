import { Routes,Route } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
    {/* <h1>This is app.js</h1> */}
    <Routes>
      {/* <Route path='/' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>*/}
      <Route path='/' element={<MainPage></MainPage>} />
    </Routes>
    </div>
  );
}

export default App;
