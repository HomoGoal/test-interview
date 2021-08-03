import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TheContext } from './context';
import "./moreBagMiddle.css";
const MoreBagMiddle=({position})=>{
    const history=useHistory();
    const {setAddToCart}=useContext(TheContext);
    const handleToDetail=()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        history.push('/home/bags/bag-detail');
        setAddToCart(false);
    }
    return(<div className="moreBagMiddle">
         {position==='left'?<div className="bigMiddle">
            <img src="https://s3-alpha-sig.figma.com/img/4e1e/af02/e22d148c5422f1d6f7de116fe2798344?Expires=1628467200&Signature=hJIVWX9SCuG6Sr8CVofd88fdcnq1P08c1mrMTk1rqikW99x3mGOul89IdYnzYUWUJHVFi1sSABNFuhbZYl3PuMf4HlBPauoaMnKcf4cAup9wWNLHzt0enOwEEKxM6XMjF86lFxiOxZnF-Hz0EodZdnINOpIOAY9T-xaSnyfzlnZY3LIjSsFVwVdyjgikaazwU7wG-KoijoPedKzgnZm1pzxV3bVtx7Ctf7b9EUbu0HZAfqXVZ4t~4BEfGZelbr6ceP-ndii-Fqw-phLs1AZs8ZRPIaojYk2cojJzSe6MAq7LybI5JQB0lm9aGjHCi3zk0xInvkFS1EHiGGvqY4bo7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
            <div>
                <h3 className="h3">Letraset sheets containing Lorem Ipsum passages</h3>
            <p className="p">$1,450.00</p>
            </div>
        </div>:''}
        <div className="moreBagMiddle1">
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/4e1e/af02/e22d148c5422f1d6f7de116fe2798344?Expires=1628467200&Signature=hJIVWX9SCuG6Sr8CVofd88fdcnq1P08c1mrMTk1rqikW99x3mGOul89IdYnzYUWUJHVFi1sSABNFuhbZYl3PuMf4HlBPauoaMnKcf4cAup9wWNLHzt0enOwEEKxM6XMjF86lFxiOxZnF-Hz0EodZdnINOpIOAY9T-xaSnyfzlnZY3LIjSsFVwVdyjgikaazwU7wG-KoijoPedKzgnZm1pzxV3bVtx7Ctf7b9EUbu0HZAfqXVZ4t~4BEfGZelbr6ceP-ndii-Fqw-phLs1AZs8ZRPIaojYk2cojJzSe6MAq7LybI5JQB0lm9aGjHCi3zk0xInvkFS1EHiGGvqY4bo7A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
            </div>
            <h3 className="h3">Convertible Mini Merinal</h3>
            <p className="p">$1,450.00</p>
        </div>
        <div className="moreBagMiddle2">
            <div>
                <img src="https://s3-alpha-sig.figma.com/img/d15b/4d35/6a2f0dac87ed1d95e0e6effe470552a1?Expires=1628467200&Signature=c9rGk-GgFdQNJIht~79MUmwiUcXAkgw2TbpRA2HgoFcMGNHKCfMejAZxQyXIDTgffZt73s3yly8P~W-BhunasqqipY16QI3-Kt6pDNvt-oNuop38MU0xI~VHh44uj7iEPjv0aMu9QcZaCTbw2OiqfTwxG6O4B3W0rkzGC8z5GqkZYeQmYgfTNKoQuuI3dchjCPBnx433wBO6MPyDeu6IW9k8Eg9IXlwmDRJzf6rTAEwOvS0Ebukq0BGqwoPNGtskd-OWiH0t5cBkZeI9fZrfznFqno0XocvcQh~5fwAGVYKlbcom1Yo~Hf-4XM0uGLoeuYHve4tvCrbReyLzW0C28w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
            </div>
            <h3 className="h3">Letraset sheets containing Lorem Ipsum passages</h3>
            <p className="p">$1,450.00</p>
        </div>
        {position==='right'?<div onClick={handleToDetail} className="bigMiddle">
            <img src="https://s3-alpha-sig.figma.com/img/086d/eb89/4909734ea811b410f19ce055f5a2a906?Expires=1628467200&Signature=L0pWK133n35~LLy8OQihVIRsRnot~lFw8ynuyeRdYNMk5E9O4OztRGTRdoi~--2nDCHgtIEBC3qbmzOT6b8pqrniLP8j95z4rcTxR~IMwSzROuyqKxp1AuWbdCSnv0VPjwR4z-Pm7p2R9EEV48G6jQyiKmDy5a0yNFlhi1g6WqbJI6oHVy6ImSipqiHBlsBinR1srBmO9idvI2ICb3VTLBWuBC4nSyxbdZg7XNu-jE9TUH~-JEvqKbQQzkzvYd6ByXv9Kh~OkEyMQUpmwXJ7ycMh7-HTAOCnTG6tRD4fsJdlRhv-jycPHI9L1wbdoRavubSN1S7Czbe7Bhrj9AXbTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"></img>
            <div>
                <h3 className="h3">Convertible Mini Merinal</h3>
            <p className="p">$950.00</p>
            </div>
        </div>:''}
    </div>)
}
export default MoreBagMiddle;