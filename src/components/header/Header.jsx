import React, { useState } from "react";
import "./header.css";
import { CgMenu, CgClose } from "react-icons/cg";
import Himg from '../../assets/rounded.png';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="main">
            <div className="logo-wapper">
              <h2 className="logo">F.</h2>
            </div>
            <div className="menu-icon">
              <CgMenu />
            </div>
            <nav className="navbar-container">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Roadmap</a>
                </li>
                <li>
                  <a href="/">Showcase</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Faq</a>
                </li>
              </ul>
            </nav>
            <div className="wallet-btn-wapper">
              <button className="wallet-btn">
                <a href="/">Connect Wallet</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* mobile mome  */}

      <div className="mobile-container">
        <h2 className="mobile-logo">F.</h2>
        {menu ? (
          <div className="menu-icon" onClick={handleClick}>
            <CgClose />
          </div>
        ) : (
          <div className="menu-icon" onClick={handleClick}>
            <CgMenu />
          </div>
        )}

        <div className="some">
            <span><i className="fa-solid fa-down-long"></i></span>
            <img src={Himg} alt="/" />
            
           </div>
      </div>
      <ul className={menu ? "mobile-item-wapper2" : "mobile-item-wapper"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Roadmap</a>
        </li>
        <li>
          <a href="/">Showcase</a>
        </li>
        <li>
          <a href="/">Team</a>
        </li>
        <li>
          <a href="/">Faq</a>
        </li>
        <li>
        <div className="wallet-btn-wapper">
              <button className="wallet-btn">
                <a href="/">Connect Wallet</a>
              </button>
            </div> 
        </li>
      </ul>
    </>
  );
};

export default Header;
