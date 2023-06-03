// import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Contactus from "./components/Contactus";

function App() {
  let name = "Herovired";
  const contactdetails = {
    name: "Karthik",
    phone: "9999999999",
    email: "karthikyeilsetti.dev@gmail.com",
  };
  const salutation = ["namaste", "hello", "hola", "bonjour"];
  return (
    <div className="App">
      <Header myname={name}></Header>
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

//props: property or value, which we want to pass
// props can be passed from parent to child not from child to parent
// Siblings cannot pass props to each other
