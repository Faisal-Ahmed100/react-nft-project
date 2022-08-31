import React, { useState } from "react";
import "./header.css";
import { CgMenu, CgClose } from "react-icons/cg";
import Himg from '../../assets/rounded.png';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [topActive,setTopActive]=useState(false);
  const [desable,setDesable]=useState(false);

  const changeBg=()=>{
    if(window.scrollY >= 100){
      setTopActive(true);
    }else{
      setTopActive(false)
    }
  }
  window.addEventListener('scroll',changeBg)
  const changeBg2=()=>{
    if(window.scrollY >= 100){
      setDesable(true);
    }else{
      setDesable(false)
    }
  }
  window.addEventListener('scroll',changeBg2)

  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className={topActive ? "actives" : "header"}>
        <div className="container">
          <div className="main">
            <div className="logo-wapper">
              <h2 className="logo"> <a href="#">F.</a> </h2>
            </div>
            <div className="menu-icon">
              <CgMenu />
            </div>
            <nav className="navbar-container">
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#roadmap">Roadmap</a>
                </li>
                <li>
                  <a href="#showcase">Showcase</a>
                </li>
                <li>
                  <a href="#team">Team</a>
                </li>
                <li>
                  <a href="#faq">Faq</a>
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
        
        <h2 className="mobile-logo"><a href="#">F.</a></h2>
        {menu ? (
          <div className="menu-icon" >
            <CgClose onClick={handleClick}/>
          </div>
        ) : (
          <div className="menu-icon" >
            <CgMenu onClick={handleClick}/>
          </div>
        )}

        <div className="some">
            <span><i className="fa-solid fa-down-long"></i></span>
            <img src={Himg} alt="/" />
            
           </div>
      </div>
      <ul className={menu ? "mobile-item-wapper2" : "mobile-item-wapper"}>
        <li>
          <a href="#" onClick={()=>setMenu(false)}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={()=>setMenu(false)}>About</a>
        </li>
        <li>
          <a href="#roadmap" onClick={()=>setMenu(false)}>Roadmap</a>
        </li>
        <li>
          <a href="#showcase" onClick={()=>setMenu(false)}>Showcase</a>
        </li>
        <li>
          <a href="#team" onClick={()=>setMenu(false)}>Team</a>
        </li>
        <li>
          <a href="#faq" onClick={()=>setMenu(false)}>Faq</a>
        </li>
        <li>
        <div className="wallet-btn-wapper">
              <button className="wallet-btn">
                <a href="#">Connect Wallet</a>
              </button>
            </div> 
        </li>
      </ul>
    </>
  );
};

export default Header;
