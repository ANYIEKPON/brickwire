import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./Partners.module.css";
import { BsHouse } from "react-icons/bs";
import { SiSecurityscorecard } from "react-icons/si";
import { GiBathtub } from "react-icons/gi";




function Partners() {

  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
           <span>Our Partners</span>
           <div>
                <div></div>
           </div>
       </div>
    </div>
  )
}

export default Partners;