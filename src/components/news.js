import React, { useContext } from 'react';
import { useRouteMatch ,Route} from 'react-router-dom';
import { TheContext } from './context';
import Discount from './discount';
import FashionShowNews from './fashionShowNews';
import Footer from './footer';
import "./news.css";
import MainNews from './mainNews';
const News=()=>{
    const {setItemHeader}=useContext(TheContext)
    const match=useRouteMatch();
    if(match.url==='/home/news'){
        setItemHeader('news');
    }
    return(<div className="news">
            <Route exact path="/home/news">
                <MainNews/>
            </Route>
            <Route exact path="/home/news/fall-2020-fashion-show">
                <FashionShowNews/>
            </Route>
            <Discount/>
            <Footer/>
    </div>)
}
export default News;