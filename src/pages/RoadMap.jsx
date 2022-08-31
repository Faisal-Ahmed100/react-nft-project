import React from 'react';
import './roadMap.css';

const RoadMap = () => {
  return (
    <section className='roadmap' id='roadmap'>
      <div className="container">
        <div className="roadMap-container">
          <div className="title-wapper">
             <h2 className='roadmap-title'>roadmap</h2>
          </div>
          {/* main-body of roadmap */}
         <div className="road-map-body">
          <div className="box-1">
            <div className="animates">
          
                <div className='ani'>
                  <h2>q1</h2>
                  <h3>2022</h3>
                </div>
              
            </div>
            <ul>
              <li>
                <span className='span-1'>Grand Opening</span>
              </li>
              <li>
                <span className='span-2'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.</span>
              </li>
            </ul>
          </div>
          <div className="box-2">
          <div className="animates2">
          
          <div className='ani2'>
            <h2>q2</h2>
            <h3>2021</h3>
          </div>
        
      </div>
          <ul>
              <li>
                <span className='span-1'>Great Benefits</span>
              </li>
              <li>
                <span className='span-2'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.</span>
              </li>
            </ul>
          </div>
          <div className="box-3">
            
          <div className="animates3">
          
          <div className='ani3'>
            <h2>q3</h2>
            <h3>2020</h3>
          </div>
        
      </div>
          <ul>
              <li>
                <span className='span-1'>Early Access</span>
              </li>
              <li>
                <span className='span-2'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.</span>
              </li>
            </ul>
          </div>
          <div className="box-4">
          <div className="animates2">
          
          <div className='ani2'>
            <h2>q4</h2>
            <h3>2019</h3>
          </div>
        
      </div>
          <ul>
              <li>
                <span className='span-1'>New Merch</span>
              </li>
              <li>
                <span className='span-2'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.</span>
              </li>
            </ul>
          </div>
          <div className="box-5">
          <div className="animates3">
          
          <div className='ani3'>
            <h2>q5</h2>
            <h3>2018</h3>
          </div>
        
      </div>
          <ul>
              <li>
                <span className='span-1'>Holders Ranking</span>
              </li>
              <li>
                <span className='span-2'>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.</span>
              </li>
            </ul>
          </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default RoadMap