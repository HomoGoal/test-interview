import React from 'react';
import { createContext,useState } from 'react';

export const TheContext=createContext();
const Context=({children})=>{
    const [itemHeader,setItemHeader]=useState('');
    const [detail,setDetail]=useState();
    const [addToCart,setAddToCart]=useState(false);
    const [form,setForm]=useState(false);
    const [isLogIn,setIsLogIn]=useState(false);
    const [kindCart,setKindCart]=useState('cart');
    const [isDesign,setIsDesign]=useState(false);
    return(
        <TheContext.Provider value={{isDesign,setIsDesign,kindCart,setKindCart,isLogIn,setIsLogIn,form,setForm,addToCart,setAddToCart,detail,setDetail,itemHeader,setItemHeader}}>
            {children}
        </TheContext.Provider>
    )
}
export default Context;