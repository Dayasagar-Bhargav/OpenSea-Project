import React, { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { MdWallet } from 'react-icons/md'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { MdOutlinePersonOutline } from 'react-icons/md'
import { ImSearch } from 'react-icons/im'
import { FiEye } from 'react-icons/fi'
import { MdGridOn } from 'react-icons/md'
import { BiPencil } from 'react-icons/bi'
import { GiSpeedBoat } from 'react-icons/gi'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { BsQuestionDiamond } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
import { SlGlobe } from 'react-icons/sl'
import { BiMoon } from 'react-icons/bi'
import { GoThreeBars } from 'react-icons/go'
import { RxCross2 } from 'react-icons/rx'
import { MdEventNote } from 'react-icons/md'
import { AiOutlineRight } from 'react-icons/ai'
import { CgLoadbarSound } from 'react-icons/cg'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsDiscord } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsTiktok } from 'react-icons/bs'
import { FaRedditAlien } from 'react-icons/fa'



function Navbar({ theme }) {
  const [open, setOpen] = useState(true)


  return (
    <>
      <div className={theme ? "navbar" : "navbarScroll"}>
        <div className="company_logo_name">
          <div className="openingMenu">
            {open ? <GoThreeBars style={{ fontSize: '30px', color: 'lightgray', marginRight: '10px' }} onClick={() => setOpen(false)} />
              : <RxCross2 style={{ fontSize: '30px', color: 'lightgray', marginRight: '10px' }} onClick={() => setOpen(true)} />}
            {!open ? <div className="openingMenuSubs">
              <div className="openingMenuSubsList">
                <div className="openingMenuSubsItem">
                  <div>
                    <MdEventNote style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                    <p>Drops</p>
                  </div>
                  <AiOutlineRight style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                </div>
                <div className="openingMenuSubsItem">
                  <div>
                    <CgLoadbarSound style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                    <p>Stats</p>
                  </div>
                  <AiOutlineRight style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                </div>
                <div className="openingMenuSubsItem">
                  <div>
                    <MdOutlineLibraryBooks style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                    <p>Resources</p>
                  </div>
                  <AiOutlineRight style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                </div>
                <div className="openingMenuSubsItem">
                  <div>
                    <BiPencil style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                    <p>Create</p>
                  </div>
                  {/* <AiOutlineRight style={{ fontSize: '1.5rem', color: 'gray', marginRight: '10px' }} /> */}
                </div>
                <div className="openingMenuSubsItem">
                  <div>
                    <GiSpeedBoat style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                    <p>OpenSea pro</p>
                  </div>
                  {/* <AiOutlineRight style={{ fontSize: '1.5rem', color: 'gray', marginRight: '10px' }} /> */}
                </div>
                <div className="openingMenuSubsItem">
                  <div>
                    <SlGlobe style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                    <p>Language</p>
                  </div>
                  <AiOutlineRight style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                </div>
                <div className="openingMenuSubsItem">
                  <div>
                    <BiMoon style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                    <p>Night Mode </p>
                  </div>
                  <AiOutlineRight style={{ fontSize: '1.7rem', color: 'gray', marginRight: '10px' }} />
                </div>
                <div className="openingMenuSubsItem">
                  <div className="walletConnectionBtn">
                    Connect Wallet
                  </div>
                </div>
              </div>
              <hr />
              <div className="socialMeida">
                <BsTwitter style={{ fontSize: '1.5rem', color: 'gray', margin: '15px 5px' }} />
                <BsInstagram style={{ fontSize: '1.5rem', color: 'gray', margin: '15px 5px' }} />
                <BsDiscord style={{ fontSize: '1.5rem', color: 'gray', margin: '15px 5px' }} />
                <FaRedditAlien style={{ fontSize: '1.5rem', color: 'gray', margin: '15px 5px' }} />
                <BsYoutube style={{ fontSize: '1.5rem', color: 'gray', margin: '15px 5px' }} />
                <BsTiktok style={{ fontSize: '1.5rem', color: 'gray', margin: '15px 5px' }} />
              </div>
            </div>
              : null}
          </div>

          <div className="brandLogo" style={{
            backgroundImage: `url("https://opensea.io/static/images/logos/opensea.svg")`,
            height: '40px',
            width: '40px',
            backgroundSize: 'cover'
          }}>
          </div>
          <div className="CompanyName" style={{
            fontWeight: '800',
            fontSize: '22px',
            fontFamily: 'popins,sans-serif',
            marginLeft: '10px',
            marginRight: '18px'
          }}>
            <p>OpenSea</p>
          </div>
        </div>
        <div className="navItems">
          <ul>
            <li>Drops
              <div className="dropdowns">
                <p>Calander</p>
                <p>Learn more</p>
              </div>
            </li>
            <li>Stats
              <div className="dropdowns">
                <p>Rankings</p>
                <p>Activity</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="searchBar">
          <label >
            {theme ? <ImSearch className='logo' style={{ fontSize: "20px", color: 'white' }} />
              : <ImSearch className='logo' style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />}
          </label>
          <input type="text" placeholder='Search items, collections, and accounts' />
          <div className="slash">/</div>
        </div>
        <div className="searchBarSmallOuter">
          <div className="searchBarSmall">
            <label >
              {theme ? <ImSearch className='logo' style={{ fontSize: "20px", color: 'white' }} />
                : <ImSearch className='logo' style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />}
            </label>
          </div>
          <div className="cart">
            {theme ? <MdOutlineShoppingCart className='logo' style={{ fontSize: "25px", color: 'white' }} />
              : <MdOutlineShoppingCart style={{ fontSize: "25px", color: 'rgb(53, 56, 64)' }} />}
          </div>
        </div>
        <div className="walletLogin">
          <div className="walletText">
            {theme ? <MdWallet className='logo' style={{ fontSize: "24px", color: 'white' }} />
              : <MdWallet style={{ fontSize: "24px", color: 'rgb(53, 56, 64)' }} />}
            <h5>Connect wallet</h5>
          </div>
          <div className="loginLogo">
            {theme ? <BiUserCircle className='logo' style={{ fontSize: "24px", color: 'white' }} />
              : <BiUserCircle style={{ fontSize: "24px", color: 'rgb(53, 56, 64)' }} />}
            <div className="logoDropdowns">
              <div className='LogoDropdownItems'>
                <MdOutlinePersonOutline style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />
                <p>Profiles</p>
              </div>
              <div className='LogoDropdownItems'>
                <FiEye style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />
                <p>Watchlist</p>
              </div>
              <div className='LogoDropdownItems'>
                <MdGridOn style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />
                <p>My Collection</p>
              </div>
              <div className='LogoDropdownItems'>
                <BiPencil style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />
                <p>Create</p>
              </div>
              <div className='LogoDropdownItems'>
                <GiSpeedBoat style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />
                <p>OpenSea Pro</p>
              </div>
              <div className='LogoDropdownItems'>
                <MdOutlineLibraryBooks style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />
                <p>Learn</p>
              </div>
              <div className='LogoDropdownItems'>
                <BsQuestionDiamond style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />
                <p>Help Center</p>
              </div>
              <div className='LogoDropdownItems'>
                <AiOutlineSetting style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />
                <p>Setting</p>
              </div>
              <div className='LogoDropdownItems'>
                <SlGlobe style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />
                <p>Language</p>
              </div>
              <div className='LogoDropdownItems'>
                <BiMoon style={{ fontSize: "20px", color: 'rgb(53, 56, 64)' }} />
                <p>Night Mode</p>
              </div>
            </div>
          </div>
        </div>
        <div className="cart">
          {theme ? <MdOutlineShoppingCart className='logo' style={{ fontSize: "25px", color: 'white' }} />
            : <MdOutlineShoppingCart style={{ fontSize: "25px", color: 'rgb(53, 56, 64)' }} />}
        </div>
      </div>
    </>
  )
}

export default Navbar