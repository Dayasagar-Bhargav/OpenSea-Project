import React from 'react'
import { useState } from 'react';
import { GrFormDown } from 'react-icons/gr';


function Thirdnav() {
    const [isclicked, setIsclicked] = useState(false);
    const [isclickedd, setIsclickedd] = useState(false);
    const [mainVal , setMainVal] = useState('1h');



    const ClickHandler = () => {
        setIsclicked(!isclicked);
    }
    const ClickHandlerr = () => {
        setIsclickedd(!isclickedd);
    }


    return (
        <>
            <div className="thirdnav">
                <div className="ThirdnavBottomBorder">
                    <div className="thirdnavLeft">
                        <div className="Trending">
                            <h2>Trending</h2>
                        </div>
                        <div className="Top">
                            <h2>Top</h2>
                        </div>

                    </div>
                    <div className="thirdnavRight">
                        <div className="thirdanvRightFirst">
                            <div className="box">1h</div>
                            <div className="box">6h</div>
                            <div className="box">24h</div>
                            <div className="box">7d</div>
                        </div>
                        <div className="thirdanvRightFirstSub" onClick={ClickHandlerr} >
                            <h3>{mainVal}</h3>
                            {isclickedd ? <div className="subs">
                            <div className="boxs" onClick={()=> setMainVal('1h')}>1h</div>
                            <div className="boxs" onClick={()=> setMainVal('6h')}>6h</div>
                            <div className="boxs" onClick={()=> setMainVal('24h')}>24h</div>
                            <div className="boxs" onClick={()=>  setMainVal('7d')}>7d</div>
                            </div>
                            : null}                         
                        </div>
                        <div className="thirdanvRightSecond" onClick={ClickHandler}>
                            <p>All chains</p>
                            <GrFormDown style={{ color: 'rgb(206, 205, 205)', fontSize: '20px', fontWeight: '700', paddingLeft: '5px' }} />
                            {isclicked ? <div className="thirdanvRightSecondSubMenu">
                                <p>All Chains</p>
                                <p>Arbitrum</p>
                                <p>Avalanche</p>
                                <p>BNB Chain</p>
                                <p>Ethereum</p>
                                <p>klaytn</p>
                                <p>Optimism</p>
                                <p>Polygon</p>
                                <p>Solana</p>
                            </div>
                                : null}
                        </div>
                        <div className="thirdanvRightThird">
                            <p>View all</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Thirdnav