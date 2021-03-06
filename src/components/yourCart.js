import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { TheContext } from './context';
import FormAddress from './formAddress';
import Quantity from './quantity';
import "./yourCart.css";
const YourCart=()=>{
    const {isLogIn,setForm,setKindCart}=useContext(TheContext);
    const checkOut=()=>{
        if(isLogIn){
            setKindCart('address');
            window.scrollTo({
                top:0,
                behavior:"smooth",
            });
        }
        if(!isLogIn){
            setForm(true);
        }
        
    }
    return(<div className="yourCart">
        <div className="yourCart1">
        <div className="yourCartGroup1">
            <div className="yourCartGroupImg">
                <img src="https://s3-alpha-sig.figma.com/img/8659/f548/876e47d2c542dd8f1f2ada71fe27cfa1?Expires=1629072000&Signature=UXlg0ABaNommdyhNYWbHSTuEiFbysIkWzQWhbJj5m-q54u-4UPsiiRAUzdAiF~54codIq9O8kB1uzA4UkDLJLFDbBnBHUSM5MaK7YKgWERzpN5rNtdXlcF~ugBodvauKn~BbrjZtRgNWBAJtPpI9xpit0IlfU1peGlfwxKkX-Hi7BQgk432mLzaT2uPxceLgGm90aZfVBnHnsTP8EuP~PtG-EHyMsec84OlF6q770JlSWx6wzPxZ96MONH2bqhlvOWy8W5DZgrDnMUfkc1ruGavi-zHuTj~mEL~JkXxLffAVKgSuYQL06IIfeTkFefl8OowRnvdfNm8xAvZF6KMhxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            </div>
            <div className="yourCartGroupItem1">
                <p className="pCart1">Convertible Mini Merinal</p>
                <div className="quantityCart">
                    <p className="p2Cart1">$1,000.00</p>
                    <Quantity/>
                </div>
                <div className="yourCartCustomise">
                    <p>DELETE</p>
                    <svg width="1" height="20" viewBox="0 0 1 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="1" height="20" fill="#ACACAC"/>
                    </svg>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8421 6.89746C12.1571 6.89746 12.4528 7.02024 12.6752 7.24283L12.7506 7.31783C13.2102 7.77745 13.2102 8.52504 12.7512 8.98448L3.75364 17.9818C3.53124 18.2044 3.23513 18.3268 2.9205 18.3268C2.60569 18.3268 2.30995 18.2044 2.08736 17.9818L2.01162 17.9055C1.7894 17.6837 1.66663 17.3877 1.66663 17.0731C1.66663 16.7583 1.78922 16.4626 2.01162 16.2398L11.0091 7.24246C11.2317 7.02024 11.5275 6.89746 11.8421 6.89746ZM3.33678 17.5651L12.3343 8.56755C12.5639 8.33792 12.5639 7.96459 12.3345 7.73478L12.2591 7.65978C12.1473 7.54811 11.9997 7.487 11.8423 7.487C11.685 7.487 11.5374 7.54811 11.4263 7.65941L2.42883 16.6569C2.31735 16.768 2.25605 16.9156 2.25605 17.0732C2.25605 17.2302 2.31735 17.378 2.42864 17.4889L2.50457 17.5654C2.72642 17.7873 3.11456 17.7876 3.33678 17.5651Z" fill="#1F1F1F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8434 3.31716C18.0806 3.35161 18.2513 3.47735 18.3113 3.66216C18.3715 3.84716 18.3073 4.04938 18.135 4.21697L17.2358 5.09363C17.2374 5.09226 17.2367 5.09695 17.2359 5.10253C17.2355 5.10599 17.2349 5.10979 17.2349 5.1127L17.446 6.33899C17.4876 6.58232 17.4121 6.73361 17.3412 6.81768C17.2539 6.92083 17.1286 6.97768 16.9873 6.97768C16.8884 6.97768 16.7852 6.94991 16.6808 6.89472L15.5689 6.31047L15.5504 6.31528L14.4497 6.89472C14.1958 7.02842 13.9371 6.99324 13.7892 6.81768C13.7182 6.73361 13.6427 6.58232 13.6843 6.33899L13.8966 5.10122C13.895 5.10499 13.8928 5.09946 13.8905 5.09356C13.8891 5.09019 13.8877 5.08669 13.8864 5.08474L12.9949 4.21678C12.8229 4.04938 12.7588 3.84716 12.819 3.66216C12.879 3.47735 13.0497 3.35179 13.2873 3.31716L14.5303 3.13624C14.5272 3.13624 14.5307 3.13303 14.5348 3.12922C14.5374 3.12683 14.5403 3.1242 14.5419 3.12198L15.0921 2.00569C15.1984 1.79088 15.3706 1.66699 15.5654 1.66699C15.7599 1.66699 15.9325 1.79088 16.0384 2.00643L16.5945 3.13216C16.5932 3.12921 16.598 3.13191 16.6033 3.13487C16.6063 3.13655 16.6094 3.13833 16.6117 3.1392L17.8434 3.31716ZM16.653 5.20028C16.6214 5.01825 16.6923 4.80047 16.8247 4.67159L17.6341 3.88233L16.5155 3.71956C16.3321 3.69308 16.1471 3.55826 16.0655 3.39215L15.5653 2.37901L15.0647 3.39308C14.9834 3.55845 14.7982 3.69308 14.6151 3.71956L13.4964 3.88233L14.306 4.67159C14.4383 4.80047 14.509 5.01825 14.4775 5.20028L14.2864 6.31472L15.2873 5.78824C15.3888 5.73528 15.4944 5.7238 15.5655 5.7238C15.6362 5.7238 15.7419 5.73528 15.8431 5.78824L16.844 6.31435L16.653 5.20028Z" fill="#1F1F1F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.62756 3.25C9.84812 3.28222 10.0068 3.40092 10.0633 3.575C10.1198 3.74907 10.0609 3.93814 9.90164 4.09351L9.14424 4.83202L9.32331 5.87479C9.36183 6.0996 9.29053 6.24071 9.22387 6.3196C9.14109 6.41756 9.0222 6.47164 8.88813 6.47164C8.79665 6.47164 8.70165 6.44608 8.60591 6.3959L7.66944 5.90331L6.73296 6.39552C6.49667 6.51978 6.25408 6.4846 6.11463 6.3196C6.04797 6.2409 5.97686 6.0996 6.01538 5.87516L6.19445 4.83239L5.43649 4.09351C5.27761 3.93814 5.21853 3.74888 5.2752 3.575C5.33186 3.40055 5.49038 3.28222 5.71038 3.25L6.75778 3.09833L7.22574 2.14982C7.32462 1.9502 7.4861 1.83594 7.66944 1.83594C7.85258 1.83594 8.01425 1.9502 8.11276 2.14982L8.58091 3.09833L9.62756 3.25ZM8.5601 4.91315C8.53084 4.74445 8.59639 4.54278 8.71917 4.42315L9.35213 3.80594L8.4775 3.6789C8.30732 3.65371 8.13621 3.52909 8.06047 3.37594L7.66936 2.58298L7.27807 3.37594C7.20215 3.52909 7.03104 3.65371 6.86178 3.6789L5.98623 3.80594L6.61919 4.42315C6.74197 4.5426 6.80734 4.74445 6.77826 4.9137L6.629 5.78444L7.41103 5.37296C7.50585 5.32351 7.60381 5.31296 7.66936 5.31296C7.73473 5.31296 7.83251 5.32333 7.92714 5.37296L8.70972 5.78444L8.5601 4.91315Z" fill="#1F1F1F"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6535 11.3796L17.7002 11.5316C17.9208 11.5638 18.0793 11.6825 18.1359 11.8566C18.1924 12.0311 18.1333 12.2198 17.9741 12.3751L17.2167 13.1133L17.3952 14.1564C17.4339 14.3809 17.3626 14.522 17.2961 14.6009C17.2134 14.6992 17.0943 14.7533 16.9604 14.7533C16.8689 14.7533 16.7739 14.7277 16.6782 14.6775L15.7419 14.1849L14.8054 14.6771C14.5695 14.801 14.3265 14.7666 14.1871 14.6009C14.1206 14.5221 14.0493 14.3812 14.0878 14.1564L14.2669 13.1136L13.5089 12.3748C13.3499 12.2198 13.2908 12.0305 13.3475 11.8566C13.4043 11.6822 13.5628 11.5638 13.7828 11.5316L14.83 11.3796L15.2984 10.4311C15.3967 10.2316 15.5584 10.1172 15.7417 10.1172C15.9248 10.1172 16.0865 10.2316 16.1852 10.4307L16.6535 11.3796ZM16.6327 13.1947C16.6033 13.026 16.6688 12.8243 16.7916 12.7047L17.4247 12.0875L16.5501 11.9605C16.3794 11.9349 16.2081 11.8103 16.1327 11.6568L15.742 10.8645L15.3507 11.6571C15.2748 11.8106 15.1035 11.9353 14.934 11.9601L14.0588 12.0875L14.6916 12.7043C14.8144 12.8238 14.8799 13.026 14.8509 13.1947L14.7014 14.066L15.4838 13.6545C15.5786 13.6047 15.6764 13.5945 15.742 13.5945C15.8072 13.5945 15.9049 13.6045 15.999 13.6538L16.782 14.0656L16.6327 13.1947Z" fill="#1F1F1F"/>
                    </svg>
                    <p>BACK TO CUSTOMIZE</p>
                </div>
            </div>
        </div>
        <div className="yourCartGroup1">
            <div className="yourCartGroupImg">
                <img src="https://s3-alpha-sig.figma.com/img/959c/1dee/d01fea56ddf200b3f381370bb4733510?Expires=1629072000&Signature=OQ4xFFwaA~VW9ShXLAlQQzLKxYS6Slfs-TcAkDu5-sWi-1KDS77a2BA3GVU-U6A6uo9qmLoR0Zf8Pd5tt~pCHFj-8RT3CAlCyxdtycAmj0UESxUcdHGnjZCCaZFhrRvzmwcA0-rt9rTuF-Qfgk~GwrN5BtimPEKbYP1BGp1fWSsfw3MVHmyo61ZCzXyntQtz8GT952DaarWefOQ44UhI4vaqwef~LO1-SMkIOFD4kWm0iDZa6nS1SrDIoChetiCZgIGIonfFPbxB2GiWAB628AownwqtDVKn9uvniEuFWl-LXyHlj398ztPKmj~rvcgET8LpxJcju0FKKSeMcToxKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            </div>
            <div className="yourCartGroupItem1">
                <p className="pCart1">Convertible Mini Merinal</p>
                <div className="quantityCart">
                    <p className="p2Cart1">$1,000.00</p>
                    <Quantity/>
                </div>
                <div className="yourCartCustomise">
                    <p>DELETE</p>
                </div>
            </div>
        </div>
        </div>
        <div className="yourCart2">
            <div>
            <div>
                <p>TOTAL</p>
                <p>2 items</p>
            </div>
            <p>$3,000.00</p>
            </div>
            <button onClick={checkOut}>PROCEED TO CHECKOUT</button>
        </div>
    </div>)
}
export default YourCart;