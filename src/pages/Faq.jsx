import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useState } from 'react'
import { useRef } from 'react';
import './faq.css';

const Faq = () => {
  const [click,setClick]=useState(false);
  const [click2,setClick2]=useState(false);
  const [click3,setClick3]=useState(false);
  const [click4,setClick4]=useState(false);
  const [click5,setClick5]=useState(false);
  const [click6,setClick6]=useState(false);



  const handleClick=()=>{
    setClick(!click);
  }
  const handleClick2=()=>{
    setClick2(!click2);
  }
  const handleClick3=()=>{
    setClick3(!click3);
  }
  const handleClick4=()=>{
    setClick4(!click4);
  }
  const handleClick5=()=>{
    setClick5(!click5);
  }
  const handleClick6=()=>{
    setClick6(!click6);
  }

  const ref=useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(()=>{
    let element=ref.current;
    ScrollTrigger.create({
      trigger:element,
      start:'top top',
      end:'bottom top',
      pin:true,
      pinSpacing:false,
      scrub:true
    })
return()=>{

}
  },[])
  return (
    <section className='faq' ref={ref}>
        <div className="container">
        <div className="title-wapper-faq">
          <h2 className="title-faq">FAQ</h2>
        </div>

       <div className="main-container-faq">
       <div className="faq-container">
            <div className="faq-box">
              <div className="faq-title-icon-wapper">
              <div className="sub-box">
              <h2 className="faq-title">WHERE CAN I VIEW MY NFTS?</h2>
              {
                click ? <i className="fa-solid fa-minus" onClick={handleClick}></i> :<i className="fa-solid fa-plus" onClick={handleClick}></i>
              }
              
              </div>
              <p className={click ? 'faq-pera2': 'faq-pera'}>Once minted or bought simply connect to your OpenSea account to view your NFTs.</p>
              
              </div>
                
            </div>
            <div className="faq-box">
              <div className="faq-title-icon-wapper">
              <div className="sub-box">
              <h2 className="faq-title">HOW CAN I USE MY NFT?</h2>
              {
                click2 ? <i className="fa-solid fa-minus" onClick={handleClick2}></i> :<i className="fa-solid fa-plus" onClick={handleClick2}></i>
              }
              </div>

              
              <p className={click2 ? 'faq-pera2': 'faq-pera'}>You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs.</p>
              </div>
                
            </div>
            <div className="faq-box">
              <div className="faq-title-icon-wapper">
              <div className="sub-box">
              <h2 className="faq-title">WHAT IS THE METAVERSE?</h2>
              {
                click3 ? <i className="fa-solid fa-minus" onClick={handleClick3}></i> :<i className="fa-solid fa-plus" onClick={handleClick3}></i>
              }
              </div>

              
              <p className={click3 ? 'faq-pera2': 'faq-pera'}>A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.</p>
              </div>
                
            </div>
            <div className="faq-box">
              <div className="faq-title-icon-wapper">
              <div className="sub-box">
              <h2 className="faq-title">WHAT ARE THE WEIRDOS?</h2>
              {
                click4 ? <i className="fa-solid fa-minus" onClick={handleClick4}></i> :<i className="fa-solid fa-plus" onClick={handleClick4}></i>
              }
              </div>

              <p className={click4 ? 'faq-pera2': 'faq-pera'}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in.</p>
              </div>
                
            </div>
            <div className="faq-box">
              <div className="faq-title-icon-wapper">
              <div className="sub-box">
              <h2 className="faq-title">WHY DO WE NEED ROYALTIES?</h2>
              {
                click5 ? <i className="fa-solid fa-minus" onClick={handleClick5}></i> :<i className="fa-solid fa-plus" onClick={handleClick5}></i>
              }
              </div>

              <p className={click5 ? 'faq-pera2': 'faq-pera'}>The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests.</p>
              </div>
                
            </div>
            <div className="faq-box">
              <div className="faq-title-icon-wapper">
              <div className="sub-box">
              <h2 className="faq-title">WHAT IS THE FUSION PROCESS?</h2>
              {
                click6 ? <i className="fa-solid fa-minus" onClick={handleClick6}></i> :<i className="fa-solid fa-plus" onClick={handleClick6}></i>
              }
              </div>

              <p className={click6 ? 'faq-pera2': 'faq-pera'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia.</p>
              </div>
                
            </div>
        </div>
       </div>

        </div>
    </section>
  )
}

export default Faq