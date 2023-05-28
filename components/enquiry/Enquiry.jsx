import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./Enquiry.module.css";
import { BsHouse } from "react-icons/bs";
import { SiSecurityscorecard } from "react-icons/si";
import { GiBathtub } from "react-icons/gi";


function Enquiry() {

  return (
    <div className={styles.container}>
       <div className={styles.wrapper}>
           <div className={styles.inquiry}>
                <span>Inquiry Form</span>
                <div className={styles.inquiry_1}>
                    <div className={styles.inquiry_2}>
                        <label htmlFor="inquiryType">Inquiry Type</label>
                        <div className={styles.selectType}>
                            <select name="Select value">
                                <option value="Apartments">Apartments</option>
                                <option value="Offices">Offices</option>
                                <option value="Houses">Houses</option>
                                <option value="Studios">Studios</option>
                                <option value="Construction">Construction</option>
                                <option value="Renovation">Renovation</option>
                                <option value="House Extention">House Extention</option>
                                <option value="Interior/Exterior Design">Interior/Exterior Design</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.info_1}>
                        <label htmlFor="inquiryType">Personal Info</label>
                        <div className={styles.info_2}>
                            <div className={styles.select}>
                                <select name="Select value" id="inquiryType">
                                    <option value="Apartments">Apartments</option>
                                    <option value="Offices">Offices</option>
                                    <option value="Houses">Houses</option>
                                </select>
                            </div>
                            <input type="text" placeholder='Your Name' />
                        </div>
                    </div>
                </div>
                <div className={styles.input}>
                    <label htmlFor="inquiryType">Email</label>
                    <input type="text" placeholder='Your email' />
                </div>
                <div className={styles.maxPrice}>
                    <input type="text" placeholder='Max price' />
                    <input type="text" placeholder='Minimum size (Sq Ft)' />
                </div>
                <div className={styles.submit}> 
                    <span>Submit</span>
                </div>
           </div>
           <div className={styles.choose}>
                <span>Why Choose Us</span>
                <p>It’s our job to get you the best price for your home and make<br /> sure that you get the best possible deal on the property </p>
                <div className={styles.category}>
                    <div className={styles.icon}><Image src="/images/added_service.jpg"   width="65" height="55" alt='' /></div>
                    <div className={styles.chooseCat}>
                        <span>Value Added Service</span>
                        <p>We have forged alliances with well-acclaimed  partners, active <br /> in various segments of the construction industry</p>
                    </div>
                </div>
                <div className={styles.category}>
                    <div className={styles.icon}><Image src="/images/big_quality.jpg"   width="65" height="55" alt='' /></div>
                    <div className={styles.chooseCat}>
                        <span>Big on Quality</span>
                        <p>We are committed to operating every aspect of the business up <br /> to standards that offer the highest possible</p>
                    </div>
                </div>
                <div className={styles.category}>
                    <div className={styles.icon}><Image src="/images/eco_friendly.jpg"   width="65" height="55" alt='' /></div>
                    <div className={styles.chooseCat}>
                        <span>Eco Conscious</span>
                        <p>“Our commitment to environmental awareness and preservation <br /> is reflected throughout our business”</p>
                    </div>
                </div>
                <div className={styles.category}>
                    <div className={styles.icon}><Image src="/images/great_team.jpg"   width="65" height="55" alt='' /></div>
                    <div className={styles.chooseCat}>
                        <span>Wide Range of Properties</span>
                        <p>We place great emphasis on ensuring strong team alignment  on <br />each project, we actively listen to our clients</p>
                    </div>
                </div>
           </div>
       </div>
    </div>
  )
}

export default Enquiry;