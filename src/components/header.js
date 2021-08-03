import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TheContext } from './context';
import Form from './form';
import './header.css';
import Reviews from './reviews';
const Header=()=>{
    const [header,setHeader]=useState(true);
    const [dropDown,setDropDown]=useState(false);
    const history=useHistory();
    const {setIsDesign,setKindCart,isLogIn,itemHeader,setItemHeader,detail,setDetail,form,setForm,setIsLogIn}=useContext(TheContext);
    const show=()=>{
        if(pageYOffset===0){
            setHeader(true);
        }
        else{
            setHeader(false);
        }
    }
window.addEventListener('scroll',show);
const handlePage=(value)=>{
    window.scrollTo({
        top: 0,
        behavior: "auto"
    })
    history.push(`/home/${value}`);
    setItemHeader('');
    setKindCart('cart');
    setIsDesign(false);
}
const handleLogIn=()=>{
    if(isLogIn){
        setDropDown(!dropDown);
    }
    if(!isLogIn){
        setForm(true);
    }
}
    return(
        <div  className={header && itemHeader===''?"header":"header active"}>
           {detail!="showReview" && detail? <div className="show">
               <div></div>
             <div className="showPhoto">
                 <img src={detail}/>
             </div>
             <div></div>
             <svg onClick={()=>setDetail()} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L25 25" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M25 1L1 25" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
           </div>:""}
           {detail==="showReview"?
           <div className="showReview">
               <Reviews/>
               <div className="showReviewLayout"></div>
           </div>
           :""}
           {form?<div className="text5">
            <Form/>
        </div>:""}
            <div className="actionHeader">
            <div >
                <img src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/39-128.png"/>
                <p>English</p>
            </div>
            <div onClick={handleLogIn}>
                <img src="https://image.flaticon.com/icons/png/128/5087/5087592.png"/>
                <p>{isLogIn?"NGOC THANH":"Log In"}</p>
            </div>
            <div onClick={()=>handlePage('cart')}>
                <img src="https://image.flaticon.com/icons/png/128/3144/3144456.png"></img>
            </div>
            <div>
                <img src="https://image.flaticon.com/icons/png/128/482/482631.png"/>
            </div>
            </div>
            <img onClick={()=>handlePage('')} className="brandHeader" src="https://s3-alpha-sig.figma.com/img/7dd7/b846/63c05140c8097e5101b1bcb5ba33a0a8?Expires=1628467200&Signature=YfePf4H81g4HAz9wicwRUWzG0vT8pmoY7NRtmNSiTd~e8biXhhxiz0m85fX4pHvIcjFB1wuYQEtrL8oV43Y8ZpXX2AxdXVwnpqQMI3E7aSPNxvpf6a9RoRf2NMKna82chpZvoZ-gwjDNvhu52YHsJJfMg68UQZkDn7xndafzNdtvZYi4PAplNwDyWavgeZqzKTHdU6CBluXGqrRUE0HqVfzDM-jmL8qXS60awXUkLnWYgjBjd1iwiOc0KdJKUt4sxKuLva2o0RWORjewssi6oGwokBgSrESe1n0D~WDCmbem1M~0Ro2tOYGlUa063aALBLPF5rc0HydOdJBJ-HPnew__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
            <div className="itemHeader">
                <p className={itemHeader==='design'?"itemActive":''} onClick={()=>handlePage('design')}>Design your own</p>
                <p className={itemHeader==='collection'?"itemActive":''} onClick={()=>handlePage('collection')}>Collection</p>
                <p className={itemHeader==='bags'?"itemActive":''} onClick={()=>handlePage('bags')}>Bags</p>
                <p className={itemHeader==='story'?"itemActive":''} onClick={()=>handlePage('story')}>Our story</p>
                <p className={itemHeader==='news'?"itemActive":''} onClick={()=>handlePage('news')}>News</p>
                <p className={itemHeader==='contact'?"itemActive":''} onClick={()=>handlePage('contact')}>Contact</p>
            </div>
            {dropDown?<div onMouseLeave={()=>setDropDown(false)} className="dropDown">
                <p onClick={()=>handlePage('profile')}>Profile</p>
                <p onClick={()=>handlePage('myOrders')}>My Orders</p>
                <p onClick={()=>setIsLogIn(false)}>Log Out</p>
            </div>:''}
        </div>
    )
}
export default Header;
