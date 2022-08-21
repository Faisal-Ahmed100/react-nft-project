import React from 'react';
import './footer.css';
import Img11 from "../assets/Nfts/bighead-11.svg";
import Img2 from "../assets/Nfts/bighead-2.svg";
import Img3 from "../assets/Nfts/bighead-3.svg";
import Img4 from "../assets/Nfts/bighead-4.svg";
import Img5 from "../assets/Nfts/bighead-5.svg";
import Img6 from "../assets/Nfts/bighead-6.svg";

const Footer = () => {
  return (
    <footer className='footer'>
        
            <div className="footer-container">
                <div className="footer-first-aria">
                  <div className="sub-footer-wapper">
                  <h2 className='footer-text'>Join The
Weirdos Club</h2>
<div className="footer-btn-wapper">
  <button className='footer-btn'>
    <a href="/">Join Now</a>
  </button>
</div>
                  </div>
                </div>
                <div className="footer-second-aria">
                    <img src={Img11} alt="/" />
                    <img src={Img2} alt="/" />
                    <img src={Img3} alt="/" />
                    <img src={Img4} alt="/" />
                    <img src={Img5} alt="/" />
                    <img src={Img6} alt="/" />
                </div>
            </div>

            <div className="footer-last-aria">
                <div className="container">
                    <div className="footer-last-container">
                        <div className="footer-last-box">
                        <div className="logo-wapper">
              <h2 className="logo">F.</h2>
            </div> 
            <div className="footer-last-icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
            </div>
                        </div>
                        <div className="footer-last-box">
                        
            <div className="footer-last-item">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Roadmap</a>
                    </li>
                    <li>
                        <a href="/">Team</a>
                    </li>
                </ul>
            </div>
                        </div>
                        <div className="footer-last-box">
                         
            <div className="footer-last-item">
            <ul>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Showcase</a>
                    </li>
                    <li>
                        <a href="/">Faq</a>
                    </li>
                </ul>
            </div>
                        </div>
                    </div>

                    <div className="footer-reserved-wrapper">
                        <div className="reserved">© 2022 Faisal. All rights reserved.</div>
                        <div className="brand">
                        Made with ❤ by <a href="/" title='Faisal'>coderBoy</a> 
                        </div>
                    </div>
                </div>
            </div>
        
    </footer>
  )
}

export default Footer