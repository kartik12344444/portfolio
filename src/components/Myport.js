import React, { Component } from 'react'
import './Myport.css'
import clock1 from "../components/Images/clock1.PNG"
import todo1 from "../components/Images/todo1.PNG"
import menu from "../components/Images/menu.PNG"
import sahara from "../components/Images/sahara.PNG"
import playcss from "../components/Images/playcss.PNG"
import react1 from "../components/Images/react1.PNG"


export class Myport extends Component {
  render() {
    return (
      <div>
        <h1  id='portid'className='headport'>My Portfolio <hr/></h1>
        <div className='portfolio'>
           <a href='https://kartik12344444.github.io/DIGITAL-CLOCK/'><img className='portsec' src={clock1} alt='projectimage'></img></a>
           <a href='https://kartik12344444.github.io/CSS-6/'><img className='portsec' src={sahara} alt='projectimage'></img></a>
           <a href='https://kartik12344444.github.io/TO-DO-UI-MOBILE/'><img className='portsec' src={todo1} alt='projectimage'></img></a>
           <a href='https://kartik12344444.github.io/CSS-2/'><img className='portsec' src={menu} alt='projectimage'></img></a>
           <a href='https://kartik12344444.github.io/CSS-5/'><img className='portsec' src={playcss} alt='projectimage'></img></a>
           <a href='https://kartik12344444.github.io/ASSIGN-2/'><img className='portsec' src={react1} alt='projectimage'></img></a>
        </div>
      </div>
    )
  }
}

export default Myport
