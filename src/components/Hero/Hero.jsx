

import styles from "./Hero.module.css"
import { getImageUrl } from '../../utils'
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';


const Hero = () => {

  const [text, setText] = useState("");

  useEffect(() => {
    const textLoad = () => {
      setTimeout(() => {
        setText("React Developer");
      }, 0);
      setTimeout(() => {
        setText("FrontEnd Developer");
      }, 4000);
      setTimeout(() => {
        setText("Web Developer");
      }, 8000);
    };

    textLoad();

    const interval = setInterval(textLoad, 12000);

    // Clean up function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array to run effect only once on mount




  const moveAnimation = keyframes`
    40%, 60% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0%);
    }
`;


const StyledSpan = styled.span`
    position: relative;
  
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color:black;
      border-left: 2px solid white;
        animation: ${moveAnimation} 4s steps(12) infinite;
    }
`;

  return (
    <>
    <section className={styles.container}>
    <div className={styles.content}>
      <h1 className={styles.title}>Hi, I'm <span>AKHIL</span></h1>
      
      <div className={styles.cont}>
      <StyledSpan  className={styles.sectext}>{text}</StyledSpan>
    </div>
      
  
      {/* <a href="mailto:akhilise.rymec@gmail.com" className={styles.contactBtn}>Contact me</a> */}
    </div>
    <img src={getImageUrl("hero/hero.png")} alt="Hero IMage" className={styles.heroImage}/>
    
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>


  </section>
  </>
  )
}

export default Hero