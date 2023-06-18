// import logo from "./logo.svg";
import "./App.css";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Contactus from "./components/Contactus";
import {useState} from 'react';
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import All from './context/Allcontext';

function App() {
  // states
  //initial
  // hooks: responsible for managing state of our webpage is (useState)
  // let [stateVariable, stateFunction] = useState (defaultstate/ initial state)
  const [name, setName] = useState('heroVired');
  const [showTitlePage, setshowTitlePage] = useState(true);
  const [num, setNum ] = useState(0);
  // statevariable = this is responsible for storing the state of your component
  // statefunction = this is responsible for manipulating or changing the statevariable according to events.
  console.log("this is name", name);
  console.log("this is statefunction:", setName)
  // let name = "Herovired";
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
  const [global, setGlobal] = useState('Global');

  function handleClick() {
    console.log("I am clicking the button now");
    // Inorder to change the state of our name, we will use statefunction
    setName('hero');
  }

  function increment() {
    setNum(num+1);
    console.log("this is the num after increment", num);
  }

  function decrement() {
    console.log("this is the num before decrement", num);
    setNum(num-1);
  }

  return (
    <div>
      <Header myname={name} mynumber={num} mysalutation={obj.name} myage={obj.age} copyright={obj.copyright}></Header>
      <Contactus
        name={contactdetails.name}
        phone={contactdetails.phone}
        email={contactdetails.email}
        salutation={salutation}
      ></Contactus>
      <div>
        This is my counter {num}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <div>
        My organization name is {name}
        <button onClick={handleClick}>click me...</button>
      </div>      
      <div>
        <Header name={name} setName={setName} showTitlePage={showTitlePage} setshowTitlePage={setshowTitlePage}></Header>
        <Footer name={name}></Footer>
        <br></br>
      </div>      
      {/* <All.Provider value={{global}}>
        <Header></Header>
        Inside App: {contactdetails.name} <br></br>
        <Contactus name={contactdetails.name} phone={contactdetails.phone} email={contactdetails.email}
        salutation={salutation}></Contactus><br></br>
        ----------------------------------------------
        <br></br>
        Details comming from Profile <br></br>
        <Profile></Profile>
      </All.Provider>       */}
    </div>
  );
}

export default App;

//props: property or value, which we want to pass from one component to another
// props can be passed from parent to child not from child to parent
// Siblings cannot pass props to each other
// Export default is used to create single complonent file in a single module
