import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100){
                handleShow(true);
            } else handleShow(false);
        });
    }, []);

  return (
    <div className={`nav ${show && "nav_purple"}`}>
        <img
        className="nav_logo"
        src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-violet.png"
        alt="Grapeflix Logo"
        />
        <img
        className="nav_avatar"
        src="https://pro2-bar-s3-cdn-cf.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/11718d2f5e7c6e68da3b4959.png?h=8e44c269a439300baf999c1bb1813560"
        alt="Grapeflix Avatar"
        />
    </div>
  )
}

export default Nav