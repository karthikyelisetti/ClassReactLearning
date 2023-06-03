import React ,{useEffect} from 'react'

// use effect
// hook responsible for side effects like api calling
export default function LandingPage() {
    console.log("I am rendering in landing page component");
    let a = 10;

    useEffect(() => {
        console.log("I am getting printed from useeffect body..");

        let bdy = document.querySelector(".header")
    }, [])
    //[]: dependency array

    console.log("loads second");

    return (
        <div className='header'>LandingPage :{a}</div>
    )
}