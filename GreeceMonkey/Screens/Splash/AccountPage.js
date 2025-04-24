import { View, Text ,StyleSheet,Dimensions,Image, TouchableOpacity} from 'react-native'
import React from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign';
const {height,width} = Dimensions.get('window');
export default function AccountPage() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <AntDesign name='left' size={25} color={"#000000"} />
            </View>
            <View style={{justifyContent:'center',alignItems:'center',top:20}}>
                <Image source={require("../../assets/images/splash/logo.png")} style={{height:height/3,width:width/1.4}}/>
                <Text style={{fontSize:36,fontWeight:'500',top:20}}>Select Account</Text>
            </View>
            <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                    <Text style={{color:"#ff6a12"}}>User</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:"#ff6a12"}}>Garage</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:"#ff6a12"}}>Garage-Driver</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color:"#ff6a12"}}>Drive</Text>
                </TouchableOpacity>

            </View>
     
    </View>
  )
}
const styles = StyleSheet.create({
container:{
    height:height,
    width:width,
    backgroundColor:'#ffffff'
},
header:{
    height:50,
    width:width,
    justifyContent:'center',
    left:20,top:20
},
buttonContainer:{
    top:70,
justifyContent:'center',
alignItems:'center',
gap:20
},
button:{
    borderWidth:1.5,
    justifyContent:'center',alignItems:"center",
    borderColor:'#ff6a12',
    height:50,
    borderRadius:50,

    width:width/1.3
}
})