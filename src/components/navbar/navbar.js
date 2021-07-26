import React from 'react'
import './navbar.css'
import logo from '../../icon/delta.png'
import menu from '../../icon/menu_bar.png'

function Navbar() {
    const resposiveNavbar =()=>{
      let mainNav = document.getElementById("js-menu");
      mainNav.classList.toggle('active');
    }
    return (
        <>
            <nav class="navbar">
              <span  onClick ={resposiveNavbar} class="navbar-toggle" id="js-navbar-toggle" ><img alt="" src={menu}></img> </span>
              <a href="/"><img alt="" src={logo}></img> </a>
              <ul class="main-nav" id="js-menu">
                <li><a class="nav-links"href="/">Home</a></li>
                <li><a class="nav-links" href="/about">Platform</a></li>
                <li><a class="nav-links" href="/faq">Blog</a></li>
                <li><a class="nav-links" href="/contact">About</a></li>
              </ul>
            </nav>
        </>
    )
}

export default Navbar;

