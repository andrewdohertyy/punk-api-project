import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <h3 className='footer__text'>SIGN UP TO OUR NEWSLETTER FOR THE LATEST BEER, NEWS, EVENTS AND MORE</h3>
      <input className='footer__input' type="text" placeholder='Enter your email address...' />
      <button className='footer__button'>Sign Up</button>
    </div>
  )
}

export default Footer