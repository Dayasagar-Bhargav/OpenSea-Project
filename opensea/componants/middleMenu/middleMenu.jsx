import React from 'react'
import { MdVerified } from 'react-icons/md'
import data from './array'


function MiddleMenu() {

  let firstHalf = data.filter((item, index) => index < 5)
  let secondHalf = data.filter((item, index) => index > 4)

  

  return (
    <>
      <div className="middleMenu">
        <div className="MiddleMenuLeft">
          <div className="Title">
            <div>COLLECTION</div>
            <div>FLOOR PRICE</div>
            <div>VOLUME</div>
          </div>

          {/* ------------------------------------------------Dynamic data area---------------------------------------------------- */}
          
          {firstHalf.map((item, index,key) => {
            return ( <div className="Content" key={index}> 
            <div className="CollectionDiv">
              <h3>{item.id}</h3>
              <img src={item.image}/>
              <p>{item.name} </p>
              {item.verified=== true ? <MdVerified style={{ color: "#2081e2", paddingLeft: '5px', fontSize: '25px'}}/> : null}
            </div>
            <div className="FloorPriceDiv">
              <p> {item.floorPrice} </p>
            </div>
            <div className="VolumeDiv">
              <p> {item.volume}</p>
            </div>
          </div>);
          }
          )}
          
        </div>


        {/* ------------------------------------------------left side area sttarted here---------------------------------------------------- */}

        <div className="MiddleMenuRight">
        <div className="Title">
            <div>COLLECTION</div>
            <div>FLOOR PRICE</div>
            <div>VOLUME</div>
          </div>

          {/* ------------------------------------------------Dynamic data area---------------------------------------------------- */}
          
          {secondHalf.map((item, index,key) => {
            return ( <div className="Content" key={index}>
            <div className="CollectionDiv">
              <h3>{item.id}</h3>
              <img src={item.image}/>
              <p>{item.name} </p>
              {item.verified=== true ? <MdVerified style={{ color: "#2081e2", paddingLeft: '5px', fontSize: '20px'}}/> : null}
            </div>
            <div className="FloorPriceDiv">
              <p> {item.floorPrice} </p>
            </div>
            <div className="VolumeDiv">
              <p> {item.volume}</p>
            </div>
          </div>);
          }
          )}
        </div>
      </div>
    </>
  )
}

export default MiddleMenu