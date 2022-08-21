import React from 'react';
import './main.css';
import MainVideo from '../../assets/main-video.mp4';
import Typewriter from 'typewriter-effect';
import Himg from '../../assets/rounded.png';


const Main = () => {
  return (
    <>
    <div className="some2 ">
            <span><i className="fa-solid fa-down-long"></i></span>
            <img src={Himg} alt="/" />
            
           </div>
    <div className='main-section'>
        <div className="container">
            <div className="main-container">
                <div className="main-left-side">
                    <h2>Discover A New Era Of Cool</h2>
                    <div className="typer">
                        <Typewriter
                        options={{
                            autoStart:true,
                            loop:true
                        }}
  onInit={(typewriter) => {
    typewriter.typeString(`<span class="text-1">NFTS.</span>`)
      .pauseFor(2000)
      .deleteAll()
      .typeString(`<span class="text-2">COLLECTIBLE ITEMS.</span>`)
      .pauseFor(2000)
      .deleteAll()
      .typeString(`<span class="text-3">APE KILLERS!</span>`)
      .pauseFor(2000)
      .deleteAll()
      .start();
  }}
/>
                    </div>
                    <h3>Bored Of Apes? Try Something New.</h3>
                    <div className="main-btn-wapper">
                        <button className='main-btn'>
                            <a href="/">
                            Explore
                            </a>
                        </button>
                    </div>
                </div>
                <div className="main-right-side">
                    <video autoPlay loop muted typeof='video/mp4' src={MainVideo}></video>
                </div>
            </div>
        </div>

        
    </div>



    {/* another */}

    <div className='main-section2'>
        <div className="container">
            <div className="main-container2">

                <div className="main-right-side2">
                    <video autoPlay loop muted typeof='video/mp4' src={MainVideo}></video>
                </div>
                <div className="main-left-side2">
                    <h2>Discover A New Era Of Cool</h2>
                    <div className="typer2">
                        <Typewriter
                        options={{
                            autoStart:true,
                            loop:true
                        }}
  onInit={(typewriter) => {
    typewriter.typeString(`<span class="text-12">NFTS.</span>`)
      .pauseFor(2000)
      .deleteAll()
      .typeString(`<span class="text-22">COLLECTIBLE ITEMS.</span>`)
      .pauseFor(2000)
      .deleteAll()
      .typeString(`<span class="text-32">APE KILLERS!</span>`)
      .pauseFor(2000)
      .deleteAll()
      .start();
  }}
/>
                    </div>
                    <h3>Bored Of Apes? Try Something New.</h3>
                    <div className="main-btn-wapper2">
                        <button className='main-btn2'>
                            <a href="/">
                            Explore
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Main