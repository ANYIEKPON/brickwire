import Image from 'next/image';
import React, { useState } from 'react';
import styles from "../styles/completed.module.css";
import { BiBed } from "react-icons/bi";
import { SiSecurityscorecard } from "react-icons/si";
import { GiBathtub } from "react-icons/gi";




function Completed() {

  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
           {/* <div className={styles.featuredHeading}> 
                <span>Discover Our Completed Projects</span>
                <div>These featured listings contain exclusive real estate opportunities within the city</div>
           </div> */}
            <div className={styles.gridFeatured}>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                        <Image src="/images/brick1.jpeg" objectFit='cover' alt=''   width="400" height="250" className={styles.img} />
                        {/* <div className={styles.buyBtn}><p>Buy</p></div> */}
                    </div>
                    <div className={styles.cardDet}>
                        <h3>2 Units of Semi-detached 5 bedroom duplex</h3>
                        <div className={styles.cardDet_1}>
                           <span> Location: &nbsp;</span>Ilasan, Lekki.
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                            <Image src="/images/brick2.jpeg" objectFit='cover' alt=''   width="400" height="250" className={styles.img} />
                            {/* <div className={styles.buyBtn}><p>Buy</p></div> */}
                    </div>
                    <div className={styles.cardDet}>
                        <h3> 3 Units of 5 bedroom Terraces</h3>
                        <div className={styles.cardDet_1}>
                            <span>Location: &nbsp;</span> Ilasan, Lekki
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                            <Image src="/images/brick3.jpeg"  width="400" height="250" alt='' className={styles.img} />
                            {/* <div className={styles.buyBtn}>
                                <p>Buy</p>
                            </div>
                            <div className={styles.buyBtn2}>
                                <p>Sell</p>
                            </div> */}
                    </div>
                    <div className={styles.cardDet}>
                        <h3> 10 Units of 3-Bedroom, 2-bedroom and 1-bedroom Flats</h3>
                        <div className={styles.cardDet_1}>
                           <span> Location: &nbsp;</span>  Haven Apartment, off freedom Way, Lekki Phase 1, Lagos
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Completed;