import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./Filter.module.css";
import { CiSearch } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";



function Filter() {
const [click, setClick] = useState(false);

const handleClick = () => {
    setClick(prev => !prev);
}

  return (
    <div className={styles.container}>
        <div className={styles.buy}>
            <select className={styles.select}>
                <option value="buy">Buy</option>
                <option value="Rent">Rent</option>
                <option value="Sold">Sold</option>
            </select>
        </div>
        <div className={styles.apatments}>
            <select className={styles.select} >
                <option value="Apatments">Apartments</option>
                <option value="offices">Offices</option>
                <option value="Townhome">Townhome</option>
                <option value="Houses">Houses</option>
            </select>
        </div>
        <div className={styles.search}>
            <input type="search" placeholder='Search' className={styles.input} />
        </div>
        <div className={styles.btnSearch}>
            <CiSearch />
            <span>SEARCH</span>
        </div>
    </div>
  )
}

export default Filter;