import React, { useContext } from 'react';
import "./bagDetailPhoto.css";
import { TheContext } from './context';
const BagDetailPhoto=({url})=>{
    const {setDetail}=useContext(TheContext);
    const handle=()=>{
        setDetail(url);
    }
    return(<div className="detailPhotoItem">
        <img onClick={handle} src={url}/>
    </div>)
}
export default BagDetailPhoto;