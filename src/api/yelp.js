import axios from "axios";
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 
            'Bearer BJE3yPidWHncjLlrai_qAV_lXQ8LvMZm38ydaGXmm2CALMP3Mkb07O3E5vq52Ek_f_j_fi--4nek-Qtqm10GY346LEs__zP2Ezx3Ea-yDM5OI5ksMbbhme1-DSD4YHYx'
    }
});

