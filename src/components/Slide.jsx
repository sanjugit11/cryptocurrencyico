import React from 'react'
import logo from '../static/images/ico.jpg'

const Slide = () => {
  return (
    <section className='l-slide'>
      <img className='slide' src={logo} alt='background System' />
      <div className='idea'>
        <h1 style={{textAlign:"center",color:"red"}}>Welcome to CAPSTONE</h1>
        <hr style={{color:"red",width:"300px",textAlign:"center"}}/>
        <br/>
    <p>  CAPS token is the official cryptocurrency of Capstone Markets Brokerage.</p>
    <br/>
    <p>Capstone Markets provides a full range of services including and not limited to Trading Financial Markets, Financial Education, Trading Alerts, AI software and Algo Trading Robots, payable using CAPS token.</p>
    <br/>
    <p>It is also the first ever token that gives you the opportunity to be a shareholder of the company through the current Pre-sales PROMOTIONAL PACKAGE.</p>
    <br/>
    <p>Don't just buy tokens. Own the company too!</p>
      </div>
    </section>
  )
}

export default Slide
