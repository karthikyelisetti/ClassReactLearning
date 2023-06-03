import React ,{useEffect, useState} from 'react'
import axios from 'axios';
// axios: library
//fetch: ajax

// use effect
// hook responsible for side effects like api calling
export default function LandingPage() {
    const [counter, setCounter] = useState(0);
    const [product, setProduct] = useState([]);
    console.log("I am rendering in landing page component");

    useEffect(() => {
        console.log("I am getting printed from useeffect body..");

        const apicalling = async() => {
            try {
                let response = await axios.get("https://dummyjson.com/products");
                console.log(response.data);
                setProduct(response.data.products);
            }catch(error) {
                console.log(error);
            }
        }

        apicalling();

        // let body = document.querySelector(".header");
        // console.log(body);
    }, [])
    //[]: dependency array
    // case1: dependency array is empty: useeffect runs only single time when the page renders
    // case2: dependency array has some state or props: whwnever the state or props changes, your useeffect will trigger that many times
    console.log("These are the products",product);

    return (
        <div className='header'>
            {/* In line calling of stateFunction using arrow function */}
            {/* <button onClick={() => setCounter(counter+1)}>+</button>
            {counter} */}
            {/* LandingPage :{a} */}
            {
                product.length !==0 ? product.map((element) => (
                    <div className="card d-flex mt-5" style={{width: '18rem'}}>
                        <img src={element.thumbnail} className="card-img-top" alt={element.title} />
                        <div className="card-body">
                            <h5 className="card-title">{element.title}</h5>
                            <p className="card-text">{element.brand}</p>
                        </div>
                    </div>

                )): <div>No Product Data</div>
            }
        </div>
    )
}