import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TheContext } from './context';
import "./headerBagsDetail.css";
const HeaderBagsDetail=({p,p1})=>{
    const history=useHistory();
    const {addToCart,setAddToCart}=useContext(TheContext);
    const viewCart=()=>{
            history.push("/home/cart");
    }
    return(<div className="headerBagsDetail">
        <p className="p">{p}<p>{p1}</p></p>
        {addToCart?
        <div>
            <p onClick={viewCart}className="p">Successfully added to cart. View cart and check out.</p>
            <svg onClick={()=>setAddToCart(false)} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1249 10.9497C10.3527 11.1775 10.7221 11.1775 10.9499 10.9497C11.1777 10.7219 11.1777 10.3525 10.9499 10.1247L6.82504 5.99985L10.9498 1.87514C11.1776 1.64733 11.1776 1.27799 10.9498 1.05018C10.722 0.822375 10.3526 0.822374 10.1248 1.05018L6.00008 5.1749L1.87536 1.05018C1.64756 0.822374 1.27821 0.822374 1.05041 1.05018C0.822601 1.27799 0.822601 1.64733 1.05041 1.87514L5.17512 5.99985L1.05026 10.1247C0.822456 10.3525 0.822456 10.7219 1.05026 10.9497C1.27807 11.1775 1.64741 11.1775 1.87522 10.9497L6.00008 6.82481L10.1249 10.9497Z" fill="white"/>
            </svg>
        </div>:""}
    </div>)
}
export default HeaderBagsDetail;