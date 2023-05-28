import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import { MdOutlineAddHome } from "react-icons/md";
import { BsRepeat, BsHeart } from "react-icons/bs";
import { RiContactsLine } from "react-icons/ri";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";


function Navbar() {
const [openNav, setOpenNav] = useState(false);
const [closeNav, setCloseNav] = useState(true);

const openNavBtn = () => {
    setOpenNav(current => !current);
}

const closeNavBtn = () => {
    setOpenNav(false);
}




  return (
    <div className={styles.container} >
      <div className={styles.close} onClick={openNavBtn}>{openNav && <GrClose />}</div>
            <div className={styles.navLogo}>
                <div className={openNav ? styles.rightMenuNo : styles.logo}>
                    <div><Image src="/images/ple.jpg" className={styles.logoimg}  width="50" height="35"/></div>
                    <div className={styles.logotext}>
                      <div className={styles.brick}>Brick<span>Wire</span></div>
                      <div className={styles.cons}>CONSTRUCTION COMPANY</div>
                    </div>
                </div>
                <div className={openNav ? styles.showMenu : styles.menuDiv} >
                  <div className={ styles.logos}>
                      <div><Image src="/images/ple.jpg" className={styles.logoimg}  width="50" height="35"/></div>
                      <div className={styles.logotext}>
                        <div className={styles.brick}>Brick<span>Wire</span></div>
                        <div className={styles.cons}>CONSTRUCTION COMPANY</div>
                      </div>
                  </div>
                      <ul className={ openNav ? styles.showM : styles.menuList}>
                        <Link onClick={closeNavBtn} href="/" style={{color:"inherit", textDecoration: "none"}}><li >Home<div></div></li></Link>
                        <Link onClick={closeNavBtn} href="/about_us" style={{color:"inherit", textDecoration: "none"}}><li >About Us</li></Link>
                        <Link onClick={closeNavBtn} href="/completed" style={{color:"inherit", textDecoration: "none"}}><li >Completed</li></Link>
                        <Link onClick={closeNavBtn} href="/ongoing" style={{color:"inherit", textDecoration: "none"}}><li >Ongoing</li></Link>
                      </ul>
                      <div className={styles.display}>
                          <div className={styles.listing}>
                            <MdOutlineAddHome />
                            <span>ADD  LISTING</span>
                          </div>
                          <div className={styles.repeat}><BsRepeat /></div>
                          <div className={styles.heart}><BsHeart /></div>
                          <div className={styles.profile}><RiContactsLine /></div>
                      </div>
                </div>
            </div>
            <div className={openNav ? styles.rightMenuNo : styles.rightMenu}>
                <div className={styles.listing}>
                  <MdOutlineAddHome />
                  <span>ADD  LISTING</span>
                </div>
                <div className={styles.repeat}><BsRepeat /></div>
                <div className={styles.heart}><BsHeart /></div>
                <div className={styles.profile}><RiContactsLine /></div>
            </div>
            <div className={styles.breadCrumbs} onClick={openNavBtn}><FiMenu /></div>
    </div>
  )
}

export default Navbar;