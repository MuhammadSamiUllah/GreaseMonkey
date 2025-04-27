import { View, Text,StyleSheet,Dimensions,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
const {height,width} = Dimensions.get('window');

export default function enterEmail({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
           <AntDesign name='left' color={'#000000'} size={24}  />
           <Text style={{fontSize:29,fontWeight:'500',top:-8}}>Forgot Password</Text>
     
         </View>
         <View style={{alignItems:'center',top:47,left:-10}}>
            <Text style={{color:'#000000',fontSize:19,fontWeight:'200'}}>Please enter the email address linked {'\n'}with your account</Text>
         </View>
           <View style={styles.input}>
               <TextInput placeholder='Email'  style={{justifyContent:'center',flex:1}}/>
             </View>

             <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('otp')}>
                       <Text style={{fontSize:18,color:'#ffffff'}}>Send Code</Text>
                     </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        height:height,
        width:width,
        backgroundColor:'#ffffff',
        alignItems:'center',
    },
    header:{
        top:30,
        flexDirection:'row',
        gap:30,right:40
    },
    input:{
        left:-13,
        height:height/15,
        width:width/1.3,
        borderRadius:10,
        backgroundColor:'#efefef',paddingHorizontal:15,flexDirection:'row',top:70
      },
      btn:{
        height:50,
        width:width/1.3,
        borderRadius:50,
        backgroundColor:'#ff6a12',
        justifyContent:'center',
        alignItems:'center',top:height/1.5
      
      },
})