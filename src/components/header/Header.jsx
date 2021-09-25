import React from 'react'
import Logo from '../../img/logo.png'
import './Header.css'



export default function Header() {

   return (
      <>
         <div className="caixaLogo">
            <div className="logo">
               <img src={Logo} alt="logo do site"></img>
               <h1> Panace IA</h1>
            </div>
         </div>
      </>
   )
}