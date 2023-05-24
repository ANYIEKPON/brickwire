import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./Offering.module.css";
import { MdKitchen, MdOutlineBathroom } from "react-icons/md";
import { IoConstruct, IoLogoDesignernews } from "react-icons/io";
import { GiDominoTiles } from "react-icons/gi";
import { BiBuildingHouse } from "react-icons/bi";

function Offering() {
  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
            <div>What We Offer</div>
            <div className={styles.offer_grid}>
                <div className={styles.offer}>
                    <div className={styles.offer_icon}><IoConstruct /></div>
                    <div className={styles.offer_text}>
                        <span>Construction</span>
                        <div>We are equipped with cutting-edge technology and skilled 
                            manpower to execute all your construction…</div>
                    </div>
                </div>
                <div className={styles.offer}>
                    <div className={styles.offer_icon}><IoConstruct /></div>
                    <div className={styles.offer_text}>
                        <span>Construction</span>
                        <div>We are equipped with cutting-edge technology and skilled 
                            manpower to execute all your construction…</div>
                    </div>
                </div>
                <div className={styles.offer}>
                    <div className={styles.offer_icon}><IoConstruct /></div>
                    <div className={styles.offer_text}>
                        <span>Construction</span>
                        <div>We are equipped with cutting-edge technology and skilled 
                            manpower to execute all your construction…</div>
                    </div>
                </div>
                <div className={styles.offer}>
                    <div className={styles.offer_icon}><IoConstruct /></div>
                    <div className={styles.offer_text}>
                        <span>Construction</span>
                        <div>We are equipped with cutting-edge technology and skilled 
                            manpower to execute all your construction…</div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Offering;