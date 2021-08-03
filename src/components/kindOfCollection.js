import React from 'react';
import "./kindOfCollection.css";
const KindOfCollection=({position,mainImg,img1,img2,h1,p})=>{
    return(<div className="kindOfCollection">
            {position==="left"?
            <div className="collection2020Body"> 
                <img className="nth1" src={mainImg}/>
                <div>
                    <h1>{h1}</h1>
                    <p>{p}</p>
                </div>
            </div>
            :
            <div className="collection2020Body"> 
                <div className="nth1">
                    <h1>{h1}</h1>
                    <p>{p}</p>
                </div>
                <img src={mainImg}/>
            </div>
            }
            <div className={position==="left"?"CollectionImgGroup":"CollectionImgGroup1"}>
                <img className={position==="left"?"smallImg":"bigImg"} src={img1}/>
                <img className={position==="left"?"bigImg":"smallImg"}src={img2}/>
            </div>
            <div className="fill3">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
    </div>)
}
export default KindOfCollection;