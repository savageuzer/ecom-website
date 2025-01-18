import React from 'react'
import './child.css'

function Child({image, chairName, price, altName, logo}) {
  return (
    <>
     <section>
      <div className="container">
       <div className="parent">
        <div className="images">
          <img src={image} alt={altName} className='props-images' />
        </div>
        <div className="heading">
          <h3>{chairName}</h3>
        </div>
        <div className="prica-and-cart">
          <div className="price">
            <p>{price}</p>
            <div className="cart">
              <button>{logo}</button>
            </div>
          </div>
        </div>
       </div>
      </div>
     </section>
    </>
  )
}

export default Child