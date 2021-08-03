import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TheContext } from './context';
import "./fallWinterCollectionReview.css";
const FallWinterCollectionReview=()=>{
    const history=useHistory();
    const {setAddToCart}=useContext(TheContext);
    const handleDiscover=()=>{
        history.push('/home/collection/fall-winter-2020');
        window.scrollTo({
            top:0,
            behavior:"auto"
        });
        setAddToCart(false);
    }
    return(<div className="fallWinterCollectionReview">
            <h1>Fall Winter 2020 Collection</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
            <button onClick={handleDiscover}>DISCOVER MORE</button>
    </div>)
}
export default FallWinterCollectionReview;