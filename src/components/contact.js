import React, { useContext, useRef } from 'react';
import Discount from './discount';
import Footer from './footer';
import "./contact.css";
import { TheContext } from './context';
import { useRouteMatch } from 'react-router-dom';
const Contact=()=>{
    const textRef=useRef();
    const {setItemHeader}=useContext(TheContext);
    const match=useRouteMatch();
    if(match.url==="/home/contact"){
        setItemHeader('contact');
    }
    const handleKey=()=>{
        if(textRef){
            textRef.current.style.height='10px';
            textRef.current.style.height=textRef.current.scrollHeight+'px';
        }
    }
    return(<div className="contact">
            <p className="pContact">CONTACT US</p>
            <h1 className="h1Contact">Thanks for reaching out!</h1>
            <div className="contactGroup">
                <div className="contactInfo">
                    <img src="https://s3-alpha-sig.figma.com/img/639d/a348/3e945717cd2eea22c6e7d6e16bcb0acf?Expires=1629072000&Signature=gWbr331ywWkbmzB0YlBt8W2IYeN68If4vKkVC2rxrFQhS7EB3j6fWbuuSnbhjR8k8Pt0zIHSQw8z7fWA~urvLZAAXdnJe8DlEzEBTjxnSY1G7GO659YSK72WPP1y~Bn-PJ1ajmcKj4M4Z7TIyNx~kX186aoN6G4D5yQD03VnrAdVMqlbWzlnY1WOuQ5QUfjeNDzipluDTUZuCrJ5p1dV2Rm7rW6NFpH1DY4esKZm9~02MYwPGEphv8PkKgs0CwzLIEzfkql89V9z9HXgwqP69sxtgRJCMFkqC0GCKvygN9sasQuI8fr86idtjOJIO7NoLlOLDXkO1cEOZSUjLVfvWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                    <p>toiatelier@support.com</p>
                    <p>+84 903 456 678</p>
                </div>
                <div className="comment">
                    <labal>NAME</labal>
                    <input value="NGOC THANH" placeholder="Name"></input>
                    <labal>EMAIL</labal>
                    <input placeholder="Email"></input>
                    <labal>YOUR COMMENT</labal>
                    <textarea ref={textRef}  onKeyPress={handleKey} onKeyUp={handleKey} placeholder="Your Comment"></textarea>
                    <button>SEND COMMENT</button>
                </div>
            </div>
            <Discount/>
            <Footer/>
    </div>)
}
export default Contact;