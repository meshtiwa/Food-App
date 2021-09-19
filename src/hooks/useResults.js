import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMsg, setErrorMsg] = useState(' ');

    const searchApi = async(searchTerm) => {
        console.log('yo')
      try {
        console.log(searchTerm);
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'folsom'
            }
        });
        console.log(response);
        setResults(response.data.businesses);
    } catch (err){
        setErrorMsg('Something went wrong!');
    }
    };

//Call searchApi when component
//is first rendered. BAD CODE!
//searchApi('pasta');

    useEffect(() => { //use this when you just wanna run it once instead of multiple times!
        searchApi('italian');
    }, [])
    return [searchApi, results, errorMsg];
};