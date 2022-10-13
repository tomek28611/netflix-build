// import React from 'react';
import React, { useEffect, useState } from "react";
import "./Nav.css";


function  Nav() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

useEffect(() => {
window.addEventListener("scroll", transitionNavBar);
return () => window.removeEventListener('scroll', transitionNavBar);
}, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
    <div className="nav__contents">
        <img className="nav__logo" src="https://www.whatphone.net/wp-content/uploads/2019/05/Netflix-Logo.png"
        alt="" />
        <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        />
    
    </div>
    </div>
  );
}

export default  Nav