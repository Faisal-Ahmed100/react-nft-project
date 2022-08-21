import React from "react";
import "./team.css";
import Img11 from "../assets/Nfts/bighead-11.svg";
import Img2 from "../assets/Nfts/bighead-2.svg";
import Img3 from "../assets/Nfts/bighead-3.svg";
import Img4 from "../assets/Nfts/bighead-4.svg";
import Img5 from "../assets/Nfts/bighead-5.svg";
import Img6 from "../assets/Nfts/bighead-6.svg";
import Img7 from "../assets/Nfts/bighead-7.svg";
import Img8 from "../assets/Nfts/bighead-8.svg";
import Img9 from "../assets/Nfts/bighead-9.svg";
import ConfettiComponent from "../components/confetti/Confetti";

const NftItem = ({ Img, text, subText }) => {
  return (
    <>
      <div className="showcase-card3">
        <div className="img-frist3">
          <img src={Img} alt="showcase-img" />
        </div>
        <div className="card-wapper3">
          <div className="sub-card-wapper3">
            <h3>{text}</h3>
            <h4>{subText}</h4>
          </div>
        </div>
      </div>
    </>
  );
};
const Team = () => {
  return (
    <section className="team">
      <ConfettiComponent />
      <div className="container">
        <div className="title-wapper">
          <h2 className="roadmap-title">team</h2>
        </div>

        <div className="showcase-container-team">

          <div className="second-aria-team">
          <NftItem Img={Img11} text="SKYBLAZE" subText="Founder" />
            <NftItem
              Img={Img2}
              text="MEGNUM"
              subText="Co-Founder"
            />
            <NftItem Img={Img3} text="MONKEY KING" subText="Director" />
            <NftItem text="BLACK PANTHER" subText="Manager" Img={Img4} />
            <NftItem text="DEATHSTROKE" subText="Artist" Img={Img5} />
            <NftItem
              text="LAZY KONG"
              subText="Social Media Manager"
              Img={Img6}
            />

            <NftItem text="BLACK PANTHER" subText="Manager" Img={Img7} />
            <NftItem text="DEATHSTROKE" subText="Artist" Img={Img8} />
            <NftItem
              text="LAZY KONG"
              subText="Social Media Manager"
              Img={Img9}
            />

          </div>
  
        </div>
      </div>
    </section>
  );
};

export default Team;
