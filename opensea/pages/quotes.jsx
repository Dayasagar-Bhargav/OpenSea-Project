import React from 'react'
import { useEffect, useState } from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'
import { RiDoubleQuotesR } from 'react-icons/ri'
import axios from 'axios'

function Quotes() {

  const [quote, setQuote] = useState([])


  function nextQuote() {
    let random = Math.floor(Math.random() * 1000)
    axios.get('https://type.fit/api/quotes')
      .then(res => {
        setQuote(res.data[random])
      })
      .catch(err => {
        console.log(err)
      })
  }
  useEffect(() => {
    nextQuote()
  }, [])

  return (
    <>
      <div className="quotes">
        <div className="quoteDisplay">
          <RiDoubleQuotesL style={{
            fontSize: '50px',
            color: 'rgba(155, 86, 86, 0.7)',
          }} />
          <h3>{quote.text}</h3>
          <RiDoubleQuotesR className='quoteLogo' style={{
            fontSize: '50px',
            color: 'rgba(155, 86, 86, 0.7)',
            alignSelf: 'flex-end',
          }} />
          <p>BY :- {quote.author === null ? 'unknown' : quote.author}</p>
          <div className="QuoteNextBtn" onClick={nextQuote}>
            next
          </div>
        </div>
      </div>
    </>
  )
}

export default Quotes