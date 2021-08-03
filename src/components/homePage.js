import React from 'react';
import BestSeller from './bestSeller';
import Commitment from './commitment';
import DesignYOurOwn from './designYourOwn';
import Discount from './discount';
import Footer from './footer';
import "./homePage.css";
import NewArrivals from './newArrivals';
import StayTune from './stayTune';
import UnderNewArrivals from './underNewArrivals';
const HomePage=()=>{
    return(<div className="homePage">
             <div className="homePageCover">
            <div>
                <div className="filter"></div>
            <img src="https://s3-alpha-sig.figma.com/img/74a5/be98/fcc88a637702fc6cc087d9e3b909638c?Expires=1628467200&Signature=Y4G8kW7SrQj0T7TnedOWWnotBtn8ffK4adevWq9El0vaHW51Wu8imezpuDCMs8ynDr20BXAYvMoqnWR8T95CwmqKH5M-FogZkaR3MXU37HvB94ugtYSzEgvuJNcGANqKEFRsxyZ6xxYiAp8w3LeHxjSr6~k~kdKS6DcvYGXjHAXPJEvcJAt2gzn2VIBJkAiAyOc9KfA5HQWERHCjbSIcB-D-tnleo2AnuHlsjNptk6fhwSViFy3-5EncHXkecswkjeZ1fcGUZFsVmspZTVrUO8Ffprl3-zANCMTqWC122CcDKrSPUrXz1kUJc97stnD0V1icCv2DarmE5iK1bMIxCg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            <div className="fill">
                <div className="filll">
                <div className="fill1">
                    <p>The New Fragrance Girl Collection</p>
                </div>
                <div className="fill2">
                    <p>DISCOVER MORE</p>
                </div>
                </div>
                <div className="fill3">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            </div>
        </div>
        <div className="underHomepage">
            <h1>TOI</h1>
            <h2>Luxury Fashion Accessories By You and For You</h2>
        </div>
        <NewArrivals/>
        <UnderNewArrivals/>
        <div className="titleBestSeller">
            <p>DESIGN YOUR OWN</p>
            <h1>Best Seller</h1>
        </div>
        <BestSeller/>
        <DesignYOurOwn/>
        <div className="winterCollection">
            <img src="https://s3-alpha-sig.figma.com/img/03a7/865c/c46aa3967b698da2e8fdfe1c70cfa8a5?Expires=1628467200&Signature=EgdrxXy39ZizwBT7tteqEM~tkTPMjXjVWQ51DOWT6AB9xG~Wq~I8PYs0OMkLCqHn2ctSDUiNRAeMm64gmPz7IAHbGi61Msy-aRMmW3ggb8upcQ7AZ-I24nD8h5LPLFPQ34r~dfxSE9NqROR4MVqu0R8CHP~SpkLvSWY0L~LX3BxQC5CAtfjNoPBZyjyFru5evqQUGthyha6hvesQtUONjb32HiMUpxGv66qjoWyfEdYEm-KrnGF~MVOo92QY67rNclW5ax-w8TEpugstnsbmiurfL57eqJDoTguF0wsgBChEM2Hl3uZgGgz4PbMwzOrDT-Bi35YIjLVDjcg8Nkd6Vw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
            <div className="winterCollectionFont">
            </div>
                <div className="winterCollectionInfo">
                    <h3>LATEST COLLECTION</h3>
                    <h1>Fall Winter 2020 Collection</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                    <button >DISCOVER MORE</button>
                </div>
        </div>
        <Commitment/>
        <div className="reviewInHomePage">
            <div className="reviewIcon">
            <svg width="160" height="109" viewBox="0 0 160 109" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.477051 72.2089C0.477051 92.0981 16.7235 108.197 36.7163 108.197C56.7092 108.197 72.9556 92.0633 72.9556 72.2089C72.9556 52.563 57.1294 36.6029 37.4166 36.2204C46.5552 27.319 59.0902 21.7903 72.9556 21.7903V0.197266C32.9349 0.197266 0.477051 32.4304 0.477051 72.2089ZM160 0.197266C119.944 0.197266 87.4864 32.4304 87.4864 72.2089C87.4864 92.0981 103.733 108.197 123.726 108.197C143.754 108.197 159.965 92.0633 159.965 72.2089C159.965 52.563 144.139 36.6029 124.426 36.2204C133.565 27.319 146.099 21.7903 159.965 21.7903V0.197266H160Z" fill="#1F1F1F"/>
</svg>
            </div>
            <div className="reviewDiv">
                <div className="reviewDiv1">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. You need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                </div>
                <div className="reviewDiv2">
                    <img src="https://s3-alpha-sig.figma.com/img/4a0e/be5a/2e9423dc19f81c3d16b7b7cad340876b?Expires=1628467200&Signature=CjqknQ6X~~KWDzU6n1zjDu~WRdKzWc6Z~ArdL7D0hE8kaYQQu0sd06adPDlHJ7JKBjxiR54CRIaQIAPTEYEQW8SQ57wJiAXrmpHTBibzIGmaJbRBSvrS7E7nSxs9kecVN6kodZAtK19MtqUF7soTH1HE5nBZKRMgcFI~avuE0E4ASJ66QAjq4j4Uhlc-BDtVTNCmu9lgMP9zDowTSyvIOGFxsfdHlrifvi74657XOCaO7kVqIql0RuaAlwq4-PDe-wkeLpkZEuXFfbJ1KSFcg76gHUPr2Q7Q5c9d99A1287JnZSqDKGWjDsCpbt6XBPr2M0HPYpFPBMcGG4NKz0KFA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                    <div>
                        <h3>LOLIANA NGUYEN</h3>
                        <p>OCT 14, 2020</p>
                    </div>
                </div>
            </div>
            <div className="fill3">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
        </div>
        <StayTune p="IN DIARY" h1="Stay Tune With News"/>
        <Discount/>
        <Footer/>
    </div>
       
        
    )
}
export default HomePage;