import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./ExploreApartment.module.css";
import { BiBed } from "react-icons/bi";
import { RxRulerSquare } from "react-icons/rx";
import { GiBathtub } from "react-icons/gi";




function ExploreApartment() {


  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
            <div className={styles.featuredHeading}> 
                <h1>Explore Apartment Types</h1>
                <p>Explore all the different types of apartments so you can choose the best option for you </p>
           </div>
            <div className={styles.gridDisplay}>
                <div className={styles.one}><Image src="/images/rent-2.jpg"  width="420" height="200" /></div>
                <div className={styles.two}><Image src="/images/rent-2.jpg"  width="200" height="200"  /></div>
                <div className={styles.three}><Image src="/images/rent-2.jpg"  width="200" height="420"  /></div>
                <div className={styles.four}><Image src="/images/rent-2.jpg"  width="200" height="200" /></div>
                <div className={styles.five}><Image src="/images/rent-2.jpg"  width="420" height="200"  /></div>
            </div>
       </div>
    </div>
  )
}

export default ExploreApartment;