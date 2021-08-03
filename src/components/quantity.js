import React, { useState } from 'react';
import "./quantity.css";
const Quantity=()=>{
    const [number,setNumber]=useState(0);
    return(<div className="quantity">
            <div onClick={()=>setNumber(number-1)}><p>-</p></div>
            <div>{number}</div>
            <div onClick={()=>setNumber(number+1)}><p>+</p></div>
    </div>)
}
export default Quantity;