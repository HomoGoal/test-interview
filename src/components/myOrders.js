import React from 'react';
import "./myOrders.css";
import StayTune from './stayTune';
import Footer from './footer';
import Discount from './discount';
const MyOrders=()=>{
    return(
        <div className="myOrders">
            <p className="pMyOrders">MY ORDERS</p>
            <p className="pMyOrders2">Tracking your orders</p>
            <table>
                <tr className="titleTable">
                    <th>ORDER CODE</th>
                    <th>DATE</th>
                    <th>PRODUCTS</th>
                    <th>AMOUNT</th>
                    <th>STATUS</th>
                </tr>
                <tr className="dataTable">
                    <td>230725321</td>
                    <td>Nov 24, 2020</td>
                    <td>Letraset sheets containing Lorem Ipsum passages...</td>
                    <td>$2,300.00</td>
                    <td>Delivered</td>
                </tr>
                <tr className="dataTable">
                    <td>571137366</td>
                    <td>Nov 24, 2020</td>
                    <td>Aldus PageMaker including versions of Lorem Ipsum...</td>
                    <td>$2,300.00</td>
                    <td className="delivered">Delivered</td>
                </tr>
                <tr className="dataTable">
                    <td>230725321</td>
                    <td>Nov 24, 2020</td>
                    <td>Letraset sheets containing Lorem Ipsum passages...</td>
                    <td>$2,300.00</td>
                    <td>Delivered</td>
                </tr>
                <tr className="dataTable">
                    <td>230725321</td>
                    <td>Nov 24, 2020</td>
                    <td>Letraset sheets containing Lorem Ipsum passages...</td>
                    <td>$2,300.00</td>
                    <td>Delivered</td>
                </tr>
                <tr className="dataTable">
                    <td>230725321</td>
                    <td>Nov 24, 2020</td>
                    <td>Letraset sheets containing Lorem Ipsum passages...</td>
                    <td>$2,300.00</td>
                    <td>Delivered</td>
                </tr>
                <tr className="dataTable">
                    <td>230725321</td>
                    <td>Nov 24, 2020</td>
                    <td>Letraset sheets containing Lorem Ipsum passages...</td>
                    <td>$2,300.00</td>
                    <td>Delivered</td>
                </tr>
                <tr className="dataTable">
                    <td>230725321</td>
                    <td>Nov 24, 2020</td>
                    <td>Letraset sheets containing Lorem Ipsum passages...</td>
                    <td>$2,300.00</td>
                    <td>Delivered</td>
                </tr>
                <tr className="dataTable">
                    <td>230725321</td>
                    <td>Nov 24, 2020</td>
                    <td>Letraset sheets containing Lorem Ipsum passages...</td>
                    <td>$2,300.00</td>
                    <td>Delivered</td>
                </tr>
                <tr className="dataTable">
                    <td>230725321</td>
                    <td>Nov 24, 2020</td>
                    <td>Letraset sheets containing Lorem Ipsum passages...</td>
                    <td>$2,300.00</td>
                    <td>Delivered</td>
                </tr>
                <tr className="dataTable">
                    <td>230725321</td>
                    <td>Nov 24, 2020</td>
                    <td>Letraset sheets containing Lorem Ipsum passages...</td>
                    <td>$2,300.00</td>
                    <td>Delivered</td>
                </tr>
            </table> 
            <div className="myOrderSvg">
            <svg width="175" height="30" viewBox="0 0 175 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="29.5" y="0.5" width="29" height="29" fill="white" stroke="#E7E7E7"/>
<path d="M43.702 20H44.92V9.99H43.786L41.462 11.67V12.804L43.702 11.194V20Z" fill="#ACACAC"/>
<rect x="87.5" y="0.5" width="29" height="29" fill="white" stroke="#E7E7E7"/>
<path d="M102.06 20.126C104.132 20.126 105.616 19.034 105.616 17.214C105.616 15.828 104.86 15.002 103.684 14.694C104.594 14.316 105.266 13.644 105.266 12.51C105.266 11.124 104.16 9.864 102.256 9.864C100.352 9.864 99.05 11.166 98.98 12.748H100.044C100.17 11.614 101.01 10.858 102.256 10.858C103.474 10.858 104.076 11.586 104.076 12.538C104.076 13.63 103.502 14.246 102.2 14.246H101.5V15.268H102.256C103.67 15.268 104.37 15.926 104.37 17.214C104.37 18.39 103.656 19.146 102.088 19.146C100.506 19.146 99.792 18.236 99.68 17.046H98.56C98.63 18.796 99.932 20.126 102.06 20.126Z" fill="#ACACAC"/>
<rect x="116.5" y="0.5" width="29" height="29" fill="white" stroke="#E7E7E7"/>
<path d="M132.558 20H133.748V17.9H135.134V16.906H133.748V9.99H132.124L127.546 17.508V17.9H132.558V20ZM129.086 16.906L132.558 10.914V16.906H129.086Z" fill="#ACACAC"/>
<rect x="58" width="30" height="30" fill="#BDAA66"/>
<path d="M69.266 20H75.972V19.006H71.142L73.9 16.318C75.132 15.114 75.916 13.91 75.916 12.678C75.916 10.956 74.74 9.864 72.892 9.864C70.988 9.864 69.798 11.11 69.644 13.07H70.778C70.974 11.502 71.73 10.844 72.892 10.844C74.026 10.844 74.684 11.516 74.684 12.636C74.684 13.658 74.152 14.568 73.242 15.534L69.266 19.72V20Z" fill="white"/>
<path d="M0.5 3C0.5 1.61929 1.61929 0.5 3 0.5H29.5V29.5H3C1.61929 29.5 0.5 28.3807 0.5 27V3Z" fill="white" stroke="#E7E7E7"/>
<path d="M174.5 3C174.5 1.61929 173.381 0.5 172 0.5H145.5V29.5H172C173.381 29.5 174.5 28.3807 174.5 27V3Z" fill="white" stroke="#E7E7E7"/>
<path d="M157.084 9.16699L162.684 15.0003L157.084 20.8337" stroke="#E7E7E7"/>
<path d="M17.916 9.16699L12.316 15.0003L17.916 20.8337" stroke="#E7E7E7"/>
</svg>
            </div>

            <Discount/>
            <Footer/>
        </div>
    )
}
export default MyOrders;