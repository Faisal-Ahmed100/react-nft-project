import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './topbtn.css';

const TopBtn = () => {
    const [topBtn,setTopBtn]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                // console.log('kaj hocse')
                setTopBtn(true)
            }else{
                // console.log('kaj hocse na')
                setTopBtn(false)
            }
        })
    },[])

    const ScrollUp=()=>{
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
  return (
    <>
    {
        topBtn && (
            <div className="topBtn-wrapper">
        <div className="topBtn" onClick={ScrollUp}>
        <i className="fa-solid fa-arrow-up-long"></i>
        </div>
    </div>
        )
    }
    </>
  )
}

export default TopBtn