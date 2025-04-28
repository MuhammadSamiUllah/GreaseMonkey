import { View, Text,StyleSheet,Dimensions,Image,TouchableOpacity } from 'react-native'
import React from 'react'
const {height,width} = Dimensions.get('window');
export default function verify() {
  return (
    <View style={styles.container}>
      <View style={{alignItems:'center',justifyContent:'center',top:100,gap:30}}>
        <Image source={require('../../assets/images/verify.png')} sty={{height:50,width:50}} />
        <View style={{alignItems:'center',gap:50}}>
          <Text style={{fontSize:30,fontWeight:'600'}}>Verification Successful!</Text>
          <Text style={{fontSize:18,color:'#6b7474',textAlign:'center'}}>Your OTP has been verified {'\n'} successfully. {'\n'}
            Please set your new password now. 
          </Text>
<TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:18,color:'#ffffff'}}>Continue</Text>
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