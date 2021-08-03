import React from 'react';
import "./moreBagRow.css";
const ImgItem=({name,src})=>{
    return(<div className="imgItem">
    <div className="designImgHover">
        <img src={src}></img>
    </div>
    <p className="pImgItem1">{name}</p>
    <p className="pImgItem2">Start at $50.00</p>
    </div>)
}
export default ImgItem;