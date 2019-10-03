import React,{useState,useEffect} from 'react';
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import newsApi from '../api/newsApi';
import NewsApiResult from '../hooks/NewsApiResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = ()=>{
    const [searchTerm,onChangeSearchTerm] = useState('');
    const [getResult,news,error] = NewsApiResult();

 /*   const [news,newNews] = useState([]);
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
    },[])*/
    
    return (
        <View style={{flex:1}}>
            
            <SearchBar
            term={searchTerm}
            change={(newTerm)=>{onChangeSearchTerm(newTerm)}}
            onTermSubmited={(wordToSearch)=>{getResult()}}
            />
            
            <ScrollView>
            {error?<Text>{error}</Text>:null}
            <ResultsList title = 'entertainment' results={news} />
            <ResultsList title = 'sports' results={news} />
            <ResultsList title = 'health' results={news} />
          

            </ScrollView>


        </View>
    );
};
const styles = StyleSheet.create({});


export default SearchScreen;