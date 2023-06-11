// import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Contactus from "./components/Contactus";

function App() {
  let name = "Herovired";
  let num = 10;
  //how to pass multiple props
  const contactdetails = {
    name: "Karthik",
    phone: "9999999999",
    email: "karthikyeilsetti.dev@gmail.com",
  };
  let obj = {
    name:"hello",
    age:19,
    copyright: "@hello"
  }
  // name and age should be rendered in header
  // copyright should come in footer

  const salutation = ["namaste", "hello", "hola", "bonjour"];
  return (
    <div className="App">
      <Header myname={name} mynumber={num} mysalutation={obj.name} myage={obj.age} copyright={obj.copyright}></Header>
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

//props: property or value, which we want to pass from one component to another
// props can be passed from parent to child not from child to parent
// Siblings cannot pass props to each other
// Export default is used to create single complonent file in a single module
