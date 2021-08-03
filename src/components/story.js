import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { TheContext } from './context';
import Discount from './discount';
import Footer from './footer';
import "./story.css";
const Story=()=>{
    const {setItemHeader}=useContext(TheContext);
    const match=useRouteMatch();
    if(match.url==='/home/story'){
        setItemHeader('story');
    }
    return(<div className="story">
            <img className="designCover"src="https://s3-alpha-sig.figma.com/img/3129/acc5/ee3ab78c7245da698646fe3daebea312?Expires=1628467200&Signature=JTOiQe98a~qqYs0fM1D4PafoGns9e2nESoXPQ1mFiZpD8Dw3TeYdWCxmnoJFG8BbcexIlna~DmDlA7gBLyCDJVX10rR6BOLEazWcmn~frZqSD4nEGYpZdr6u9nnYh9oaaGpHE4BYItF9sodB8b9GXA4dj2w0OTnxPmkTYnJCPNw9pEmqc~Df3uDi61iRDYApwDQ6hKNo2v1RxQTQjkfk-ZVrdog0yxFxH3FHb5f8p0yrbW-zJZnEqyUBrLaXM5wBtEa1n6-1-bLp3z0IFZhBTBvZwtcgoGS2LlUf-SZ~nPMbFrbmdKKxqXYNR3yNpjDVhQj2OL~gKjEhEa7HhrteLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            <p className="pStory">OUR STORY</p>
            <h1 className="h1Story">About TOI Atelier</h1>
            <div className="ourStory">
                <img className="ourStoryImg1" src="https://s3-alpha-sig.figma.com/img/fd57/3c3c/ea9d4349f20c23279872e520ccc3e0d6?Expires=1629072000&Signature=ABl03ABMWEkIVnvsdsgYdiUwFkKSoQOBziJApKe2sxSVGUo47fD9ACzlQpo65W0V~RF1Yec~jX0yzNNi58H5L7avcUoraE9hcF8BAZpKEpaLmuXgyHcMjcjA8WehLwCdZO2wE2Odw4Ke0Z9ymVhFOt8HEWLmy43fj6BLnvylVAhT8fU0Lf9Gwd0msBPTzPgSBurrsDMahhFDIe0Gy1lYYWnlJktw6-SYPPSmI5kdYuhgiUFlaXbXNGzsVEhmCxvKGVWVaQoNeUga8pG5d3jw8oQi3OCqYG0wI0o9fi8sjfOAWvf2uWnlULMN1ZXxTRt4y1-7OizUhwlZaGqvk8CHIw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                <img  className="ourStoryImg2" src="https://s3-alpha-sig.figma.com/img/5667/1233/877ba4ff1af7d6a49023b32e28325f9b?Expires=1629072000&Signature=Qhv5bOGYqCGkA1MzzH~CwYqApZVhxDHa5kB0S1tJZF3LTu4YF85HdTYUfOYZc8rTUxpy9mUOW6Yg8-kRXcr46rtJRXiNbvkVDnXSMtkbMLXan4LPGvDJcQbArZEdPUQUTmq4nI1eCWzlEcU3ARPtMXRa5sMZ~c~VIOggICYF7gK~NzALxv39ktQxT3xnkNOGwFkcsWOzDn7Uvwgu6A9A23-yXfcmYLSgaDeUZGdN5W1CPLQ2NNOe3MY02OwfT1IlOt8W-NbLiiLm4Ha9vRc~DmVZdMiCRL6NUqMou~f1sD9fpqf5X2A4eq5kQbTQ1JhZ~t80MH5YRL8BfT0cu6ASgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                <div>
                    <h1>Our Philosophy</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className="whatWeDo">
                <div>
                    <h1>What We Do</h1>
                    <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    <div>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into </p>
                    </div>
                </div>
                <img src="https://www.figma.com/file/5EFnPZ4k6VPCDTLE2Is6Wa/image/103301faec71d96eadaa36b335261c0fea743a16?fuid=1002974567712132464"/>
            </div>
            <Discount/>
            <Footer/>
    </div>)
}
export default Story;