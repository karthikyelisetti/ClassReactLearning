import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useCookies } from "react-cookie";
import Product from "./components/Product";
import Cards from "./components/Cards";

function App() {
  const [cookie, setCookie] = useCookies('');
  return (
      <div className="App">
        {/* Routes enable us to create multiple single path */}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route
            path="/login"
            element={<Login setCookie={setCookie} cookie={cookie}/>}
          />
          <Route path="/pro/:userid" element={<Product/>} />
          <Route path="/cards" element={<Cards/>} />
        </Routes>
      </div>
  );
}

export default App;
