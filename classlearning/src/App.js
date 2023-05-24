// import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Contactus from "./components/Contactus";

function App() {
  const contactdetails = {
    name: "Karthik",
    phone: "9999999999",
    email: "karthikyeilsetti.dev@gmail.com",
  };
  const salutation = ["namaste", "hello", "hola", "bonjour"];
  return (
    <div className="App">
      <Header></Header>
      <Contactus
        name={contactdetails.name}
        phone={contactdetails.phone}
        email={contactdetails.email}
        salutation={salutation}
      ></Contactus>
    </div>
  );
}

export default App;
