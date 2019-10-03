import React from 'react';
import {Text,StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import ResultItem from '../components/ResultItem';
import {withNavigation} from 'react-navigation'

const ResultsList = ({title,results,navigation}) => {
    return(
        <View>
            <Text style={styles.title}>{title}</Text>
            
             <FlatList
             horizontal={true}
             data={results}
             showsHorizontalScrollIndicator={false}
             keyExtractor={result=>result.urlToImage}
             renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('Detail',{image:item.urlToImage,discription:item.content})}>
                <ResultItem result={item} />
                </TouchableOpacity>)
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

export default withNavigation( ResultsList);