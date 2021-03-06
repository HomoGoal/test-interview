import './bagDetail.css';
import React, { useContext } from 'react';
import BagDetailPhoto from './bagDetailPhoto';
import Quantity from './quantity';
import { TheContext } from './context';
const BagDetail=()=>{
    const {addToCart,setAddToCart}=useContext(TheContext);
    const handleAddToCart=()=>{
        setAddToCart(true);
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    return(<div className="bagDetail">
        <div className="bagDetailPhoto">
            <BagDetailPhoto url="https://s3-alpha-sig.figma.com/img/959c/1dee/d01fea56ddf200b3f381370bb4733510?Expires=1628467200&Signature=AY-svqmlDIHwuZ4z16RxcF5w4ELS-Tcc1950r-YgGkMQBhQMor0Lcyf6~bJT-zHQ~5DX-gGNb8EobcqHJHU2FOrqNEX3sNNRGSZNQsOdAd6VqAfOoeok93RNJM3Iwzr7-4BKjGbkSPC9VyfsChJEY0XKWguC~FPhgKewG5lRyG8-J1i0YLwJDT4si7oJOJZDXiuhRpI5uziuZZ-UykkganbzZVC4w4B6AyaMZHBhB~ojd-MuluqH-nZtYMQnL~U-LeRwPPIpTGhnoj-nPBuamUrSAgLbDr76Nq54HCJR5lVk82fGnR0KEhiN5jlm6qk9BW~vFecu8sbsyPkPq4WbCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            <BagDetailPhoto url="https://s3-alpha-sig.figma.com/img/086d/eb89/4909734ea811b410f19ce055f5a2a906?Expires=1628467200&Signature=L0pWK133n35~LLy8OQihVIRsRnot~lFw8ynuyeRdYNMk5E9O4OztRGTRdoi~--2nDCHgtIEBC3qbmzOT6b8pqrniLP8j95z4rcTxR~IMwSzROuyqKxp1AuWbdCSnv0VPjwR4z-Pm7p2R9EEV48G6jQyiKmDy5a0yNFlhi1g6WqbJI6oHVy6ImSipqiHBlsBinR1srBmO9idvI2ICb3VTLBWuBC4nSyxbdZg7XNu-jE9TUH~-JEvqKbQQzkzvYd6ByXv9Kh~OkEyMQUpmwXJ7ycMh7-HTAOCnTG6tRD4fsJdlRhv-jycPHI9L1wbdoRavubSN1S7Czbe7Bhrj9AXbTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
            <BagDetailPhoto url="https://s3-alpha-sig.figma.com/img/959c/1dee/d01fea56ddf200b3f381370bb4733510?Expires=1628467200&Signature=AY-svqmlDIHwuZ4z16RxcF5w4ELS-Tcc1950r-YgGkMQBhQMor0Lcyf6~bJT-zHQ~5DX-gGNb8EobcqHJHU2FOrqNEX3sNNRGSZNQsOdAd6VqAfOoeok93RNJM3Iwzr7-4BKjGbkSPC9VyfsChJEY0XKWguC~FPhgKewG5lRyG8-J1i0YLwJDT4si7oJOJZDXiuhRpI5uziuZZ-UykkganbzZVC4w4B6AyaMZHBhB~ojd-MuluqH-nZtYMQnL~U-LeRwPPIpTGhnoj-nPBuamUrSAgLbDr76Nq54HCJR5lVk82fGnR0KEhiN5jlm6qk9BW~vFecu8sbsyPkPq4WbCQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        </div>
        <div className="bagDetailPrice">
            <h1>Convertible Mini Merinal</h1>
            <div className="priceDetail">
            <h3>$ 900.00</h3><h3>$ 1,000.00</h3>
            </div>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type.</p>
            <div className="selectGroup">
                <div className="colorGroup">
                    <p className="p1">COLORS</p>
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="30" cy="30" r="18" fill="#9BB4C0"/>
                        <circle cx="30" cy="30" r="29.5" stroke="#C6B67E"/>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="black"/>
                    </svg>
                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#DA6666"/>
                    </svg>
                </div>
                <div className="quantityGroup">
                    <p className="h1">QUANTITY</p>
                    <Quantity/>
                </div>
                <div className="buttonGroup">
                    <div>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3948 8.96628C15.8043 8.96628 16.1888 9.12589 16.4779 9.41526L16.5759 9.51275C17.1734 10.1103 17.1734 11.0821 16.5766 11.6794L4.87987 23.3759C4.59074 23.6653 4.2058 23.8244 3.79679 23.8244C3.38753 23.8244 3.00307 23.6653 2.71371 23.3759L2.61524 23.2767C2.32636 22.9883 2.16675 22.6036 2.16675 22.1946C2.16675 21.7854 2.32612 21.4009 2.61524 21.1113L14.312 9.41477C14.6014 9.12589 14.9858 8.96628 15.3948 8.96628ZM4.33794 22.8342L16.0347 11.1374C16.3332 10.8389 16.3332 10.3535 16.0349 10.0548L15.937 9.95729C15.7916 9.81212 15.5997 9.73268 15.3951 9.73268C15.1907 9.73268 14.9988 9.81212 14.8544 9.95681L3.1576 21.6536C3.01268 21.798 2.93299 21.9899 2.93299 22.1948C2.93299 22.3989 3.01268 22.591 3.15736 22.7352L3.25606 22.8346C3.54447 23.123 4.04906 23.1235 4.33794 22.8342Z" fill="#BDAA66"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M23.1964 4.31188C23.5048 4.35665 23.7268 4.52012 23.8048 4.76037C23.883 5.00087 23.7995 5.26376 23.5756 5.48163L22.4066 6.62128C22.4086 6.6195 22.4078 6.6256 22.4068 6.63286C22.4062 6.63736 22.4055 6.6423 22.4054 6.64608L22.6798 8.24025C22.734 8.55658 22.6358 8.75326 22.5436 8.86256C22.4302 8.99665 22.2672 9.07055 22.0835 9.07055C21.9549 9.07055 21.8209 9.03444 21.6851 8.9627L20.2397 8.20317L20.2156 8.20943L18.7847 8.9627C18.4546 9.13652 18.1183 9.09078 17.9259 8.86256C17.8337 8.75326 17.7355 8.55658 17.7897 8.24025L18.0656 6.63115C18.0636 6.63605 18.0607 6.62887 18.0576 6.62119C18.0559 6.61681 18.0541 6.61226 18.0523 6.60972L16.8934 5.48138C16.6698 5.26376 16.5865 5.00087 16.6647 4.76037C16.7427 4.52012 16.9647 4.35689 17.2735 4.31188L18.8894 4.07668C18.8854 4.07668 18.8899 4.0725 18.8953 4.06756C18.8987 4.06444 18.9024 4.06102 18.9045 4.05814L19.6198 2.60697C19.758 2.32771 19.9819 2.16666 20.2351 2.16666C20.4879 2.16666 20.7123 2.32771 20.85 2.60793L21.5729 4.07138C21.5712 4.06754 21.5774 4.07104 21.5843 4.0749C21.5882 4.07709 21.5923 4.07939 21.5953 4.08053L23.1964 4.31188ZM21.649 6.75994C21.6078 6.52329 21.7 6.24018 21.8722 6.07263L22.9244 5.0466L21.4701 4.83499C21.2318 4.80057 20.9913 4.62531 20.8851 4.40937L20.2349 3.09229L19.5842 4.41057C19.4785 4.62555 19.2378 4.80057 18.9997 4.83499L17.5454 5.0466L18.5979 6.07263C18.7698 6.24018 18.8617 6.52329 18.8208 6.75994L18.5723 8.2087L19.8735 7.52428C20.0055 7.45543 20.1427 7.44051 20.2351 7.44051C20.3271 7.44051 20.4646 7.45543 20.596 7.52428L21.8972 8.20822L21.649 6.75994Z" fill="#BDAA66"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.516 4.22451C12.8027 4.2664 13.009 4.42071 13.0825 4.64701C13.1559 4.8733 13.0793 5.11909 12.8723 5.32107L11.8877 6.28114L12.1205 7.63674C12.1705 7.92899 12.0779 8.11244 11.9912 8.21499C11.8836 8.34234 11.729 8.41264 11.5547 8.41264C11.4358 8.41264 11.3123 8.37942 11.1879 8.31418L9.97044 7.67381L8.75302 8.31369C8.44584 8.47523 8.13047 8.42949 7.9492 8.21499C7.86253 8.11268 7.77009 7.92899 7.82016 7.63722L8.05295 6.28162L7.06761 5.32107C6.86106 5.11909 6.78426 4.87306 6.85793 4.64701C6.93159 4.42023 7.13767 4.2664 7.42366 4.22451L8.78528 4.02734L9.39363 2.79428C9.52218 2.53477 9.73211 2.38623 9.97044 2.38623C10.2085 2.38623 10.4187 2.53477 10.5468 2.79428L11.1554 4.02734L12.516 4.22451ZM11.1283 6.38659C11.0902 6.16728 11.1755 5.90512 11.3351 5.7496L12.1579 4.94722L11.0209 4.78207C10.7997 4.74933 10.5772 4.58732 10.4788 4.38822L9.97032 3.35738L9.46164 4.38822C9.36294 4.58732 9.1405 4.74933 8.92046 4.78207L7.78225 4.94722L8.6051 5.7496C8.76471 5.90488 8.84969 6.16728 8.81189 6.38732L8.61786 7.51927L9.63449 6.98435C9.75775 6.92007 9.8851 6.90635 9.97032 6.90635C10.0553 6.90635 10.1824 6.91983 10.3054 6.98435L11.3228 7.51927L11.1283 6.38659Z" fill="#BDAA66"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M21.6497 14.7934L23.0104 14.9911C23.2971 15.033 23.5032 15.1873 23.5768 15.4136C23.6503 15.6403 23.5735 15.8857 23.3664 16.0876L22.3818 17.0472L22.6139 18.4033C22.6642 18.6951 22.5715 18.8785 22.4851 18.9811C22.3775 19.1089 22.2227 19.1792 22.0486 19.1792C21.9297 19.1792 21.8062 19.146 21.6817 19.0807L20.4646 18.4404L19.2472 19.0803C18.9405 19.2413 18.6246 19.1965 18.4433 18.9811C18.3569 18.8788 18.2642 18.6956 18.3143 18.4033L18.5471 17.0477L17.5617 16.0872C17.355 15.8857 17.2782 15.6396 17.3518 15.4136C17.4257 15.1868 17.6318 15.033 17.9178 14.9911L19.2792 14.7934L19.888 13.5604C20.0158 13.3011 20.226 13.1523 20.4643 13.1523C20.7024 13.1523 20.9126 13.3011 21.0409 13.5599L21.6497 14.7934ZM21.6226 17.1531C21.5844 16.9338 21.6696 16.6716 21.8292 16.5161L22.6523 15.7137L21.5153 15.5486C21.2933 15.5154 21.0706 15.3533 20.9726 15.1538L20.4647 14.1239L19.956 15.1542C19.8573 15.3538 19.6346 15.5158 19.4143 15.5481L18.2766 15.7137L19.0992 16.5156C19.2588 16.6709 19.3441 16.9338 19.3063 17.1531L19.112 18.2858L20.1291 17.7509C20.2524 17.6861 20.3795 17.6729 20.4647 17.6729C20.5494 17.6729 20.6765 17.6859 20.7988 17.7499L21.8167 18.2853L21.6226 17.1531Z" fill="#BDAA66"/>
</svg>

                        <p className="p">CUSTOMIZE THIS</p>
                    </div>
                    <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.2632" cy="19.5426" r="1.48" fill="#1F1F1F"/>
<circle cx="17.3475" cy="19.5426" r="1.47977" fill="#1F1F1F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.06621 6.80266H20.8246C21.222 6.80266 21.5722 6.96599 21.7851 7.25066C21.9982 7.53532 22.0562 7.91732 21.944 8.29843L19.8406 15.4493C19.6269 16.176 18.8657 16.7455 18.1082 16.7455H10.5026C9.74354 16.7455 8.98665 16.1731 8.77976 15.4429L6.45866 7.25288L5.91977 5.35222C5.66733 4.46155 4.80533 3.70867 4.03733 3.70822L2.35378 3.70733C2.15822 3.70733 2 3.54889 2 3.35333C2.00022 3.15822 2.15844 3 2.35378 3L4.03777 3.00044C5.11355 3.00089 6.2631 3.96933 6.60043 5.15911L7.06621 6.80266ZM19.162 15.2495L21.2651 8.09888C21.3146 7.93133 21.2979 7.78044 21.2186 7.67466C21.1393 7.56866 20.9995 7.51022 20.8246 7.51022H7.26664L9.46042 15.25C9.57931 15.6695 10.0666 16.0382 10.5029 16.0382H18.1082C18.546 16.0382 19.0384 15.6695 19.162 15.2495Z" fill="#1F1F1F"/>
<line x1="11.35" y1="13.65" x2="17.65" y2="13.65" stroke="#1F1F1F" stroke-width="0.7" stroke-linecap="round"/>
<line x1="10.35" y1="10.65" x2="18.65" y2="10.65" stroke="#1F1F1F" stroke-width="0.7" stroke-linecap="round"/>
</svg>

                         <p onClick={handleAddToCart}className="p">ADD TO CART</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
export default BagDetail;