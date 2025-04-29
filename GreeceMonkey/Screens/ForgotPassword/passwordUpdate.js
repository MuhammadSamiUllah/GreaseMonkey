import { View, Text,StyleSheet,Dimensions,Image,TouchableOpacity } from 'react-native'
import React from 'react'
const {height,width} = Dimensions.get('window');
export default function passwordUpdate({navigation}) {
  return (
    <View style={styles.container}>
        <View style={{alignItems:'center',justifyContent:'center',top:100,gap:30}}>
          <Image source={require('../../assets/images/verify.png')} sty={{height:50,width:50}} />
          <View style={{alignItems:'center',gap:50}}>
            <Text style={{fontSize:30,fontWeight:'600'}}>Password Updated!</Text>
            <Text style={{fontSize:18,color:'#6b7474',textAlign:'center'}}>Your password has been reset {'\n'}successfully. You can now log in with {'\n'}your new password.
 
            </Text>
  <TouchableOpacity style={styles.btn} onPress={()=>{navigation.navigate('SignIn')}}>
            <Text style={{fontSize:18,color:'#ffffff'}}>Sign in</Text>
          </TouchableOpacity>
          </View>
        </View>
        
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height:height,
    width:width,
    backgroundColor:'#ffffff',
    

  },
  
btn:{
  height:50,
  width:width/1.3,
  borderRadius:50,
  backgroundColor:'#ff6a12',
  justifyContent:'center',
  alignItems:'center',top:50
},

})