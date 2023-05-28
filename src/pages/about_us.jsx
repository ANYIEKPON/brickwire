import Image from 'next/image';
import React, { useState } from 'react';
import styles from "../styles/about-us.module.css";
import { BiBed } from "react-icons/bi";
import { SiSecurityscorecard } from "react-icons/si";
import { GiBathtub } from "react-icons/gi";




function About() {

  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
          <article>
              <div className={styles.brickwire}>
                  <p><span>Brickwire</span> provides complete a range of construction
                      services. Whether you are building a new facility
                            from scratch or re-modelling, Brickwire can help
                            you every step of the way, and it will be our pleasure
                              to assist you in planning every phase of your
                            next project.
                    </p>
              </div>
              <div className={styles.construct}>
                <div className={styles.brick}>
                  <span>CONSTRUCTION</span>
                    <p> At Brickwire, through efficiency, innovation, best safety practices and high standards, we deliver high quality real estate solutions, that meet and exceed our clients' expectations. 
                          We pride ourselves in delivering quality, sustainable, timely and yet cost-effective projects. 
                          We also strategically carefully source for quality materials to ensure structural integrity and only work with the best, highly skilled and experienced professionals.</p>
                </div>
                <div className={styles.immage}>
                      <Image src="/images/constuct.jpg" objectFit='cover' layout='fill'  className={styles.img} />
                  </div>
              </div>
              
             <div className={styles.model}>
                <div className={styles.brick}>
                    <span>REMODELLING</span>
                    <p>Our team of creative professionals, are well-equipped with the
                      experience and expertise to transform your interior and exterior 
                      spaces from mundane to ultra-modern, to suit our clients' aesthetic 
                      preferences. Let us help you optimize your space. Our solutions are 
                      carefully curated to meet our clients’ specifications, while paying 
                      utmost attention to detail.
                    </p>
                  </div>
                  <div className={styles.immage}>
                      <Image src="/images/modelling.jpg" objectFit='cover' layout='fill'  className={styles.img} />
                  </div>
             </div>
              <div className={styles.manage}>
                  <div className={styles.brick}>
                      <span>FACILITY MANAGEMENT</span>
                      <p>We have an efficient facility management team, which is highly skilled in delivering excellent maintenance services, for both residential and commercial facilities.
                            We are dedicated to meeting your day-to-day and long-term facilities operation needs.
                            Our experience makes us knowledgeable and consistent. Our expertise in coordination of the facilities, people and support services allows us to eliminate costly inefficiencies and save costs for our clients.
                        </p>
                  </div>
                  <div className={styles.immage}>
                      <Image src="/images/property.jpeg" objectFit='cover' layout='fill'  className={styles.img} />
                  </div>
              </div>
          </article>
       </div>
    </div>
  )
}

export default About;