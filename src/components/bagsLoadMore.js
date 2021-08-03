import React from 'react';
import "./moreBagRow.css";
import MoreBagRow from './moreBagRow';
import MoreBagMiddle from './moreBagMiddle';
const BagsLoadMore=({p,h1,position})=>{
    return( <div className="bagsLoadMore">
    <p className="p1">{p}</p>
    <h1 className="h1">{h1}</h1>
    <MoreBagRow/>
    <MoreBagMiddle position={position}/>
    <MoreBagRow/>
    <button className="buttonAll">MORE</button>
</div>)
}
export default BagsLoadMore;