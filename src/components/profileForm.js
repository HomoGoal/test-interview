import React, { useState } from 'react';
import "./profileForm.css";
const ProfileForm=()=>{
    const [pass,setPass]=useState(false);
    return(<div className="profileForm">
        <div className="profileFixForm">
            <label>NAME</label>
            <input value="NGOC THANH" placeholder="Nane"></input>
            <label>PHONE NUMBER</label>
            <input placeholder="Phone Number"></input>
            <label  disabled className="emailForm">EMAIL</label>
            <input   className="disabled"disabled placeholder="Nguyenngocthanh137@gmail.com"></input>
            <label>PASSWORD</label>
            <div>
            <input className="changePass" placeholder={pass?"Current Password":"Password"}></input>
            {!pass?
            <p onClick={()=>setPass(true)}>Change Password</p>
            :""}
            </div>
             {pass?<input   className="disabled" placeholder="New Password"></input>:""}
             {pass?<input  className="disabled"  placeholder="ConFirm New Password"></input>:""}
        </div>
        <button onClick={()=>setPass(false)}>UPDATE PROFILE</button>
    </div>)
}
export default ProfileForm;