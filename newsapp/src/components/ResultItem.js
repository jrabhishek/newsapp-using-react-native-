import React from 'react';
import {Image,Text,StyleSheet,View} from 'react-native';

const ResultItem = ({result}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:result.urlToImage}}></Image>
            <Text style={styles.newsText}>{result.title}</Text>
            
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        width:250,
        borderRadius:5,
        height:170
    },
    container:{
        marginLeft:15
    },
    newsText:{
        width:250

    }
});

export default ResultItem;