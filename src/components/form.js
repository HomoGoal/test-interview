import React, { useContext, useState } from 'react';
import { TheContext } from './context';
import "./form.css";
const Form=()=>{
    const {setForm,setIsLogIn,setKindCart}=useContext(TheContext);
    const [kind,setKind]=useState('log in');
    const handleLogIn=()=>{
        setForm(false);
        setIsLogIn(true);
        setKindCart('address');
        window.scrollTo({
            top:0,
            behavior:"smooth",
        });
    }
    return(<div className="form">
                <svg className="formSvg" onClick={()=>setForm(false)} width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L21 21" stroke="#1F1F1F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M21 1L1 21" stroke="#1F1F1F" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <p className="pForm">{kind==='log in'?'LOG IN':kind==='sign up'?'SIGN UP':kind==='forgot'?'FORGOT PASSWORD':'CHECK YOUR INBOX'}</p>
                {kind==='forgot'?<p className="pForgotCheck">Input your email, we will send you an instruction to reset your password.</p>
                :
                kind==='check'?<p className="pForgotCheck">Please check your email for the instructions on how to reset your password.</p>
                :""}
                {kind==='check'?
                <svg className="svgCheck" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.4093 30.6964H53.5907C54.372 30.6964 55.0058 30.0627 55.0058 29.2813C55.0058 28.5 54.372 27.8662 53.5907 27.8662H26.4093C25.628 27.8662 24.9951 28.5 24.9951 29.2813C24.9951 30.0627 25.6289 30.6964 26.4093 30.6964Z" fill="#C6B67E"/>
                <path d="M26.4093 17.835H53.5907C54.372 17.835 55.0058 17.2012 55.0058 16.4199C55.0058 15.6386 54.372 15.0039 53.5907 15.0039H26.4093C25.628 15.0039 24.9951 15.6386 24.9951 16.4199C24.9951 17.2012 25.6289 17.835 26.4093 17.835Z" fill="#C6B67E"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M77.7724 32.8738C76.3564 32.0791 74.5182 32.2524 72.7262 33.3476L71.4249 34.1431V9.98845C71.4258 4.48 66.9449 0 61.4364 0H18.5636C13.0551 0 8.57422 4.48 8.57422 9.98845V34.1431L7.27378 33.3476C5.48178 32.2524 3.64267 32.0791 2.22667 32.8738C0.812445 33.6676 0 35.3271 0 37.4267V57.1493V70.0107C0 75.5191 4.48178 80 9.98933 80H70.0116C75.5182 80 80 75.5191 80 70.0107V57.1493V37.4267C80 35.3271 79.1884 33.6676 77.7724 32.8738ZM11.4049 9.98901C11.4049 6.04057 14.6174 2.82812 18.5649 2.82812H61.4378C65.3854 2.82812 68.5969 6.03968 68.5969 9.98901V35.8726L57.8378 42.4468L45.8485 49.7739C42.6805 51.7126 37.3241 51.7126 34.1552 49.7739L20.8218 41.6264L11.4049 35.8726V9.98901ZM77.1703 70.01V57.1487H77.1721V37.426C77.1721 36.3949 76.8805 35.6145 76.3907 35.3398C75.9027 35.0669 75.0832 35.2234 74.2032 35.7611L59.3134 44.8598L47.3249 52.1869C45.2707 53.4411 42.6352 54.0687 40.0014 54.0687C37.3658 54.0687 34.7321 53.4411 32.6787 52.1869L19.3454 44.0394L5.79962 35.7611C4.91873 35.2225 4.10095 35.0642 3.61206 35.3407C3.12317 35.6145 2.83073 36.3949 2.83073 37.426V57.1487V70.01C2.83073 73.9585 6.04228 77.17 9.98984 77.17H70.0112C73.9596 77.17 77.1703 73.9576 77.1703 70.01Z" fill="#C6B67E"/>
                </svg>
                :""}
                <h3 className="title">{kind==='log in'?'Hello there, welcome back!':kind==='sign up'?'Hello there, welcome to TOI!':''}</h3>
                {kind==='sign up'?
                 <div className="formField">
                 <label>NAME</label>
                 <input placeholder="Name"></input>
                </div>
                :""}
                {kind==='log in' || kind==='forgot' || kind==='sign up'?
                <div className="formField">
                    <label>EMAIL</label>
                    <input placeholder="Email"></input>
                </div>
                :""}
                {kind==='log in' || kind==='sign up'?
                <div className="formField">
                    <label>PASSWORD</label>
                    <input type="password" placeholder="Password"></input>
                    {kind==='log in'?<p onClick={()=>setKind('forgot')}>Forgot password</p>:""}
                </div>:""}
                {kind==='sign up'?
                <div className="formField">
                <label>CONFIRM PASSWORD</label>
                <input placeholder="Confirm Password"></input>
               </div>
                :""}
                {kind==='log in'?<button onClick={handleLogIn}>LOG IN</button>:kind==='sign up'?<button onClick={()=>setForm(false)}>SIGN UP</button>:kind==='forgot'?<button onClick={()=>setKind('check')}>SUBMIT</button>:''}
                {kind==='log in'?<p className="pForm">OR LOG IN WITH</p>:""}
                {kind==='log in'?<div className="socialForm">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8389 19.6318V30.2985C17.8389 30.5008 18.0044 30.6663 18.2067 30.6663H21.1492C21.3515 30.6663 21.517 30.5008 21.517 30.2985V19.6318" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8391 15.9541H16.3678C16.1655 15.9541 16 16.1196 16 16.3219V19.2644C16 19.4667 16.1655 19.6323 16.3678 19.6323H17.8391" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5171 19.6323H24.0918C24.2941 19.6323 24.4927 19.4704 24.5332 19.2718L25.1254 16.3146C25.1621 16.1159 25.0297 15.9541 24.8274 15.9541H21.5171" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5649 9.33301H24.4596V13.0112H21.8849L21.5171 13.379V15.9537" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8389 15.9543L17.8536 13.0449" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5653 9.33301C18.9427 9.33301 17.854 11.0948 17.854 13.0443" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="20" cy="20" r="19.6" stroke="#1F1F1F" stroke-width="0.8"/>
</svg>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8389 19.6318V30.2985C17.8389 30.5008 18.0044 30.6663 18.2067 30.6663H21.1492C21.3515 30.6663 21.517 30.5008 21.517 30.2985V19.6318" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8391 15.9541H16.3678C16.1655 15.9541 16 16.1196 16 16.3219V19.2644C16 19.4667 16.1655 19.6323 16.3678 19.6323H17.8391" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5171 19.6323H24.0918C24.2941 19.6323 24.4927 19.4704 24.5332 19.2718L25.1254 16.3146C25.1621 16.1159 25.0297 15.9541 24.8274 15.9541H21.5171" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5649 9.33301H24.4596V13.0112H21.8849L21.5171 13.379V15.9537" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.8389 15.9543L17.8536 13.0449" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21.5653 9.33301C18.9427 9.33301 17.854 11.0948 17.854 13.0443" stroke="#1F1F1F" stroke-width="0.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="20" cy="20" r="19.6" stroke="#1F1F1F" stroke-width="0.8"/>
</svg>
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="19.6" stroke="#1F1F1F" stroke-width="0.8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.554 19.9932C14.554 16.9898 16.9946 14.5407 19.998 14.5407C23.0143 14.5407 25.4506 16.9898 25.4506 19.9932C25.4506 23.0095 23.01 25.4458 19.998 25.4458C16.9903 25.4501 14.554 23.0095 14.554 19.9932ZM25.6267 9.33301H14.3779C11.6065 9.33301 9.3335 11.5931 9.3335 14.3774V25.6263C9.3335 28.3934 11.6065 30.6663 14.3779 30.6663H25.6267C28.4067 30.6663 30.6668 28.3934 30.6668 25.6263V14.3774C30.6668 11.5931 28.4067 9.33301 25.6267 9.33301ZM14.3779 10.592H25.6267C27.7107 10.592 29.4079 12.2892 29.4079 14.3731V25.622C29.4079 27.7059 27.7107 29.4031 25.6267 29.4031H14.3779C12.294 29.4031 10.5967 27.7059 10.5967 25.622V14.3774C10.5924 12.2892 12.2897 10.592 14.3779 10.592ZM26.7439 12.186C26.1295 12.186 25.6353 12.6802 25.6353 13.2946C25.6353 13.909 26.1295 14.4032 26.7439 14.4032C27.3583 14.4032 27.8525 13.909 27.8525 13.2946C27.8525 12.6802 27.3583 12.186 26.7439 12.186ZM26.8771 19.9932C26.8771 16.1992 23.8006 13.1141 19.998 13.1141C16.1997 13.1141 13.1146 16.1992 13.1146 19.9932C13.1146 23.8001 16.1997 26.8723 19.9937 26.8723C23.8006 26.8766 26.8771 23.8001 26.8771 19.9932Z" fill="#1F1F1F"/>
</svg>
                </div>:""}
                <p className="pFooter">{kind==='log in'?'DON’T HAVE AN ACCOUNT, '
                :
                kind==='sign up'?'HAD AN ACCOUNT ':'BACK TO '
                }
                {kind==='log in'?
                <p onClick={()=>setKind('sign up')}className="pFooter1">SIGN UP HERE</p>
                :
                kind==="sign up"?<p onClick={()=>setKind('log in')}className="pFooter1">LOG IN HERE</p>
                :
                <p onClick={()=>setKind('log in')}className="pFooter1">LOG IN</p>
                }
                
                </p>
    </div>)
}
export default Form;