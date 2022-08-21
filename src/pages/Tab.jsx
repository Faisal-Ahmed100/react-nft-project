import React, { useState } from "react";
import "./tab.css";

const Tab = () => {
  const [toggle, setToggle] = useState(1);

  const clickToggle = (index) => {
    setToggle(index);
    console.log(index);
  };
  return (
    <div className="tab">
      <div className="container">
        <div className="tabwapper">
          <div className="tab-center">
            <div className="tab-btn">
              <button
                className={toggle === 1 ? "btn-1 active-tabs" : "btn-1"}
                onClick={() => clickToggle(1)}
              >
                Tab-1
              </button>
              <button className={toggle === 2 ? "btn-1 active-tabs" : "btn-1"} onClick={() => clickToggle(2)}>
                Tab-2
              </button>
              <button className={toggle === 3 ? "btn-1 active-tabs" : "btn-1"} onClick={() => clickToggle(3)}>
                Tab-3
              </button>
            </div>
            <div>
            <div className={toggle === 1 ? "tab-contant-1 active-contant" : "tab-contant-1"}>
              <h3>TAb-1</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, voluptatum. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Labore, sint!
              </p>
            </div>
            <div className={toggle === 2 ? "tab-contant-1 active-contant" : "tab-contant-1"}>
              <h3>TAb-2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, voluptatum. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Labore, sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, voluptatum. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Labore, sint!
              </p>
            </div>
            <div className={toggle === 3 ? "tab-contant-1 active-contant" : "tab-contant-1"}>
              <h3>TAb-3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, voluptatum. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Labore, sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, voluptatum. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Labore, sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita, voluptatum. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Labore, sint!
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tab;
