import React, { useContext } from 'react';
import { TheContext } from './context';
import "./formAddress.css";
const FormAddress=()=>{
    const {setKindCart,isLogIn}=useContext(TheContext);
    if(!isLogIn){
        setKindCart('cart');
    }
    const handleAddress=()=>{
        setKindCart('payment')
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    }
    return(<div className="formAddress">
        <div className="formAddressGroup">
            <h3>Where should we deliver your order?</h3>
                <label>NAME</label>
                <input placeholder="Your Name"></input>
                <label>PHONE NUMBER</label>
                <input placeholder="Phone Number"></input>
            <div>
                <label>CITY</label>
                <input placeholder="City"></input>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3333 5.83301L9.99992 13.833L1.66658 5.83301" stroke="black"/>
                </svg>
            </div>
            <div>
            <label>DISTRICT</label>
                <input placeholder="District"></input>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3333 5.83301L9.99992 13.833L1.66658 5.83301" stroke="black"/>
                </svg>
            </div>
           
            <label>ADDRESS</label>
            <input placeholder="Address"></input>
        </div>
            <button onClick={handleAddress}>DELIVER TO THIS ADDRESS</button>
    </div>)
}
export default FormAddress;