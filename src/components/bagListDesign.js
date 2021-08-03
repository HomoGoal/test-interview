import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TheContext } from './context';
import ImgItem from './imgItem';
const BagListDesign=()=>{
    const history=useHistory();
    const {setAddToCart}=useContext(TheContext);
    const handleCustomize=()=>{
        history.push("/home/design/view-detail");
        window.scrollTo({
            top:0,
            behavior:"auto"
        })
        setAddToCart(false);
    }
    return(
        <div className="BagListDesign">
            <img className="designCover" src="https://s3-alpha-sig.figma.com/img/3129/acc5/ee3ab78c7245da698646fe3daebea312?Expires=1628467200&Signature=JTOiQe98a~qqYs0fM1D4PafoGns9e2nESoXPQ1mFiZpD8Dw3TeYdWCxmnoJFG8BbcexIlna~DmDlA7gBLyCDJVX10rR6BOLEazWcmn~frZqSD4nEGYpZdr6u9nnYh9oaaGpHE4BYItF9sodB8b9GXA4dj2w0OTnxPmkTYnJCPNw9pEmqc~Df3uDi61iRDYApwDQ6hKNo2v1RxQTQjkfk-ZVrdog0yxFxH3FHb5f8p0yrbW-zJZnEqyUBrLaXM5wBtEa1n6-1-bLp3z0IFZhBTBvZwtcgoGS2LlUf-SZ~nPMbFrbmdKKxqXYNR3yNpjDVhQj2OL~gKjEhEa7HhrteLQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            <p className="titleDesign">DESIGN YOUR OWN</p>
            <h1>Customize any bags as the way you want</h1>
            <div className="designImgRow">
                <div className="designImgRowItem">
                <div className="designImgHover">
                    <img src="https://s3-alpha-sig.figma.com/img/8659/f548/876e47d2c542dd8f1f2ada71fe27cfa1?Expires=1629072000&Signature=UXlg0ABaNommdyhNYWbHSTuEiFbysIkWzQWhbJj5m-q54u-4UPsiiRAUzdAiF~54codIq9O8kB1uzA4UkDLJLFDbBnBHUSM5MaK7YKgWERzpN5rNtdXlcF~ugBodvauKn~BbrjZtRgNWBAJtPpI9xpit0IlfU1peGlfwxKkX-Hi7BQgk432mLzaT2uPxceLgGm90aZfVBnHnsTP8EuP~PtG-EHyMsec84OlF6q770JlSWx6wzPxZ96MONH2bqhlvOWy8W5DZgrDnMUfkc1ruGavi-zHuTj~mEL~JkXxLffAVKgSuYQL06IIfeTkFefl8OowRnvdfNm8xAvZF6KMhxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
                    <div className="designImgHoverItem">
                        <div onClick={handleCustomize}><svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3946 8.96631C15.8041 8.96631 16.1886 9.12592 16.4777 9.41529L16.5757 9.51278C17.1732 10.1103 17.1732 11.0822 16.5764 11.6794L4.87963 23.376C4.5905 23.6653 4.20556 23.8244 3.79654 23.8244C3.38729 23.8244 3.00283 23.6653 2.71346 23.376L2.615 23.2768C2.32611 22.9884 2.1665 22.6037 2.1665 22.1946C2.1665 21.7854 2.32587 21.4009 2.615 21.1113L14.3118 9.4148C14.6011 9.12592 14.9856 8.96631 15.3946 8.96631ZM4.3377 22.8342L16.0345 11.1374C16.333 10.8389 16.333 10.3536 16.0347 10.0548L15.9367 9.95732C15.7913 9.81216 15.5994 9.73271 15.3948 9.73271C15.1904 9.73271 14.9986 9.81216 14.8541 9.95684L3.15736 21.6536C3.01243 21.798 2.93275 21.9899 2.93275 22.1948C2.93275 22.3989 3.01243 22.591 3.15712 22.7352L3.25582 22.8347C3.54422 23.1231 4.04881 23.1236 4.3377 22.8342Z" fill="#1F1F1F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1962 4.31191C23.5046 4.35668 23.7265 4.52015 23.8045 4.7604C23.8828 5.0009 23.7992 5.26379 23.5754 5.48166L22.4063 6.62131C22.4084 6.61953 22.4076 6.62563 22.4065 6.63289C22.4059 6.63739 22.4052 6.64233 22.4051 6.64611L22.6796 8.24028C22.7337 8.55661 22.6355 8.75329 22.5433 8.86259C22.4299 8.99668 22.2669 9.07058 22.0833 9.07058C21.9547 9.07058 21.8206 9.03447 21.6848 8.96273L20.2394 8.2032L20.2154 8.20946L18.7844 8.96273C18.4544 9.13655 18.1181 9.09081 17.9257 8.86259C17.8335 8.75329 17.7353 8.55661 17.7894 8.24028L18.0653 6.63118C18.0633 6.63608 18.0605 6.6289 18.0574 6.62123C18.0557 6.61684 18.0538 6.6123 18.0521 6.60976L16.8932 5.48141C16.6695 5.26379 16.5862 5.0009 16.6645 4.7604C16.7425 4.52015 16.9644 4.35693 17.2733 4.31191L18.8891 4.07671C18.8851 4.07671 18.8897 4.07254 18.8951 4.06759C18.8984 4.06447 18.9022 4.06105 18.9043 4.05817L19.6195 2.607C19.7577 2.32774 19.9816 2.16669 20.2349 2.16669C20.4876 2.16669 20.712 2.32774 20.8497 2.60796L21.5726 4.07141C21.571 4.06757 21.5772 4.07107 21.5841 4.07493C21.588 4.07712 21.5921 4.07942 21.595 4.08056L23.1962 4.31191ZM21.6487 6.75997C21.6076 6.52332 21.6998 6.24021 21.8719 6.07266L22.9242 5.04663L21.4699 4.83502C21.2315 4.8006 20.991 4.62534 20.8849 4.4094L20.2346 3.09232L19.5839 4.4106C19.4782 4.62558 19.2375 4.8006 18.9994 4.83502L17.5451 5.04663L18.5976 6.07266C18.7695 6.24021 18.8615 6.52332 18.8205 6.75997L18.5721 8.20873L19.8733 7.52431C20.0052 7.45546 20.1424 7.44054 20.2349 7.44054C20.3268 7.44054 20.4643 7.45546 20.5958 7.52431L21.8969 8.20825L21.6487 6.75997Z" fill="#1F1F1F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5155 4.22457C12.8022 4.26646 13.0085 4.42077 13.082 4.64707C13.1554 4.87336 13.0788 5.11916 12.8718 5.32113L11.8872 6.2812L12.12 7.6368C12.1701 7.92905 12.0774 8.1125 11.9907 8.21505C11.8831 8.3424 11.7285 8.4127 11.5542 8.4127C11.4353 8.4127 11.3118 8.37948 11.1874 8.31424L9.96995 7.67387L8.75253 8.31376C8.44535 8.47529 8.12998 8.42955 7.94871 8.21505C7.86204 8.11274 7.7696 7.92905 7.81967 7.63728L8.05247 6.28168L7.06712 5.32113C6.86057 5.11916 6.78377 4.87312 6.85744 4.64707C6.93111 4.42029 7.13718 4.26646 7.42318 4.22457L8.78479 4.02741L9.39314 2.79434C9.52169 2.53483 9.73162 2.38629 9.96995 2.38629C10.208 2.38629 10.4182 2.53483 10.5463 2.79434L11.1549 4.02741L12.5155 4.22457ZM11.1278 6.38666C11.0898 6.16734 11.175 5.90518 11.3346 5.74966L12.1574 4.94728L11.0204 4.78213C10.7992 4.74939 10.5767 4.58738 10.4783 4.38829L9.96984 3.35744L9.46116 4.38829C9.36245 4.58738 9.14001 4.74939 8.91998 4.78213L7.78176 4.94728L8.60461 5.74966C8.76422 5.90494 8.8492 6.16734 8.8114 6.38738L8.61737 7.51933L9.63401 6.98441C9.75726 6.92013 9.88462 6.90641 9.96984 6.90641C10.0548 6.90641 10.1819 6.91989 10.3049 6.98441L11.3223 7.51933L11.1278 6.38666Z" fill="#1F1F1F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.6495 14.7935L23.0101 14.9911C23.2969 15.033 23.5029 15.1873 23.5766 15.4136C23.65 15.6404 23.5732 15.8857 23.3662 16.0877L22.3816 17.0473L22.6136 18.4033C22.664 18.6951 22.5713 18.8786 22.4848 18.9811C22.3772 19.1089 22.2224 19.1792 22.0484 19.1792C21.9295 19.1792 21.806 19.146 21.6815 19.0808L20.4643 18.4404L19.2469 19.0803C18.9402 19.2413 18.6244 19.1966 18.4431 18.9811C18.3567 18.8788 18.264 18.6956 18.314 18.4033L18.5468 17.0477L17.5615 16.0872C17.3547 15.8857 17.2779 15.6397 17.3516 15.4136C17.4255 15.1868 17.6316 15.033 17.9176 14.9911L19.2789 14.7935L19.8878 13.5604C20.0156 13.3011 20.2258 13.1523 20.4641 13.1523C20.7022 13.1523 20.9123 13.3011 21.0407 13.5599L21.6495 14.7935ZM21.6224 17.1531C21.5841 16.9338 21.6693 16.6717 21.829 16.5161L22.652 15.7138L21.515 15.5486C21.2931 15.5154 21.0704 15.3534 20.9724 15.1538L20.4644 14.1239L19.9558 15.1543C19.8571 15.3538 19.6344 15.5159 19.4141 15.5481L18.2764 15.7138L19.099 16.5157C19.2586 16.6709 19.3438 16.9338 19.306 17.1531L19.1117 18.2858L20.1289 17.7509C20.2521 17.6861 20.3792 17.6729 20.4644 17.6729C20.5492 17.6729 20.6763 17.6859 20.7986 17.7499L21.8164 18.2853L21.6224 17.1531Z" fill="#1F1F1F"/>
</svg>
  <p>CUSTOMIZE THIS</p></div>
                    </div>
                </div>
                <p className="pImgItem1">Convertible Mini Merinal</p>
                <p className="pImgItem2">Start at $50.00</p>
                </div>
                <ImgItem src="https://s3-alpha-sig.figma.com/img/04de/cf41/97c3cf0f2e1669473564fab081d57bec?Expires=1629072000&Signature=HtWKTjVk3BSmZ54BlBh-YfCllsXM8Jjde1vHJWLkX8FxOoCisfkhw3Tae7okYbSuuEkpNTBQ8yS6pxHT5H2AoiE12ODicc3uf77ujYZalCr~JN-mpbmglnMq-zXSjE5FbmV7SKNgqd2EpxNuA-bP5UF0s4hj0d~NhFUCQXHiCg7ia-MNwp4OgJaktuVxHl5~LlgRH6kr0TdBaXzdPVaXtS41gCo4dFK6Dk26lT-NUTkTEOGApeYtZGLHqxGLieX5VP3nD7vxn4BTV5xDiw4JUqZhOYkAHqpV7BJOTmXp5E~JaAOKii~Gi2ADI5uHRs6Xa6Df1hWAcO8MgMzSiCfFaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Letraset sheets containing Lorem Ipsum passages" />
                <ImgItem src="https://s3-alpha-sig.figma.com/img/5504/4cd9/11f740d42b2d3e8f1a828799af4cf9c0?Expires=1629072000&Signature=OCvEi5WMTMxykSh4YPMiu7eXFdtfJ4Az3oPNP7xN7ZPTRWkXKjVbYVwWqXzViIVZw6H112TU6p8~30mGhoFzVZQpFfs8~dwTnnUxi9ZHxYIheDIFxkqX2PCTlou6NahG9LuK3b5MQHlhufRj3xThECZcQhti7eveFfy6~DaRL0AliL9AF4Ew0ZwnhIZoUBMKSPKi91p57RgG3PQPUT23xqItLlshUgVmq8PSB6F7z8fbQIgudfMZLHyPD4MnChZwEfTCdCiJ1aCEBtUWUMnGVTwIlEgwdczSdAaIbSc-aCWCet19yxXQmAASUZYr6O9Wka3-YRiO7k3RsV-c2kWTtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Convertible Mini Merinal" />
            </div>
            <div className="designImgRow">
            <ImgItem src="https://s3-alpha-sig.figma.com/img/8659/f548/876e47d2c542dd8f1f2ada71fe27cfa1?Expires=1629072000&Signature=UXlg0ABaNommdyhNYWbHSTuEiFbysIkWzQWhbJj5m-q54u-4UPsiiRAUzdAiF~54codIq9O8kB1uzA4UkDLJLFDbBnBHUSM5MaK7YKgWERzpN5rNtdXlcF~ugBodvauKn~BbrjZtRgNWBAJtPpI9xpit0IlfU1peGlfwxKkX-Hi7BQgk432mLzaT2uPxceLgGm90aZfVBnHnsTP8EuP~PtG-EHyMsec84OlF6q770JlSWx6wzPxZ96MONH2bqhlvOWy8W5DZgrDnMUfkc1ruGavi-zHuTj~mEL~JkXxLffAVKgSuYQL06IIfeTkFefl8OowRnvdfNm8xAvZF6KMhxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Convertible Mini Merinal" /> 
            <div className="itemImgBig">
            <img src="https://s3-alpha-sig.figma.com/img/04de/cf41/97c3cf0f2e1669473564fab081d57bec?Expires=1629072000&Signature=HtWKTjVk3BSmZ54BlBh-YfCllsXM8Jjde1vHJWLkX8FxOoCisfkhw3Tae7okYbSuuEkpNTBQ8yS6pxHT5H2AoiE12ODicc3uf77ujYZalCr~JN-mpbmglnMq-zXSjE5FbmV7SKNgqd2EpxNuA-bP5UF0s4hj0d~NhFUCQXHiCg7ia-MNwp4OgJaktuVxHl5~LlgRH6kr0TdBaXzdPVaXtS41gCo4dFK6Dk26lT-NUTkTEOGApeYtZGLHqxGLieX5VP3nD7vxn4BTV5xDiw4JUqZhOYkAHqpV7BJOTmXp5E~JaAOKii~Gi2ADI5uHRs6Xa6Df1hWAcO8MgMzSiCfFaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
            <div>
                <h3 >Letraset sheets containing Lorem Ipsum passages</h3>
                <p >Start at $50.00</p>
            </div>
        </div>
            </div>
            <div className="designImgRow">
                <ImgItem src="https://s3-alpha-sig.figma.com/img/959c/1dee/d01fea56ddf200b3f381370bb4733510?Expires=1629072000&Signature=OQ4xFFwaA~VW9ShXLAlQQzLKxYS6Slfs-TcAkDu5-sWi-1KDS77a2BA3GVU-U6A6uo9qmLoR0Zf8Pd5tt~pCHFj-8RT3CAlCyxdtycAmj0UESxUcdHGnjZCCaZFhrRvzmwcA0-rt9rTuF-Qfgk~GwrN5BtimPEKbYP1BGp1fWSsfw3MVHmyo61ZCzXyntQtz8GT952DaarWefOQ44UhI4vaqwef~LO1-SMkIOFD4kWm0iDZa6nS1SrDIoChetiCZgIGIonfFPbxB2GiWAB628AownwqtDVKn9uvniEuFWl-LXyHlj398ztPKmj~rvcgET8LpxJcju0FKKSeMcToxKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Convertible Mini Merinal" />
                <ImgItem src="https://s3-alpha-sig.figma.com/img/086d/eb89/4909734ea811b410f19ce055f5a2a906?Expires=1629072000&Signature=ctaC7sGSLnZkSxD7cre5JOw4EgJsPI9rD~NTyLYsolPIUyzSGat7JfqDIbHDEr9qLXXUz5zsSDebWaR1LtRDwd3Cd1g9L6hW9clSPV0-O4uCWvqcN3DPcjGhy86lmnty6gizD3L0BKkMk0E2og4I3I4ugo4NSqbZSYXzoYgAk8~8o6pLAfHg00TnU7qlnyITN23Y66TNXl7FKRv9LB71TXGv1i3LI~aV0AlBCfL68~K50qQljUTnskdnKEU5XnETzHX7IuMEfdj3Mv2zwag5vpgqGRNXIZOhXpBPiA2acqxd28BpopRqBvNYbPNMo5a-jZo0dKZUVD0Z8nZm-xLvFw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Letraset sheets containing Lorem Ipsum passages"/>
                <ImgItem src="https://s3-alpha-sig.figma.com/img/5504/4cd9/11f740d42b2d3e8f1a828799af4cf9c0?Expires=1629072000&Signature=OCvEi5WMTMxykSh4YPMiu7eXFdtfJ4Az3oPNP7xN7ZPTRWkXKjVbYVwWqXzViIVZw6H112TU6p8~30mGhoFzVZQpFfs8~dwTnnUxi9ZHxYIheDIFxkqX2PCTlou6NahG9LuK3b5MQHlhufRj3xThECZcQhti7eveFfy6~DaRL0AliL9AF4Ew0ZwnhIZoUBMKSPKi91p57RgG3PQPUT23xqItLlshUgVmq8PSB6F7z8fbQIgudfMZLHyPD4MnChZwEfTCdCiJ1aCEBtUWUMnGVTwIlEgwdczSdAaIbSc-aCWCet19yxXQmAASUZYr6O9Wka3-YRiO7k3RsV-c2kWTtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Convertible Mini Merinal" />
            </div>
            <div className="designImgRow">
                <ImgItem src="https://s3-alpha-sig.figma.com/img/8659/f548/876e47d2c542dd8f1f2ada71fe27cfa1?Expires=1629072000&Signature=UXlg0ABaNommdyhNYWbHSTuEiFbysIkWzQWhbJj5m-q54u-4UPsiiRAUzdAiF~54codIq9O8kB1uzA4UkDLJLFDbBnBHUSM5MaK7YKgWERzpN5rNtdXlcF~ugBodvauKn~BbrjZtRgNWBAJtPpI9xpit0IlfU1peGlfwxKkX-Hi7BQgk432mLzaT2uPxceLgGm90aZfVBnHnsTP8EuP~PtG-EHyMsec84OlF6q770JlSWx6wzPxZ96MONH2bqhlvOWy8W5DZgrDnMUfkc1ruGavi-zHuTj~mEL~JkXxLffAVKgSuYQL06IIfeTkFefl8OowRnvdfNm8xAvZF6KMhxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Convertible Mini Merinal" />
                <ImgItem src="https://s3-alpha-sig.figma.com/img/5504/4cd9/11f740d42b2d3e8f1a828799af4cf9c0?Expires=1629072000&Signature=OCvEi5WMTMxykSh4YPMiu7eXFdtfJ4Az3oPNP7xN7ZPTRWkXKjVbYVwWqXzViIVZw6H112TU6p8~30mGhoFzVZQpFfs8~dwTnnUxi9ZHxYIheDIFxkqX2PCTlou6NahG9LuK3b5MQHlhufRj3xThECZcQhti7eveFfy6~DaRL0AliL9AF4Ew0ZwnhIZoUBMKSPKi91p57RgG3PQPUT23xqItLlshUgVmq8PSB6F7z8fbQIgudfMZLHyPD4MnChZwEfTCdCiJ1aCEBtUWUMnGVTwIlEgwdczSdAaIbSc-aCWCet19yxXQmAASUZYr6O9Wka3-YRiO7k3RsV-c2kWTtQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Letraset sheets containing Lorem Ipsum passages" />
                <ImgItem src="https://s3-alpha-sig.figma.com/img/04de/cf41/97c3cf0f2e1669473564fab081d57bec?Expires=1629072000&Signature=HtWKTjVk3BSmZ54BlBh-YfCllsXM8Jjde1vHJWLkX8FxOoCisfkhw3Tae7okYbSuuEkpNTBQ8yS6pxHT5H2AoiE12ODicc3uf77ujYZalCr~JN-mpbmglnMq-zXSjE5FbmV7SKNgqd2EpxNuA-bP5UF0s4hj0d~NhFUCQXHiCg7ia-MNwp4OgJaktuVxHl5~LlgRH6kr0TdBaXzdPVaXtS41gCo4dFK6Dk26lT-NUTkTEOGApeYtZGLHqxGLieX5VP3nD7vxn4BTV5xDiw4JUqZhOYkAHqpV7BJOTmXp5E~JaAOKii~Gi2ADI5uHRs6Xa6Df1hWAcO8MgMzSiCfFaA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Convertible Mini Merinal" />
            </div>
            <div className="designImgRow">
                <ImgItem src="https://s3-alpha-sig.figma.com/img/75cf/a285/35880cee89134c53f87f8e32c44811a0?Expires=1629072000&Signature=UdU0UBL6YbLF0eCubJ8AZJyVN3OTpKXf7KDr6ATv0gYsi4TFvjoh8YxVPzNK7By7fMw5Hi1j1e1jQefscF38rT645kJn5l2~dF2hsPjy8n8pZLgvebyfRMpjHun~qX1Xh5N7y5m1afmcpRludHg2DNuaU2anUjN8A1OiuOiLmOiBtnU6GOoj4KaIkfr5eAPRqfwfZTVWbo5rv6InTq6x2qs~gGmhjyOeXXYxSJ70jrp8SfX3l5DfeGQ747Si-6ckDBho2ZE4aT-3nwp5YuIogKLDhCXBj8Kei-W-0ffU2tdZ~FLjSsbiKskIolzMAlZH-5I~bCmWHrenF36Uy5ZLEQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Convertible Mini Merinal" />
                <ImgItem src="https://s3-alpha-sig.figma.com/img/959c/1dee/d01fea56ddf200b3f381370bb4733510?Expires=1629072000&Signature=OQ4xFFwaA~VW9ShXLAlQQzLKxYS6Slfs-TcAkDu5-sWi-1KDS77a2BA3GVU-U6A6uo9qmLoR0Zf8Pd5tt~pCHFj-8RT3CAlCyxdtycAmj0UESxUcdHGnjZCCaZFhrRvzmwcA0-rt9rTuF-Qfgk~GwrN5BtimPEKbYP1BGp1fWSsfw3MVHmyo61ZCzXyntQtz8GT952DaarWefOQ44UhI4vaqwef~LO1-SMkIOFD4kWm0iDZa6nS1SrDIoChetiCZgIGIonfFPbxB2GiWAB628AownwqtDVKn9uvniEuFWl-LXyHlj398ztPKmj~rvcgET8LpxJcju0FKKSeMcToxKw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Letraset sheets containing Lorem Ipsum passages" />
                <ImgItem src="https://s3-alpha-sig.figma.com/img/4e1e/af02/e22d148c5422f1d6f7de116fe2798344?Expires=1629072000&Signature=cbc-vRe2P-ntY7XWWXSab16C7mmACZeBdgOeuQU~H8nN2QTZtVZKz9~z8OMBdPxvFhr14KSCxpcOVOL-KGccB9Ad9AmAUoDoQxAbanlV0p~zDSIg9UQ8IAD6JmjOtlP2r0xdE2nGaLrDFjvUqGMmWefqtRWgUZ-H~mzMe2bEdxPTdZEbimgsys-4s1wkGYo5RtnJY9VnsT9ia3maW9N5peqJiqXcg~A8VioFR8DGCnoJsFYhl86p4mxSvd1BB53yRdQm0NE52WujXPjYWPwMIxT8xjP7kNKQPc105NMacRI8Ogu5mesv0H09Rt4sPiRZf3PiPM1GwHD9mFmhekkSHQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" name="Convertible Mini Merinal" />
            </div>
        </div>
    )
}
export default BagListDesign;