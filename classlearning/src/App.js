// import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Contactus from "./components/Contactus";
import {useState} from 'react';

function App() {
  // states
  //initial
  // hooks: responsible for managing state of our webpage is (useState)
  // let [stateVariable, stateFunction] = useState (defaultstate/ initial state)
  const [name, setName] = useState('heroVired');
  // statevariable = this is responsible for storing the state of your component
  // statefunction = this is responsible for manipulating or changing the statevariable according to events.
  console.log("this is name", name);
  console.log("this is statefunction:", setName)
  // let name = "Herovired";
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

  function handleClick() {
    console.log("I am clicking the button now");
    // Inorder to change the state of our name, we will use statefunction
    setName('hero');
  }

  return (
    <div className="App">
      <Header myname={name} mynumber={num} mysalutation={obj.name} myage={obj.age} copyright={obj.copyright}></Header>
      <Contactus
        name={contactdetails.name}
        phone={contactdetails.phone}
        email={contactdetails.email}
        salutation={salutation}
      ></Contactus>
      <button onClick={handleClick}>click me...</button>
    </div>
  );
}

export default App;

//props: property or value, which we want to pass from one component to another
// props can be passed from parent to child not from child to parent
// Siblings cannot pass props to each other
// Export default is used to create single complonent file in a single module
