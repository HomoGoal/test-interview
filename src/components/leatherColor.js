import React from 'react';
import "./leatherColor.css";
const LeatherColor=({colors})=>{
    return(<div className="leatherColor">
        {colors.map(color=><div className="leatherColorItem">
            <div>
                <div style={{background:`${color}`}}></div>
            </div>
            <p>MERINAL</p>
        </div>)}
    </div>
    )
}
export default LeatherColor;