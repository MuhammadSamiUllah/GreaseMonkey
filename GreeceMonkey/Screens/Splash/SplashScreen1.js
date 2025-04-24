import { View, Text, StyleSheet,Dimensions,Image, TouchableOpacity } from 'react-native'
import React from 'react'
const {height,width} = Dimensions.get('window'); 
import AntDesign from 'react-native-vector-icons/AntDesign';
export default function SplashScreen1({navigation}) {
  return (
    <View style={styles.Container}>
     
      <Image 
     source={require('../../assets/images/splash/splash1.png')} 
     style={{width:width*1.5,height:height/2,}}
     />
    <View style={{alignItems:'center',justifyContent:'center',width:width/1.2,top:20}}>
      
      <Text style={{fontWeight:'400', fontSize:35,color:'#000',left:20}}>Welcome to the {"\n"}
      Grease Monkey app!</Text>
      <View style={{left:width/14 }}>
      <Text style={{color:"#939090",fontWeight:'300',fontSize:19,lineHeight:24,top:20}}>Browse through a wide range of{"\n"}experienced and reliable professionals {"\n"}in your area.</Text>

      </View>
   
      <View style={{flexDirection:'row',gap:240,alignItems:'center',top:90,left:20}}>
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center',top:-4}} onPress={()=>navigation.navigate('AccountPage')}>
        <Text style={{fontSize:16,fontWeight:'400',color:"#676765" ,left:30}}>Skip</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"#ff6a12",borderRadius:50,height:50,width:50,justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('SplashScreen2')}>
        <AntDesign name="right" size={24} color="#ffffff"/>
      </TouchableOpacity>
      </View>
      
    </View>
   

    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
      backgroundColor:'#ffffff',
      height:height,
      width:width
        
    }

})