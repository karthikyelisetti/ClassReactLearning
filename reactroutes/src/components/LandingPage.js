import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/LandingPage.css";
import Cards from "./Cards";
// axios: library
//fetch: ajax

// use effect
// hook responsible for side effects like api calling
export default function LandingPage() {
  const [counter, setCounter] = useState(0);
  const [product, setProduct] = useState([]);
  let count = 0;
  console.log("I am rendering in landing page component");

  useEffect(() => {
    console.log("I am getting printed from useeffect body..");

    const apicalling = async () => {
      try {
        let response = await axios.get("https://dummyjson.com/products");
        console.log(response.data);
        setProduct(response.data.products);
      } catch (error) {
        console.log(error);
      }
    };

    apicalling();

    // let body = document.querySelector(".header");
    // console.log(body);
  }, []);
  //[]: dependency array
  // case1: dependency array is empty: useeffect runs only single time when the page renders
  // case2: dependency array has some state or props: whwnever the state or props changes, your useeffect will trigger that many times
  console.log("These are the products", product);

  return (
    //  <div className="header">
    //   In line calling of stateFunction using arrow function
    //   <button onClick={() => setCounter(counter+1)}>+</button>
    //         {counter}
    //   LandingPage :{a}
      <div className="cards">
        {product.length !== 0 ? (
          product.map((element) => {
            return (
              <Cards
                title={element.title}
                image={element.images[0]}
                description={element.description}
              />
            );
          })
        ) : (
          <div>No Product Data</div>
        )}
      </div>
    // </div>
  );
}
