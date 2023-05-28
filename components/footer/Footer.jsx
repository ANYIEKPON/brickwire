import Image from 'next/image';
import React from 'react';
import styles from "./Footer.module.css";
import { TiSocialFacebook } from 'react-icons/ti';
import { SiInstagram } from 'react-icons/si';
import { RxTwitterLogo } from 'react-icons/rx';
import { FaPinterestP } from 'react-icons/fa';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import Link from 'next/link';



function Footer() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.footer}>
                <div className={styles.about}>
                  <span>About Us</span>
                  {/* <div className={styles.botomBod}></div> */}
                  <p>Brickwire provides complete a range of construction <br /> services. 
                     Whether you are building a new facility <br /> from scratch or 
                     re-modelling, Brickwire can help <br /> you every step of the way, 
                     and it will be our pleasure <br /> to assist you in planning every 
                     phase of your <br /> next project. <div><Link href="/about_us" style={{color:"inherit", textDecoration: "none"}}>Read More</Link></div></p>
                  
                </div>
                <div className={styles.company_links}>
                  <span>Company Links</span>
                  {/* <div className={styles.botomBod}></div> */}
                  <div className={styles.links}>
                    <div><MdKeyboardDoubleArrowRight color='rgb(247, 110, 110)' /> &ensp; Services</div>
                    <div><MdKeyboardDoubleArrowRight color='rgb(247, 110, 110)' /> &ensp; Privacy</div>
                    <div><MdKeyboardDoubleArrowRight color='rgb(247, 110, 110)' /> &ensp; FAQ</div>
                    <div><MdKeyboardDoubleArrowRight color='rgb(247, 110, 110)' /> &ensp; News & Events</div>
                    <div><MdKeyboardDoubleArrowRight color='rgb(247, 110, 110)' /> &ensp; Terms of Service</div>
                  </div>
                </div>
                <div className={styles.contact_info}>
                  <span>Contact Info</span>
                  {/* <div className={styles.botomBod}></div> */}
                   <div className={styles.contact_Infos}><span>Address: &ensp;</span> Lagos, Nigeria</div>
                   <div className={styles.contact_Infos}><span>Phone:  &ensp;</span>   +234 809 909 8989</div>
                   <div className={styles.contact_Infos}><span>E-mail:  &ensp;</span>  info@brickwireconstruction.com</div>
                </div>
            </div>
            <div className={styles.topFooter}>
                <div className={styles.icons}>
                      <div><TiSocialFacebook /></div>
                      <div><SiInstagram /></div>
                      <div><RxTwitterLogo /></div>
                      <div><FaPinterestP /></div>
                      <div><TiSocialFacebook /></div>
                </div>
            </div>
            <div className={styles.right}><span>&copy;</span> All Rights Reserved <span>BRICKWIRE CONSTRUCTION</span></div>
        </div>
    </div>
  )
}

export default Footer;