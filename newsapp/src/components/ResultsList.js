import React from 'react';
import {Text,StyleSheet,View,FlatList} from 'react-native';
import ResultItem from '../components/ResultItem';

const ResultsList = ({title,results}) => {
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            
             <FlatList
             horizontal={true}
             data={results}
             showsHorizontalScrollIndicator={false}
             keyExtractor={result=>result.urlToImage}
             renderItem={({item})=>{
                return(<ResultItem result={item}/>)
             }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:15

    }
});

export default ResultsList;