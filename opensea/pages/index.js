import React from 'react'
import Navbar from '../componants/navbar/navbar.jsx'
import Secondnav from '@/componants/navbar2/secondnav.jsx'
import Banner from '@/componants/banner/banner.jsx'
import Thirdnav from '@/componants/navbar3/thirdnav.jsx'
import MiddleMenu from '@/componants/middleMenu/middleMenu.jsx'
import Cards from '@/componants/card/cards.jsx'
import { useState,useEffect } from 'react'


function Index() {
  const [theme, setTheme] = useState(true)
  const changeTheme = () => {
    if (window.scrollY > 0) {
      setTheme(false)
    } else {
      setTheme(true)
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', changeTheme)
  }, [])

  return (
    <>
      <div className="index">

        <div className="body">
          <div className="bodyFade">
          </div>
        </div>
        < Navbar theme={theme} />
        < Secondnav />
        < Banner />
        < Thirdnav />
        < MiddleMenu />
        < Cards />
        < Cards />
        < Cards />
        < Cards />
        < Cards />
        < Cards />
      </div>
    </>
  )
}

export default Index