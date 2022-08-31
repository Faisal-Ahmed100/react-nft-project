import React from "react";
import "./showcase.css";
import Img1 from "../assets/Nfts/bighead-1.svg";
import Img2 from "../assets/Nfts/bighead-2.svg";
import Img3 from "../assets/Nfts/bighead-3.svg";
import Img4 from "../assets/Nfts/bighead-4.svg";
import Img5 from "../assets/Nfts/bighead-5.svg";
import Img6 from "../assets/Nfts/bighead-6.svg";
import Img7 from "../assets/Nfts/bighead-7.svg";
import Img8 from "../assets/Nfts/bighead-8.svg";
import Img9 from "../assets/Nfts/bighead-9.svg";
import Img10 from "../assets/Nfts/bighead-10.svg";
import Img11 from "../assets/Ethereum.svg";
import { useRef } from "react";

const NftItem = ({ Img, Number, price,passRef}) => {

  let Play=(e)=>{
    passRef.current.style.animationPlayState='running';
  }

  let Pause=(e)=>{
    passRef.current.style.animationPlayState='paused';
  }

  return (
    <>
      <div className="showcase-card" onMouseOver={(e) =>Pause(e)} onMouseOut={(e) =>Play(e)}>
        <div className="img-frist">
          <img src={Img} alt="showcase-img" />
        </div>
        <div className="card-wapper">
          <div className="sub-card-wapper">
            <h3>Weirdos</h3>
            <h4>#{Number}</h4>
          </div>
          <div className="sub-card-wapper2">
            <h3>Price</h3>
            <h4>
              <img src={Img11} alt="ethereum-logo" /> {price}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};
const Showcase = () => {

  const rowRef1=useRef(null);
  const rowRef2=useRef(null);
  return (
    <section className="showcase" id="showcase">
      <div className="showcase-container">
        <div className="frist-aria" ref={rowRef1}>
          <NftItem Img={Img1} Number={888} price={1.2} passRef={rowRef1}/>
          <NftItem Img={Img2} Number={888} price={1.2} passRef={rowRef1}/>
          <NftItem Img={Img3} Number={888} price={1.2} passRef={rowRef1}/>
          <NftItem Img={Img4} Number={888} price={1.2} passRef={rowRef1}/>
          <NftItem Img={Img5} Number={888} price={1.2} passRef={rowRef1}/>

        
        </div>

        {/* bots */}
        <div className="second-aria" ref={rowRef2}>
          <NftItem Img={Img6} Number={888} price={1.2} passRef={rowRef2}/>
          <NftItem Img={Img7} Number={888} price={1.2} passRef={rowRef2}/>
          <NftItem Img={Img8} Number={888} price={1.2} passRef={rowRef2}/>
          <NftItem Img={Img9} Number={888} price={1.2} passRef={rowRef2}/>
          <NftItem Img={Img10} Number={888} price={1.2} passRef={rowRef2}/>

        </div>
      </div>
    </section>
  );
};

export default Showcase;
