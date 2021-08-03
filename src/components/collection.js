import React, { useContext } from 'react';
import Discount from './discount';
import Footer from './footer';
import "./collection.css";
import { TheContext } from './context';
import { Route, useRouteMatch } from 'react-router-dom';
import HomeCollection from './homeCollection';
import DiscoverFallWinter2020 from './discoverFallWinter2020';
const Collection=()=>{
    const {setItemHeader}=useContext(TheContext);
  
    const match=useRouteMatch();
    if(match.url==='/home/collection'){
        setItemHeader('collection');
    }
    return(<div className="collection">
          <Route exact path="/home/collection">
                <HomeCollection/>
          </Route>
          <Route exact path="/home/collection/fall-winter-2020">
              <DiscoverFallWinter2020/>
          </Route>
            <Discount/>
            <Footer/>
    </div>)
}
export default Collection;