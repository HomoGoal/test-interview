import React, { useContext, useState } from 'react';
import { TheContext } from './context';
import "./productDetail.css";
const ProductDetail=()=>{
    const [product,setProduct]=useState(false);
    const {setDetail}=useContext(TheContext);
    const handleShowReview=()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        });
        setDetail("showReview");
    }
    return(<div className="productDetail">
            <div onClick={()=>setProduct(!product)}>
                <h2 className="h2">PRODUCT DETAILS</h2>
                {!product?<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3333 5.83325L9.99992 13.8333L1.66658 5.83325" stroke="black"/>
                </svg>
                :
                <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.666748 9.16663L9.00008 1.16663L17.3334 9.16663" stroke="black"/>
</svg>}
            </div>
            <div className={product?"showProductDetail active":"showProductDetail"}>
                <p className="para">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <p>Model Measurements</p>
                <p className="para">Model is 178cm/ 5’10” and is wearing a US 2</p>
                <p>Composition</p>
                <p className="para">92% POLYESTER 8% POLYURETHANE</p>
                <p>Washing Instructions</p>
                <p className="para">Dry clean only</p>
                <p>Made in</p>
                <p className="para">Italy</p>
            </div>
            <div onClick={handleShowReview}>
                <h2  className="h2">REVIEWS (16)</h2>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.3333 5.83325L9.99992 13.8333L1.66658 5.83325" stroke="black"/>
                </svg>
            </div>
    </div>)
}
export default ProductDetail;