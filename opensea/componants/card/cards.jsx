import React,{ useEffect } from 'react'
import { MdVerified } from 'react-icons/md'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
import NotableCollectionsArray from './cardsArray'
import { useRouter } from 'next/router'


function Cards() {

    let router = useRouter()

    let imageHandlerNext = () => {
        console.log(typeof window === 'undefined')
        if(!(typeof window === 'undefined')) {
            let box = document.querySelector('.cardsRow')
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft + width;
        }
    }
    let imageHandlerPrev = () => {
        console.log(!(typeof window === 'undefined'))
        if(!(typeof window === 'undefined')) {
            let box = document.querySelector('.cardsRow')
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
        }
    }
    let navigateHandler = () => {
    router.push('./quotes')
    }


    return (
        <>
            <div className="cards">
                <div className="CardsTitle">
                    <h2>Notable Collections</h2>
                </div>
                <div className="cardRowOuter">
                    <div className="cardsRowNext" onClick={imageHandlerNext} ><GrNext style={{ fontSize: '25px' }} /></div>
                    <div className="cardsRowPrev" onClick={imageHandlerPrev} ><GrPrevious style={{ fontSize: '25px' }} /></div>
                    <div className="cardsRow">
                        {NotableCollectionsArray.map((item, index ,key) => {
                            return (
                                <div className="productCard" key={index} onClick={navigateHandler}>
                                    <img src={item.image} />
                                    <div className="productDetails">
                                        <div className="productName">
                                            <h5>{item.name}</h5>
                                            <MdVerified style={{ color: "#2081e2", paddingLeft: '5px', fontSize: '20px' }} />
                                        </div>
                                        <div className="productDetailsBottom">
                                            <div className="productDetailsBottomFloor">
                                                <p>FLOOR</p>
                                                <h5>{item.floor}</h5>
                                            </div>
                                            <div className="productDetailsBottomTotal">
                                                <p>TOTAL VOLUME</p>
                                                <h5>{item.volume}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards