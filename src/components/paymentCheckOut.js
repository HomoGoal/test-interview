import React, { useContext } from 'react';
import CheckOut from './checkOut';
import { TheContext } from './context';
import Payment from './payment';
import "./paymentCheckOut.css";
const PaymentCheckOut=()=>{
    const {isLogIn,setKindCart}=useContext(TheContext);
    if(!isLogIn){
        setKindCart('cart');
    }
    return(<div className="paymentCheckOut">
            <Payment/>
            <CheckOut/>
        </div>)
}
export default PaymentCheckOut;