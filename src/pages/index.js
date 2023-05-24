import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css"
import Filter from "../../components/filter/Filter";
import Featured from "../../components/featured/Featured";
import ExploreApartment from "../../components/exploreApartment/ExploreApartment";
import Listing from "../../components/Listing/Listing";
import Enquiry from "../../components/enquiry/Enquiry";
import Head from 'next/head';
import Offering from "../../components/offer/Offering";



export default function Home({ propertyForSale }) {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <>
        
      <div className={styles.wrapper}>
          <div className={styles.container}>
          </div>
          <div className={styles.filter}><Filter /></div>
          <div className={styles.featured}><Featured /></div>
          <div className={styles.enquiry}><Enquiry /></div>
          {/* <div className={styles.offer}><Offering /></div> */}
      </div>
   </>
  )
}

// export async function getStaticProps() {
//   const propertyForSale = await fetch('https://bayut.p.rapidapi.com', {
//     params: {
//       query: 'abu dhabi',
//       hitsPerPage: '25',
//       page: '0',
//       lang: 'en'
//     },
//     headers: {
//       'content-type': 'application/octet-stream',
//       'X-RapidAPI-Key': 'a0f94d332cmsh461ab5d4f64afa1p1d6ba8jsne4af6e3c2eca',
//       'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//     }
//   });
 
//   return {
//     props: {
//       propertyForSale: propertyForSale
//     }
//   }
// }

// export async function getStaticProps() {
//   const propertyForSale = await fetchApi(baseUrl)
//   ;
//   return {
//     props: {
//       propertyForSale: propertyForSale?.data
//     }
//   }
// }


  // const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
