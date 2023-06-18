import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useCookies } from "react-cookie";

function App() {
  const [cookie, setCookie] = useCookies('');
  return (
      <div className="App">
        {/* Routes enable us to create multiple single path */}
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route
            path="/login"
            element={<Login setCookie={setCookie} />}
          />
        </Routes>
      </div>
  );
}

export default App;
