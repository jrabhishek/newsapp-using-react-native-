import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

const DetailScreen = ({navigation}) =>{
    const imageUrl = navigation.getParam('image');
    const deatail = navigation.getParam('discription')
    console.log(imageUrl)
    return(
        <View>
            <Image style={styles.image} source={{uri:imageUrl}}></Image>
            <Text>{deatail}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height:300,
        width:300,
        margin:8,
        borderRadius:5
    }
});

export default DetailScreen;