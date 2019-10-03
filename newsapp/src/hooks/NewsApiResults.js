import React ,{useState,useEffect} from 'react';
import newsApi from '../api/newsApi';

export default ()=>{

    const [news,newNews] = useState([]);
    const[error,setError] = useState('');
   
        const getResult =async ()=>{
            try{
            const response = await newsApi.get('/top-headlines',{
                params:{
                    country:'us'
                }
            }
            );
            newNews(response.data.articles)

        }
        catch(e)
    {
        setError("something went wrong");

    }
    
    }
    useEffect(()=>{
        getResult();
    },[])
    
    return [getResult,news,error];
}

