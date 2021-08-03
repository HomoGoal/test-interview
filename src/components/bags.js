import React from 'react';
import { useContext } from 'react';
import { Route,BrowserRouter as Router, useRouteMatch } from 'react-router-dom';
import BagDetail from './bagDetail';
import './bags.css'
import BagsLoadMore from './bagsLoadMore';
import { TheContext } from './context';
import Discount from './discount';
import FallWinter from './fallWinter';
import Footer from './footer';
import HeaderBagsDetail from './headerBagsDetail';
import ProductDetail from './productDetail';
const Bags=()=>{
    const {setItemHeader}=useContext(TheContext);
    const match=useRouteMatch();
    if(match.url==='/home/bags'){
        setItemHeader('bags');
    }
    return(<div className="bags">
            <Route exact path="/home/bags">
            <img className="bagsCover" src="https://s3-alpha-sig.figma.com/img/40c0/8394/85fdcb5ab3ecd17349e667f31dee88ad?Expires=1628467200&Signature=fD2KB68p6WTpdI9yAmoTC7cIzVRtG7K6Jc98SwgiOnswwBZkCUW4nvosYS997A9nyYu4ZNwtH11C75aLQ2qEF8kewLzlB5UhM6K2aSQRcNDBHcALcWfpmjD4UVN83AARzgZQu1KTDOSi9O~rK4aMRg48EtWsylayGxjDgOTbDzomvbuPxiCrhHJaUbYjCKKmgl0JGciKPFBfYFC1NhQi2s0wyej0f4fbEy0YuV1~BYLOpp7tnJMu1kj7KxXEmyA9yVHbj9KZD0KWGcXFRQ9wVizhCsdN4507HP0HSnwYt33~IFZmUqgmGp34u~K1VpGDSH-QYGDFait4bBARnW9x8A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                <BagsLoadMore p='ANCOTEMEE DELA' h1='Artisan Hands, Your Iconic' position="right"/>
            <img className="bagsCover2" src="https://s3-alpha-sig.figma.com/img/445e/07ad/e23056648c0fe34b1aa3417286fe70a3?Expires=1628467200&Signature=Lifb3gB2aFgm2PsXGO4ob5BTT-YubXSJEWCDV1FcUQaIr~AIzT~UHyxkNyS0q0Z6l3R0~UuGlqH8A2SOJ8q~WosinxjmKEzc2aziACvYR21M0xsBvyM1rtlTS3ohf-tmwnw18ntO7DdiyE3WKMmJVVQnqLh~UYbXk9reEtiJRbuBPNeij1B93cePBXpenU3la62t4toh2MuOJnvLAb-Tcnoa2twdk3SX7U~W-X75jhNcO0vAxnnCLGgw8YBtQDqH8954kiGMjCtSkSsDJTi0X3k88faH20r2AI1zHrG1Un-QR3z28ni7Jg8qP1IZ4gQp8OPL~W~jON3stZ~0i~JV7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                <BagsLoadMore p="MILANO AT LENTICO" h1="Lorem Ipsum is not random text" position="left"/>
            </Route>
            <Route exact path="/home/bags/bag-detail">
                <HeaderBagsDetail p="HOME  -  BAGS  -  ANCOTEMEE DELA  -  " p1="CONVERTIBLE MINI MERINAL"/>
                <BagDetail/>
                <ProductDetail/>
                <FallWinter/>
            </Route>
        <Discount/>
        <Footer/>
    </div>)
}
export default Bags;