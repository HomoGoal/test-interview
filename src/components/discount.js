import React from 'react';
import './discount.css';
const Discount=()=>{
    return(
        <div className="discount">
            <p>NEWSLETTER</p>
            <h1>Subscribe now & get 15% off</h1>
            <div>
                <input placeholder="Your Email"></input>
                <button>SUBSCRIBE</button>
            </div>
        </div>
    )
}
export default Discount;