import React from 'react';
import Carosel from '../components/carosel/Carosel';
import './about.css';

function About() {
  return (
    <>
    
<section className='about-aria' id='about'>
<div className="container">
  <div className="about-wapper">
  
    <div className="main-carosel">
      <Carosel />
    </div>
    
    <div className="main-about-right-side">
      <h2>Welcome To The
Weirdos Club.</h2>
<h3>The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.</h3>
<p>With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.</p>
<div className="about-btn-wapper">
  <button className='about-btn'>
    <a href="/">JOIN OUR DISCORD</a>
  </button>
</div>
    </div>
  </div>
</div>
</section>
    </>
  )
}

export default About