import React, { useRef, useState } from 'react'

export default function LearnUseref() {
    const inputref = useRef(null);
    const [name, setName] = useState('');

    console.log("this component is rendering");

    function handleClick() {
        console.log(inputref.current.value, "from useref");
        console.log(name, "onchange and useState");
    }

    function handleChange(e) {
        setName(e.target.value);
    }
  return (
    <div>
        <input type='text' placeholder='using use ref'/>
        <input type='text' placeholder='using onchange and state' onChange={handleChange} />

        <button onClick={handleClick}>show the text</button>
    </div>
  )
}
