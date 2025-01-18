"use client";

import { useEffect, useState } from "react";
import "./productsapi.css";

export default function ProductsApi() {
  const [data, setData] = useState([]);

  //     useEffect(() => {
  //         fetch('https://dummyjson.com/products')
  //             .then((res) => res.json())
  //             .then((data) => {
  //                 console.log(data)
  //                 setData(data.products)
  //             })
  //             .catch((error) => console.error("Error fetching data:", error))
  //     }, [])
  // console.log(data,"kkk");

  const getData = async () => {
    const response = await fetch("https://dummyjson.com/products");

    const data = await response.json();
    if (data) {
      setData(data.products);
    } else {
      setData([]);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // console.log(data);

  return (
    <>
      <section>
        <div className="container">
          <div className="products">
            <h1>Product List</h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="product-wrap">
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <>
                  <div key={index} className="product-col">
                    <img src={item.images[0]} alt="image" width="170" />
                    <h3>{item.title}</h3>
                    <p>{item.category}</p>
                  </div>
                </>
              ))
            ) : (
              <>
                <p>data not found</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
