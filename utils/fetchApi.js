import axios from "axios";


 export const baseUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions'


export const fetchApi = async (url) => {
        const { data } = await axios.get((url), {
            headers: {
                'X-RapidAPI-Key': 'a0f94d332cmsh461ab5d4f64afa1p1d6ba8jsne4af6e3c2eca',
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
              }});
              return data
}