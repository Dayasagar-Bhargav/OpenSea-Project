import React from 'react'
import { useState } from 'react'
import { GrNext } from 'react-icons/gr'
import { GrPrevious } from 'react-icons/gr'
import { MdVerified } from 'react-icons/md'
import { BsDot } from 'react-icons/bs'

function Banner() {
    const [current, setCurrent] = useState(0)
    const images = [{
        banner: 'https://image.mux.com/7mSs02GNRne74urar1P02AfI102sMlz0197pN9802K02puLk8/thumbnail.jpg?time=0',
        logo: 'https://i.seadn.io/s/primary-drops/0xbe9371326f91345777b04394448c23e2bfeaa826/24545572:hero:partner_logo_url:58ca3a5a-096a-4cc8-91ba-249947bea21e.png?auto=format&w=1920',
        companyName: 'Gemesis',
        companyAuthor: 'OpenSeaPro',
        companyQuantity: '180,000 ',
        companyETH: '0 ',
    },
    {
        banner: 'https://image.mux.com/sEE6SRsTuJw2g02rX3yHFbC4OQdpmReGmgKj02l9Lf402E/thumbnail.jpg?time=0',
        logo: 'https://i.seadn.io/s/primary-drops/0x4de34255fd0d9e09d1df56de5d148c8d33e186f3/24556165:hero:partner_logo_url:a3f08616-6050-497b-9cd4-807aa8d3861a.jpeg?auto=format&w=1920',
        companyName: 'Buscando America',
        companyAuthor: 'BuscandoAmerica',
        companyQuantity: '2,500 ',
        companyETH: '0.045 ',
    }]

    let imageHandlerNext = () => {
        if (current === images.length - 1) {
            setCurrent(0)
        } else {
            setCurrent(current + 1)
        }
    }
    let imageHandlerPrev = () => {

        if (current === 0) {
            setCurrent(images.length - 1)
        } else {
            setCurrent(current - 1)
        }
    }
    // setInterval(imageHandlerNext, 5000)


    return (
        <>
            <div className="bannerContainer">
                <div className="bannerBox">
                    <img src={images[current].banner} alt="sorry image is not uploaded" />
                    <div className="next" onClick={imageHandlerNext} ><GrNext style={{ fontSize: '25px' }} /></div>
                    <div className="prev" onClick={imageHandlerPrev} ><GrPrevious style={{ fontSize: '25px' }} /></div>
                    <div className="bannerBoxInsideContentLeft">
                        <div className="bannerBoxLogo">
                            <img src={images[current].logo} alt="" />
                        </div>
                        <div className="bannerBoxDiscrptionArea">
                            <div className="bannerBoxDiscrptionAreaTitle">
                                <h2>{images[current].companyName}  </h2>
                                <MdVerified style={{ color: 'white' , marginLeft:"5px"}} />

                            </div>
                            <div className="bannerBoxDiscrptionAreaAuthor">
                                <p>By {images[current].companyAuthor}  </p>
                                <MdVerified style={{ color: 'white' , marginLeft:"5px"}} />
                            </div>
                            <div className="bannerBoxDiscrptionAreaQuantity">
                                <p>{images[current].companyQuantity}  items</p>
                                    <BsDot style={{ color: 'white'}} />
                                <p>{images[current].companyETH} ETH</p>
                            </div>
                            <div className="bannerBoxDiscrptionAreaButton">
                                <div className="online"></div>
                                <p>MINTING NOW</p>
                            </div>
                        </div>
                        <div className="bannerboxButtons"></div>
                    </div>
                    <div className="bannerBoxInsideContentRight">
                        <p>View Drop</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner