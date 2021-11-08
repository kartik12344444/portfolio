import React, { Component } from 'react'
import webpicasset from './Images/webpicasset.png'



export class navbar extends Component {
  render() {
    return (
      <div>
        <div className='navbar'>
         <ul>
             <li><a class="active" href="#home">Home</a></li>
             <li><a href="#aboutid">About</a></li>
             <li><a href="#portid">Portfolio</a></li>
             <li><a href="#resumeid">Resume</a></li>
             <li><a href="#contactid">Contact</a></li>
             <li className='name'>Kartik Pattar</li>
         </ul>
         </div>
         <div className='navnext'>
             <div className='namebox'>
               <h1 className='kartik'> Hi, I am Kartik Pattar</h1>
               <h1 className='developer1'>A Front-end Developer</h1>
               <p className='developer'>Get ready to turn ideas into reality</p>
               <button ><a  className='hireme' href='#resid'>Hire Me</a></button>
               <button ><a className='hireme' href='#resid'>Resume</a></button>
             </div>
             <div>
               <img className='webpic' src={webpicasset} alt='image'></img>
               </div>
         </div>
      </div>
    )
  }
}

export default navbar
