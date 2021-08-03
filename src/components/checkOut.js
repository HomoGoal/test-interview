import React from 'react';
import { useHistory } from 'react-router-dom';
import "./checkOut.css";
const CheckOut=()=>{
    const history=useHistory();
    const handleCheckOut=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
        history.push('/home')
    }
    return(<div className="checkOut">
            <div className="checkOutForm">
                <div className="checkOutFormItem1">
                <div className="productCheckOut">
                    <div className="productCheckOutImg">
                        <img  src="https://s3-alpha-sig.figma.com/img/8659/f548/876e47d2c542dd8f1f2ada71fe27cfa1?Expires=1629072000&Signature=UXlg0ABaNommdyhNYWbHSTuEiFbysIkWzQWhbJj5m-q54u-4UPsiiRAUzdAiF~54codIq9O8kB1uzA4UkDLJLFDbBnBHUSM5MaK7YKgWERzpN5rNtdXlcF~ugBodvauKn~BbrjZtRgNWBAJtPpI9xpit0IlfU1peGlfwxKkX-Hi7BQgk432mLzaT2uPxceLgGm90aZfVBnHnsTP8EuP~PtG-EHyMsec84OlF6q770JlSWx6wzPxZ96MONH2bqhlvOWy8W5DZgrDnMUfkc1ruGavi-zHuTj~mEL~JkXxLffAVKgSuYQL06IIfeTkFefl8OowRnvdfNm8xAvZF6KMhxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                    </div>
                   <div className="productCheckOutImgDetail">
                       <h4>Convertible Mini Merinal</h4>
                       <h3>$1,000.00</h3>
                       <p>(1 x $1,000.00)</p>
                   </div>
                </div>
                <div className="productCheckOut">
                    <div className="productCheckOutImg">
                        <img  src="https://s3-alpha-sig.figma.com/img/959c/1dee/d01fea56ddf200b3f381370bb4733510?Expires=1629072000&Signature=OQ4xFFwaA~VW9ShXLAlQQzLKxYS6Slfs-TcAkDu5-sWi-1KDS77a2BA3GVU-U6A6uo9qmLoR0Zf8Pd5tt~pCHFj-8RT3CAlCyxdtycAmj0UESxUcdHGnjZCCaZFhrRvzmwcA0-rt9rTuF-Qfgk~GwrN5BtimPEKbYP1BGp1fWSsfw3MVHmyo61ZCzXyntQtz8GT952DaarWefOQ44UhI4vaqwef~LO1-SMkIOFD4kWm0iDZa6nS1SrDIoChetiCZgIGIonfFPbxB2GiWAB628AownwqtDVKn9uvniEuFWl-LXyHlj398ztPKmj~rvcgET8LpxJcju0FKKSeMcToxKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                    </div>
                   <div className="productCheckOutImgDetail">
                       <h4>Convertible Mini Merinal</h4>
                       <h3>$2,000.00</h3>
                       <p>(2 x $1,000.00)</p>
                   </div>
                </div>
                <div className="productPrice">
                    <p>SUBTOTAL</p>
                    <h4>$3,000.00</h4>
                </div>
                <div className="productPrice">
                    <p>SHIPPING FEE</p>
                    <h4>$3.00</h4>
                </div>
                </div>
                <div className="productPrice">
                    <p>TOTAL</p>
                    <h3>$3,003.00</h3>
                </div>
                
            </div>
            <button onClick={handleCheckOut}className="buttonCheckOut">CONFIRM & CHECK OUT</button>
    </div>)
}
export default CheckOut;