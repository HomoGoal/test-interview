import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TheContext } from './context';
import "./mainNews.css";
import MainNewsItem from './mainNewsItem';
const MainNews=()=>{
    const history=useHistory();
    const {setAddToCart}=useContext(TheContext);
    const handleToMore=()=>{
        history.push("/home/news/fall-2020-fashion-show");
        setAddToCart(false);
        window.scrollTo({
            top:0,
            behavior:"auto"
        })
    }
    return(<div className="mainNews">
    <div className="aboutFall2020">
            <img  onClick={handleToMore}src="https://s3-alpha-sig.figma.com/img/29bd/fe6b/51742affa391a9752e37726ab8fc682d?Expires=1629072000&Signature=WbHpr4OVsWDwv7EC6AooecWeY5nOixPPNq~JRfurrRFHOZEij9TGUbAPI-3rIRAnVT3XXumsQ~4~1QzpXQVowul6JO4XexdMQI7fXNgeVS6W-rz3CAfDiREaYvvoMv5THoT0ppUQdYEsCPNeTezATlJHqhCaOAIresLT4o7aOD~NR2wsf-do4fDQYOV84oFK69-DsgfNqQecR7SIzhL-NSZ1ybJT4AnRWynhKZGq-zzK6nDUkHOx6-hGaKp3ErM5LiTfLkhnrn5vc8XxVu1iXQAxyIIa4~xMVMqTLK7LQA77CTiKvrAVAMClW428EeegFuPa8pAoOF1kvgAMp5Qk2w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            <div  onClick={handleToMore}>
                <h1>Fall 2020 Fashion Show</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>
            </div>
    </div>
        <p className="pMainNews">MORE NEWS FROM US</p>
        <h1 className="h1MainNews" >Discover More News</h1>
        <div className="mainNewsRow">
            <MainNewsItem src="https://s3-alpha-sig.figma.com/img/9364/ed9e/f72119908c593cccd79336991cf59980?Expires=1629072000&Signature=GZe33E3z5fv4bPL4Z5gBPp8ON57gI8X6cYWB7MSGWh11WlFVblg50VCv9Nhbkr~9rfPRacxOTb7dG1JwsyklQRsI95kHH9Pxw8xc1e-gay46C0hXhAxItFflJ~64HfTV2-Dl~LyDbiRg44eX4N2-UbvddLrNFANMOA2x44sZ6Bcn89SklRmtO4LCB23ZfL1SGt4VLkRnrxw-tSIhfyew5I4--bal4ywmeZGcbgygvxCE~4ON~Vux9erMfpfEYazn400ok1uWKjn1ctcxkD1Z8AuDTew2cY3FH6NUdsa-2CJWIyh6XgIZm9ps18ONX4ek7xE3q60VUIqQ9EVJGyiPSw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" h3="It is a long established fact that a reader will be distracted"/>
            <MainNewsItem src="https://s3-alpha-sig.figma.com/img/2fb7/9128/b523d18cbf6a13841227b5a69c286cab?Expires=1629072000&Signature=BSCPJelzGttbVH85ep6hCb2T8RelV4egmdv8yxVBDuctL7OhfmKeZOdPPHrWMjEhg-O~u69OiADmCiLIR3o7VEzITWObmdEOJ~J3T2eTdvw2BjAFkpl9Ll-Vh8zyrTpDNwh7EuSLCgOWl1PuAhAKEbsE~CrHrg-2sZYM7z9CzmlOOR9ir-BwtvqtEu5QV2I31t130GPCvGXoAX5furkHWSW9EnCp5wGbiGI8oGaP~bCszx~roEgGb~KaBK42OKQ8pha9-ZKRmvvyhHiOE6k5o2YSlQAQhl28Y5ENJM3VgZBJZ~vVeT08~k4mtCFCXDJdY46uXCiFdDEUdhI1cUYChQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" h3="It is a long established fact that a"/>
            <MainNewsItem src="https://s3-alpha-sig.figma.com/img/8ba2/4185/5544272ee6a56d8b65127c62cdff8c49?Expires=1629072000&Signature=Zy2137PO2VYtyjWLVc0g04PjtbwHq5Zo863L3ef-M8E5eZrqAr~HNM0xnvl6M7kQYwhRDqqLCTWC1BHj7VwHxDxjaMrSlttqMWdcYPK2uVkLN-Xa9Yqlwv2QY~vlRSQbV8oqId8z0oyXi~3-m5Ny-3fjTuFjd~oSXPPErnw-NU-VoA2L8pR64AZuHyzxV6oAInirR2CGSMfhVDPfKEirzqLfTVPDFWga7F5cKOcXzf4ErnosX0lohDI~d4xTKzUC5xzw0LHCltKMyfw1i0AfTB8wGcrvSYRJjaRENX5KdMPr8QUZGbseu27Q3dQaEf6qA9BTfyIIresEOB0f8YCklg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" h3="It is a long established fact that a reader will be distracted"/>
        </div>
        <div className="mainNewsRow">
            <MainNewsItem src="https://s3-alpha-sig.figma.com/img/cdcb/58a9/68ea6287017cf8580d0d40cac838f81b?Expires=1629072000&Signature=CgD07bTQuU97irl3MjkHciIwFOosEzxUxTuaozQb21hqrYAyl28nG6z1fJUUq4YDEHOn0CChyfl2ZohICe5~fwbjnS3vhEu~zRjZcXU1tkkxC88bEM0FiFn4dSsENx2A2n40lyGCKM-kELGsLiEDPn7hTrO~5AEHI0ZVqCTi6OT9i5qwCCXVVDuOt4ll2uzqR183L~EHD--cRjzyVJ9IMfyPVMWpJV~JbMCtHbDXXXZEdeYH-a0Nc1z1F58bsu8j8k1sXe059ib6EccPYIgxvXFCFehj-YAEsHqVGWZcsyc2IoR6qW1gNOy74R6RnMtY454uPULHp~bKxveXwPl9-g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" h3="It is a long established fact that a reader will be distracted"/>
            <MainNewsItem src="https://s3-alpha-sig.figma.com/img/2fb7/9128/b523d18cbf6a13841227b5a69c286cab?Expires=1629072000&Signature=BSCPJelzGttbVH85ep6hCb2T8RelV4egmdv8yxVBDuctL7OhfmKeZOdPPHrWMjEhg-O~u69OiADmCiLIR3o7VEzITWObmdEOJ~J3T2eTdvw2BjAFkpl9Ll-Vh8zyrTpDNwh7EuSLCgOWl1PuAhAKEbsE~CrHrg-2sZYM7z9CzmlOOR9ir-BwtvqtEu5QV2I31t130GPCvGXoAX5furkHWSW9EnCp5wGbiGI8oGaP~bCszx~roEgGb~KaBK42OKQ8pha9-ZKRmvvyhHiOE6k5o2YSlQAQhl28Y5ENJM3VgZBJZ~vVeT08~k4mtCFCXDJdY46uXCiFdDEUdhI1cUYChQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" h3="It is a long established fact that a"/>
            <MainNewsItem src="https://s3-alpha-sig.figma.com/img/8ba2/4185/5544272ee6a56d8b65127c62cdff8c49?Expires=1629072000&Signature=Zy2137PO2VYtyjWLVc0g04PjtbwHq5Zo863L3ef-M8E5eZrqAr~HNM0xnvl6M7kQYwhRDqqLCTWC1BHj7VwHxDxjaMrSlttqMWdcYPK2uVkLN-Xa9Yqlwv2QY~vlRSQbV8oqId8z0oyXi~3-m5Ny-3fjTuFjd~oSXPPErnw-NU-VoA2L8pR64AZuHyzxV6oAInirR2CGSMfhVDPfKEirzqLfTVPDFWga7F5cKOcXzf4ErnosX0lohDI~d4xTKzUC5xzw0LHCltKMyfw1i0AfTB8wGcrvSYRJjaRENX5KdMPr8QUZGbseu27Q3dQaEf6qA9BTfyIIresEOB0f8YCklg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" h3="It is a long established fact that a reader will be distracted"/>
        </div>
        <button>LOAD MORE</button>
    </div>)
}
export default MainNews;