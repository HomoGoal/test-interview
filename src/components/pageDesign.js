import React, { useContext } from 'react';
import { TheContext } from './context';
import LeatherColor from './leatherColor';
import "./pageDesign.css";
const PageDesign=()=>{
    const {setAddToCart}=useContext(TheContext);
    const handleAddToCart=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
        setAddToCart(true);
    }
    const color=["#9D4D34","#907455","#9BB4C0","#DA6666","#594D2F","#AF854B","#792614","#2E0506","#752210","#383010","#DA6666","#000000"]
    return(<div className="pageDesign">
        <div className="pageDesignBody">
            <div className="designBodyItem1">
            <h1>Convertible Mini Merinal</h1>
            <div className="designBodyItem1Img">
                <img src="https://s3-alpha-sig.figma.com/img/8659/f548/876e47d2c542dd8f1f2ada71fe27cfa1?Expires=1629072000&Signature=UXlg0ABaNommdyhNYWbHSTuEiFbysIkWzQWhbJj5m-q54u-4UPsiiRAUzdAiF~54codIq9O8kB1uzA4UkDLJLFDbBnBHUSM5MaK7YKgWERzpN5rNtdXlcF~ugBodvauKn~BbrjZtRgNWBAJtPpI9xpit0IlfU1peGlfwxKkX-Hi7BQgk432mLzaT2uPxceLgGm90aZfVBnHnsTP8EuP~PtG-EHyMsec84OlF6q770JlSWx6wzPxZ96MONH2bqhlvOWy8W5DZgrDnMUfkc1ruGavi-zHuTj~mEL~JkXxLffAVKgSuYQL06IIfeTkFefl8OowRnvdfNm8xAvZF6KMhxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                <div>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.8974 11.6153C20.8974 14.0241 19.9742 16.2213 18.464 17.8727L25.5443 24.9531C25.7077 25.1161 25.7077 25.3808 25.5443 25.5439C25.3813 25.7073 25.1166 25.7073 24.9535 25.5439L17.8729 18.4636C16.2214 19.9738 14.0242 20.897 11.6152 20.897C6.49718 20.897 2.3335 16.733 2.3335 11.615C2.3335 6.49702 6.49718 2.33334 11.6152 2.33334C16.7332 2.33334 20.8971 6.49702 20.8974 11.6153ZM3.16923 11.615C3.16923 16.2721 6.95802 20.0608 11.6151 20.0608C16.2721 20.0608 20.0609 16.2721 20.0609 11.615C20.0609 6.9577 16.2721 3.1689 11.6151 3.1689C6.95802 3.1689 3.16923 6.95796 3.16923 11.615Z" fill="#1F1F1F"/>
<path d="M15.6292 11.1971H12.0333V7.60068C12.0333 7.36994 11.8456 7.18301 11.6153 7.18301C11.3843 7.18301 11.1974 7.36994 11.1974 7.60068V11.1971H7.60152C7.37052 11.1971 7.18359 11.384 7.18359 11.615C7.18359 11.8455 7.37078 12.0327 7.60152 12.0327H11.1974V14.9957C11.1974 15.227 11.3846 15.4139 11.6153 15.4139C11.8458 15.4139 12.0333 15.2267 12.0333 14.9957V12.0327H15.6292C15.8604 12.0327 16.0471 11.8455 16.0471 11.615C16.0471 11.384 15.8604 11.1971 15.6292 11.1971Z" fill="#1F1F1F"/>
</svg>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.5943 15.9839C23.4291 15.9134 23.2464 15.9113 23.0807 15.9777L18.8626 17.6613C18.6482 17.7471 18.5438 17.9903 18.6293 18.2042C18.7149 18.4191 18.9583 18.5233 19.1725 18.4377L22.7393 17.0139C22.0533 19.2357 20.6782 21.1329 18.8028 22.4152C16.7062 23.8491 14.2355 24.3446 11.8459 23.8092C8.41343 23.0413 5.76463 20.2393 5.00087 16.6126C4.95291 16.3868 4.73825 16.2333 4.51062 16.2717C4.283 16.31 4.12848 16.526 4.17541 16.7523C4.9975 20.7153 7.89803 23.7833 11.6634 24.6256C12.3528 24.7796 13.0478 24.8558 13.7398 24.8558C15.6764 24.8558 17.5876 24.259 19.2749 23.1053C21.2584 21.7494 22.726 19.7617 23.4846 17.4339L24.8602 20.8807C24.9458 21.0951 25.189 21.1993 25.4034 21.1138C25.6178 21.0279 25.7222 20.7848 25.6367 20.5706L23.9536 16.352C23.8867 16.1853 23.7592 16.0547 23.5943 15.9839Z" fill="#1F1F1F"/>
<path d="M4.04647 12.0023C4.1131 12.1687 4.2404 12.2994 4.40554 12.3702C4.49084 12.4067 4.58106 12.4251 4.67102 12.4251C4.75476 12.4251 4.83849 12.409 4.91938 12.3769L9.13692 10.6933C9.35158 10.6075 9.4558 10.3643 9.37025 10.1499C9.2847 9.93551 9.041 9.83129 8.82685 9.91684L5.26082 11.3404C5.94706 9.11964 7.32214 7.2232 9.19759 5.94067C11.2942 4.50674 13.7646 4.01104 16.1541 4.5464C19.5861 5.31405 22.2352 8.11581 22.9987 11.7415C23.0464 11.9673 23.2611 12.121 23.4887 12.0826C23.7163 12.0443 23.8711 11.8283 23.8239 11.602C23.0026 7.63982 20.1018 4.57259 16.3367 3.73027C13.7182 3.14462 11.0157 3.6849 8.72574 5.25053C6.74219 6.60695 5.27456 8.59413 4.51598 10.9215L3.13935 7.47441C3.05379 7.26001 2.81035 7.15553 2.59621 7.24109C2.38181 7.3269 2.27733 7.57008 2.36288 7.78448L4.04647 12.0023Z" fill="#1F1F1F"/>
</svg>

                </div>
            </div>
            <div className="designBodyDetail">
                <p>PRODUCT DETAILS</p>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.333 5.83331L9.99967 13.8333L1.66634 5.83331" stroke="black"/>
</svg>

            </div>
            </div>
            <div className="designBodyItem2">
               <div className="selectDesignBodyItem2">
                   <p>FLAP</p>
                   <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.333 5.83333L9.99967 13.8333L1.66634 5.83333" stroke="black"/>
</svg>
               </div>
               <h3 className="h3DesignBodyItem2">Select Leather Type</h3>
               <p className="pDesignBodyItem2">TUMBLED LEATHER  $110</p>
               <div className="skinDesign">
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/5261/530d/d903965144e05743021a1f4266aba4d0?Expires=1629072000&Signature=UphvnWP4jCjEgJbQKViv3oog3mGQgXXs1bRvfivH9ZyeFgXaLC8HlSNA6r~1h5BNuXtNNeD4QEBsmMtpASk2oc1t2Wd~qdT2oqJ~MTLs6v1t0-Plp-Wn-lXRBIzdU5vl0YnHsjZNXl7xSfEw7jCGI57MIi6W1BVxNFFCXPWsUtiyrwJtLvtOrvQ4N4~wx82PN5YDTocttHv508MN2T1TovNpjko4G6I3Itz8UMN86Lo2lduf~ORcIB9gZDj5dhMgA7OjWATF8CKJLThOyp1cffp0wn2Ph3nP-2dhj6HQv3lZUM0Stvbbqkg0zrDP4Z1sT9XUBdqJOsRMR-ntrblMsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>TUMBLED</p>
                   </div>
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/7b80/3986/8323256bdffdedc978161a5dd76f0fd6?Expires=1629072000&Signature=ggWvH2uv4SSa6iE4-mi4LW7a0VCQzrgg3~CYJGyHds0LawfzidT01rCxElo3hJ05ZUas-P62twPMMf18Fspg6AEN0CshEJS6FceiXU6NGN9RfLNDoPp8sHWVNuiqtQ7HIf0DKOD7jHdYy7vk2dmFGjlVkqeh71aMMSz-~kgUMxVSbnxz4l2oPwJlGgysPt3yWX7qo9G2OB5aFWCiP~IqRmhLgKHGlyOlARyMOW8UAu7Em4kWY63-g0NtvzCxMIsrM8nTcVBEfrinYmHex3faO3GbnyR36KpU5x8TKWs6dl9o1P5DaeVnwnvUSLEDtveZlkiiQs6gam9rPswhlwyrUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>HELLO</p>
                   </div>
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/a0bd/e534/65b682ccc2be9e08cf166c4700d8cd40?Expires=1629072000&Signature=aml4dr8suBlyCutmH3UreW~NCTDat-bBIe-1OnclJv3jr1k5~xtNWzj18mowE4A~xuxwMuMNdq~RFZ8Hv4PX1BicFZVH~cdF83kTC8W1jybRLc6jgHH1xB~x8dYQteZdNFqGUN5zOXAI-B4Uop~WEb6-JVNBNRoWTk7outIBGMI0Bbkek1fBfakrvxSiolS6TpAHT7m3zouaj~Bp6IQnkdqJm507subjClPiNjGYh87avAdkqM00Akbefbte15qmHsdZ4W9bmES-JE7UOg2IeUWKZr7axp~a-KzPVtAEpJEC5ETiRjYPCzM07FzFzvHhxKPsUZuv4hJK4k1VnB3Ijw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>NAME</p>
                   </div>
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/8f5c/13a4/786a44182cd045da0e8973fa37c60bba?Expires=1629072000&Signature=Y5la-dCIuWm-WnzW4gtfLIIJjXu46uDHhHlIUvdTy8zzVrYRI6i5xEDSMoEdwNeo4jIuBLVtW3G8APOl7F4ggie5P5uoGRkZr2aGPi7xV1GeqwiRDMjDwZtaLf7auA5TBx~U6MKRWWUhBZZxmgRnNYUOjs0jTX5v-0iZ-HrLM5h5JwhDoilKN3tq~cCx0AK9HUUe479rxxPInvhraDjtXlnitv9YLs21Ov8ZNv~NpePi3uXjzRMYXnc7OAi3M5DmulU5YZB5dc~8KUk84snalsDSTnwyUTuqWMTa2NfWVpEdJYelkbbmnyyxlTBApiHPxYYRTQJJyfHF~71UJ8QQGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>I’M PHUOC</p>
                   </div>
               </div>
               <div className="skinDesign">
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/81fb/e0cc/4e6d9f637cc58d765ee071088560e2f1?Expires=1629072000&Signature=Le~N-8FemeLPvdVxqnfmyS1NUQFRVbykkskIMiCfVmo02WMr~AcVKnmzjFEiSRcGD~I9ObI01XCSrjD06FqsniJuzoBSfGISNoXyEuSmUxztoGixZNMlaGr7fngnISUuukZ5ulAK0SNZq7OtaBN3fkVPrAAK-eyeC3uOJTpiG8f0DmliP-3UZODYDLk6lZyMqPx1kYPZAPKLlwq2SnWK6LY6lVu6KgTgKo9nctIbU2OE-uscETyAnvzLnTLapL3TcEFnR3IqedAsFnpk7V-yVPWzE9-6D~EFOwuhVjGcYUX9-hUoO0s9gOoEPR2a6M74EffJtLt9EmTDyq7fxz~9AQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>FANTASTIC</p>
                   </div>
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/b33d/9bae/0ab99e8ac7d227273877a64056faa5ed?Expires=1629072000&Signature=D3NsTwfhbYVQ~-Q3vGUePgE7lu6RYMHGOS7TqQN1iRn~Ymaaj7qfqM-HstVXjufCnDpJ98yo2D6RBGmAR8jGFXq9ZN0rnylCDTX7~bvIpTpVi-QspPgrs~CvbLFh8pA1x8ar2o41vZTsj4CFpPNhDoDsuIEc-HPpDdkmbo4Eosg3-xWqJ2ayM4Hq2OnJmvih8YLPyNO1Qx7N0CmCLd95IB6dZh2~xi82k2lSjre-yxyY4bYlL9qbCpUOmoojPm1Uk5SR1RudY77fuxPCQJsYghaJot11040FW-s6FsrlM~cNeXmPAVjef10k82yp7kCfRlxyVqBdcplsUbSD3ronpQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>STAGNATE</p>
                   </div>
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/5261/530d/d903965144e05743021a1f4266aba4d0?Expires=1629072000&Signature=UphvnWP4jCjEgJbQKViv3oog3mGQgXXs1bRvfivH9ZyeFgXaLC8HlSNA6r~1h5BNuXtNNeD4QEBsmMtpASk2oc1t2Wd~qdT2oqJ~MTLs6v1t0-Plp-Wn-lXRBIzdU5vl0YnHsjZNXl7xSfEw7jCGI57MIi6W1BVxNFFCXPWsUtiyrwJtLvtOrvQ4N4~wx82PN5YDTocttHv508MN2T1TovNpjko4G6I3Itz8UMN86Lo2lduf~ORcIB9gZDj5dhMgA7OjWATF8CKJLThOyp1cffp0wn2Ph3nP-2dhj6HQv3lZUM0Stvbbqkg0zrDP4Z1sT9XUBdqJOsRMR-ntrblMsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>COMPASSION</p>
                   </div>
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/7b80/3986/8323256bdffdedc978161a5dd76f0fd6?Expires=1629072000&Signature=ggWvH2uv4SSa6iE4-mi4LW7a0VCQzrgg3~CYJGyHds0LawfzidT01rCxElo3hJ05ZUas-P62twPMMf18Fspg6AEN0CshEJS6FceiXU6NGN9RfLNDoPp8sHWVNuiqtQ7HIf0DKOD7jHdYy7vk2dmFGjlVkqeh71aMMSz-~kgUMxVSbnxz4l2oPwJlGgysPt3yWX7qo9G2OB5aFWCiP~IqRmhLgKHGlyOlARyMOW8UAu7Em4kWY63-g0NtvzCxMIsrM8nTcVBEfrinYmHex3faO3GbnyR36KpU5x8TKWs6dl9o1P5DaeVnwnvUSLEDtveZlkiiQs6gam9rPswhlwyrUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>LUXURY</p>
                   </div>
               </div>
                <h3 className="h3DesignBodyItem2">Select Leather Color</h3>
                <LeatherColor colors={color}/>
                <h3 className="h3DesignBodyItem2">Select Pattern Type</h3>
                <p className="pDesignBodyItem2">HUMBLE  $30</p>
                <div className="skinDesign">
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/5261/530d/d903965144e05743021a1f4266aba4d0?Expires=1629072000&Signature=UphvnWP4jCjEgJbQKViv3oog3mGQgXXs1bRvfivH9ZyeFgXaLC8HlSNA6r~1h5BNuXtNNeD4QEBsmMtpASk2oc1t2Wd~qdT2oqJ~MTLs6v1t0-Plp-Wn-lXRBIzdU5vl0YnHsjZNXl7xSfEw7jCGI57MIi6W1BVxNFFCXPWsUtiyrwJtLvtOrvQ4N4~wx82PN5YDTocttHv508MN2T1TovNpjko4G6I3Itz8UMN86Lo2lduf~ORcIB9gZDj5dhMgA7OjWATF8CKJLThOyp1cffp0wn2Ph3nP-2dhj6HQv3lZUM0Stvbbqkg0zrDP4Z1sT9XUBdqJOsRMR-ntrblMsQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>HUMBLE</p>
                   </div>
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/7b80/3986/8323256bdffdedc978161a5dd76f0fd6?Expires=1629072000&Signature=ggWvH2uv4SSa6iE4-mi4LW7a0VCQzrgg3~CYJGyHds0LawfzidT01rCxElo3hJ05ZUas-P62twPMMf18Fspg6AEN0CshEJS6FceiXU6NGN9RfLNDoPp8sHWVNuiqtQ7HIf0DKOD7jHdYy7vk2dmFGjlVkqeh71aMMSz-~kgUMxVSbnxz4l2oPwJlGgysPt3yWX7qo9G2OB5aFWCiP~IqRmhLgKHGlyOlARyMOW8UAu7Em4kWY63-g0NtvzCxMIsrM8nTcVBEfrinYmHex3faO3GbnyR36KpU5x8TKWs6dl9o1P5DaeVnwnvUSLEDtveZlkiiQs6gam9rPswhlwyrUg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>COMFORT</p>
                   </div>
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/a0bd/e534/65b682ccc2be9e08cf166c4700d8cd40?Expires=1629072000&Signature=aml4dr8suBlyCutmH3UreW~NCTDat-bBIe-1OnclJv3jr1k5~xtNWzj18mowE4A~xuxwMuMNdq~RFZ8Hv4PX1BicFZVH~cdF83kTC8W1jybRLc6jgHH1xB~x8dYQteZdNFqGUN5zOXAI-B4Uop~WEb6-JVNBNRoWTk7outIBGMI0Bbkek1fBfakrvxSiolS6TpAHT7m3zouaj~Bp6IQnkdqJm507subjClPiNjGYh87avAdkqM00Akbefbte15qmHsdZ4W9bmES-JE7UOg2IeUWKZr7axp~a-KzPVtAEpJEC5ETiRjYPCzM07FzFzvHhxKPsUZuv4hJK4k1VnB3Ijw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>NAME</p>
                   </div>
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/8f5c/13a4/786a44182cd045da0e8973fa37c60bba?Expires=1629072000&Signature=Y5la-dCIuWm-WnzW4gtfLIIJjXu46uDHhHlIUvdTy8zzVrYRI6i5xEDSMoEdwNeo4jIuBLVtW3G8APOl7F4ggie5P5uoGRkZr2aGPi7xV1GeqwiRDMjDwZtaLf7auA5TBx~U6MKRWWUhBZZxmgRnNYUOjs0jTX5v-0iZ-HrLM5h5JwhDoilKN3tq~cCx0AK9HUUe479rxxPInvhraDjtXlnitv9YLs21Ov8ZNv~NpePi3uXjzRMYXnc7OAi3M5DmulU5YZB5dc~8KUk84snalsDSTnwyUTuqWMTa2NfWVpEdJYelkbbmnyyxlTBApiHPxYYRTQJJyfHF~71UJ8QQGg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>I’M PHUOC</p>
                   </div>
               </div>
               <div className="skinDesign">
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/81fb/e0cc/4e6d9f637cc58d765ee071088560e2f1?Expires=1629072000&Signature=Le~N-8FemeLPvdVxqnfmyS1NUQFRVbykkskIMiCfVmo02WMr~AcVKnmzjFEiSRcGD~I9ObI01XCSrjD06FqsniJuzoBSfGISNoXyEuSmUxztoGixZNMlaGr7fngnISUuukZ5ulAK0SNZq7OtaBN3fkVPrAAK-eyeC3uOJTpiG8f0DmliP-3UZODYDLk6lZyMqPx1kYPZAPKLlwq2SnWK6LY6lVu6KgTgKo9nctIbU2OE-uscETyAnvzLnTLapL3TcEFnR3IqedAsFnpk7V-yVPWzE9-6D~EFOwuhVjGcYUX9-hUoO0s9gOoEPR2a6M74EffJtLt9EmTDyq7fxz~9AQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>FANTASTIC</p>
                   </div>
                   <div>
                       <img src="https://s3-alpha-sig.figma.com/img/b33d/9bae/0ab99e8ac7d227273877a64056faa5ed?Expires=1629072000&Signature=D3NsTwfhbYVQ~-Q3vGUePgE7lu6RYMHGOS7TqQN1iRn~Ymaaj7qfqM-HstVXjufCnDpJ98yo2D6RBGmAR8jGFXq9ZN0rnylCDTX7~bvIpTpVi-QspPgrs~CvbLFh8pA1x8ar2o41vZTsj4CFpPNhDoDsuIEc-HPpDdkmbo4Eosg3-xWqJ2ayM4Hq2OnJmvih8YLPyNO1Qx7N0CmCLd95IB6dZh2~xi82k2lSjre-yxyY4bYlL9qbCpUOmoojPm1Uk5SR1RudY77fuxPCQJsYghaJot11040FW-s6FsrlM~cNeXmPAVjef10k82yp7kCfRlxyVqBdcplsUbSD3ronpQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                       <p>STAGNATE</p>
                   </div>
               </div>
            </div>
        </div>
       <div className="pageDesignFooter">
           <div className="designFooter1">
               <div>
                   <p>FLAP</p>
                   <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#96B444" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.82812 11.5689L10.7626 15.4482L17.173 8.5517" stroke="#96B444" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
               </div>
               <div>
               <p>BODY</p>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#96B444" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.82812 11.5689L10.7626 15.4482L17.173 8.5517" stroke="#96B444" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
               </div>
               <div>
               <p>STRAP</p>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E0DCDC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.82812 11.5689L10.7626 15.4482L17.173 8.5517" stroke="#E0DCDC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
               </div>
               <div>
               <p>HARDWARE</p>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E0DCDC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.82812 11.5689L10.7626 15.4482L17.173 8.5517" stroke="#E0DCDC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
               </div>
               <div>
               <p>HANDLE</p>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#E0DCDC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M6.82812 11.5689L10.7626 15.4482L17.173 8.5517" stroke="#E0DCDC" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
               </div>
           </div>
           <div className="designFooter2">
               <img src="https://s3-alpha-sig.figma.com/img/8659/f548/876e47d2c542dd8f1f2ada71fe27cfa1?Expires=1629072000&Signature=UXlg0ABaNommdyhNYWbHSTuEiFbysIkWzQWhbJj5m-q54u-4UPsiiRAUzdAiF~54codIq9O8kB1uzA4UkDLJLFDbBnBHUSM5MaK7YKgWERzpN5rNtdXlcF~ugBodvauKn~BbrjZtRgNWBAJtPpI9xpit0IlfU1peGlfwxKkX-Hi7BQgk432mLzaT2uPxceLgGm90aZfVBnHnsTP8EuP~PtG-EHyMsec84OlF6q770JlSWx6wzPxZ96MONH2bqhlvOWy8W5DZgrDnMUfkc1ruGavi-zHuTj~mEL~JkXxLffAVKgSuYQL06IIfeTkFefl8OowRnvdfNm8xAvZF6KMhxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
               <p>$1,340.00</p>
               <button onClick={handleAddToCart}>DONE & ADD TO CART</button>
           </div>
       </div>
    </div>)
}
export default PageDesign;