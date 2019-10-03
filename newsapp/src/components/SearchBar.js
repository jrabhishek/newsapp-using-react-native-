import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons'

const SearchBar = ({term,change,onTermSubmited})=>{
    return (
        <View style = {styles.background}>
            <Feather name ='search' style={styles.iconStyle}/>
            <TextInput 
             autoCorrect={false}
             autoCapitalize='none'
             placeholder='search'
             onEndEditing={()=>{console.log('done typing');
            onTermSubmited(term)}}
             style = {styles.inputStyle}
             value={term}
             onChangeText={(newText)=>{change(newText)}}
             ></TextInput>
        </View>
    );
};
const styles = StyleSheet.create({
    background:{
        backgroundColor:'#E6E3E3',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginTop:10
        
        
    },
    inputStyle:{
       
        flex:1,
        fontSize:18

    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    },
});


export default SearchBar;