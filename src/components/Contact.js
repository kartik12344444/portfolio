import React, { Component } from 'react'
import './Contact.css'
import {AiOutlineMail} from "react-icons/ai" 
import{BsFillTelephoneFill} from "react-icons/bs"
import{ImLocation} from "react-icons/im"  



export class Contact extends Component {
  
  render() {
    return (
      <div>
        <h1  id='contactid'className='headport'>Contact Me <hr/></h1>
        <div className='contact'>
          <div className='contact1'>
            <div className='contact3'>
            <h2 className='connect'>Let's Connect</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at dui eu tortor pellentesque imperdiet. Praesent et augue id urna consequat porta.  Morbi in ex lobortis arcu congue pulvinar nec vitae diam. Nunc accumsan  arcu at scelerisque. Quisque</p>
            <div className='locate'>
              <AiOutlineMail /> <span>karvskartikpattar@gmail.com</span> <br/>
              < BsFillTelephoneFill/> <span>+918197781861</span><br/>
              < ImLocation/> <span>Suravi Sadana Moratgi Vijayapura 586123</span>
            </div>
            </div>

          </div>
          <div className='contact2'>
            <h2 className='connect1'>Send me a message</h2>
            <div className='form'>
              <form>
                <label>First & Last Name <br/></label>
                <input className='inputform' type='text' required="*"></input><br/><br/>
                <label>Phone number <br/></label>
                <input className='inputform' type='number' required="*"></input><br/><br/>
                <label>Email adress <br/></label>
                <input className='inputform' type='email' required="*"></input><br/><br/>
                <label>Message <br/></label>
                <textarea className='inputform1' type='text' placeholder='Your message here'> </textarea><br/>
                <button className='btnform'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact
