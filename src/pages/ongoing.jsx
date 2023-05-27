import Image from 'next/image';
import React, { useState } from 'react';
import styles from "../styles/ongoing.module.css";
import { BiBed } from "react-icons/bi";
import { SiSecurityscorecard } from "react-icons/si";
import { GiBathtub } from "react-icons/gi";




function Featured() {

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
                        <Image src="/images/ilasan.jpg" objectFit='cover'   width="400" height="250" className={styles.img} />
                        <div className={styles.buyBtn}><p>Buy</p></div>
                    </div>
                    <div className={styles.cardDet}>
                        <h2>HAVEN 3</h2>
                        <h3>13 Units of 2 Bedroom Flats</h3>
                        <div className={styles.cardDet_1}>
                           <span> Location: &nbsp;</span>Ilasan, Lekki.
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                            <Image src="/images/A.jpg" objectFit='cover'   width="400" height="250" className={styles.img} />
                            <div className={styles.buyBtn}><p>Buy</p></div>
                    </div>
                    <div className={styles.cardDet}>
                        <h2>HAVEN 2</h2>
                        <h3> 13 Units of 2 Bedroom Flats </h3>
                        <div className={styles.cardDet_1}>
                            <span>Location: &nbsp;</span> Ologolo, Lekki
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                            <Image src="/images/wavelight.jpg" objectFit='cover'   width="400" height="250" className={styles.img} />
                            <div className={styles.buyBtn}><p>Buy</p></div>
                    </div>
                    <div className={styles.cardDet}>
                        <h2>WAVELIGHT APARTMENTS</h2>
                        <h3> 16 Units of 2 Bedroom and 2 Units of 3 Bedroom Flats </h3>
                        <div className={styles.cardDet_1}>
                            <span>Location: &nbsp;</span> Ologolo, Lekki
                        </div>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.card_img}>
                            <Image src="/images/SEAGATE_1.jpg"  width="400" height="250" className={styles.img} />
                            {/* <div className={styles.buyBtn}>
                                <p>Buy</p>
                            </div> */}
                            {/* <div className={styles.buyBtn2}>
                                <p>Sell</p>
                            </div> */}
                    </div>
                    <div className={styles.cardDet}>
                        <h2>VERONICA COURT</h2>
                        <h3> 13 Units of 2-Bedroom Flats</h3>
                        <div className={styles.cardDet_1}>
                           <span> Location: &nbsp;</span>  SEAGATE ESTATE, Lekki, Lagos
                        </div>
                    </div>
                </div>
                <p>Flexible payment options available , contact us.</p>
            </div>
       </div>
    </div>
  )
}

export default Featured;