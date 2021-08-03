import React, { useContext } from 'react';
import { TheContext } from './context';
import "./fallWinter.css";
import MoreBagRow from './moreBagRow';
const FallWinter=()=>{
    return(<div className="fallWinter">
        <div className="fallWinter1">
            <div>
            <h1>Fall Winter 2020 Collection</h1>
            <button>DISCOVER MORE</button>
            </div>
        </div>
        <p className="p1">RELATED PRODUCTS</p>
        <h1 className="h1">There’s more that is waiting for you </h1>
        <div className="fallWinter2">
        <svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3335 1.33325L1.3335 17.9999L17.3335 34.6666" stroke="#1F1F1F"/>
</svg>
<svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666748 1.33325L16.6667 17.9999L0.666748 34.6666" stroke="#1F1F1F"/>
</svg>

            <MoreBagRow/></div>
        
    </div>)
}
export default FallWinter;