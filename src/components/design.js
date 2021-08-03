import React, { useContext } from 'react';
import {BrowserRouter as Router,Route, useHistory, useRouteMatch } from 'react-router-dom';
import BagListDesign from './bagListDesign';
import { TheContext } from './context';
import "./design.css";
import DetailDesign from './detailDesign';
import Discount from './discount';
import Footer from './footer';
const Design=()=>{
    const {setItemHeader,isDesign}=useContext(TheContext);
    const match=useRouteMatch();
    if(match.url==="/home/design"){
        setItemHeader('design');
    }
    
    return(<div className="designMainPage">
          
                <Route exact path="/home/design">
                    <BagListDesign/>
                </Route>
                <Route exact path="/home/design/view-detail">
                    <DetailDesign/>
                </Route>
          
            {!isDesign?<Discount/>:""}
            {!isDesign?<Footer/>:""}
    </div>)
}
export default Design;