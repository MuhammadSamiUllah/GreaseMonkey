import { View, Text,StyleSheet,Dimensions, TextInput,TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {CountryPicker} from "react-native-country-codes-picker";
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const {height,width} = Dimensions.get('window');
export default function SignUp({navigation}) {
  const [password,setPassword] = useState('');
  const [secure,setSecure] = useState(true);
  const [show, setShowCountry] = useState(false);
const [phoneNumber, setPhoneNumber] = useState('');
const [countryCode, setCountryCode] = useState('+92 '); 
const [countryFlag, setCountryFlag] = useState('🇵🇰'); 
return (
  <View style={styles.Container}>
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
      <AntDesign name='left' color={'#000000'} size={24}  />
      </TouchableOpacity>
      <Text style={{fontSize:29,fontWeight:'500',top:-8}}>Let's get started</Text>

    </View>
    <View style={{justifyContent:'center',alignItems:'center',top:40}}>
      <View style={styles.profileCircle}>
        <MaterialCommunityIcons name='account' size={70} color={'#6b7474'} />
        
      </View>
      <View style={{backgroundColor:'#ff6a12',borderRadius:50,top:-32,left:40,height:30,justifyContent:'center',alignItems:'center', width:30}}>
          <AntDesign name='plus' size={15} color={'#ffffff'} />
        </View>
    </View>
    <View style={{gap:30,justifyContent:'center',top: -35,flex:1}}>
    <View style={styles.input}>
      <TextInput placeholder='Full Name'  style={{justifyContent:'center',flex:1}} />
    </View>
    <View style={styles.input}>
      <TextInput placeholder='Email'  style={{justifyContent:'center',flex:1}}/>
    </View>
    <View style={styles.input}>
    {countryFlag ? (
  <Text style={{fontSize:20, marginRight:5,top:10}}>{countryFlag}</Text>
) : null}
      <TextInput placeholder='Phone Number'  value={countryCode + phoneNumber} onChangeText={(text) => setPhoneNumber(text)} style={{justifyContent:'center',flex:1}}/>
      <TouchableOpacity  onPress={() => setShowCountry(true)} style={styles.icon}>
                    <Feather name={secure ? 'chevron-down':'chevron-up'} size={20}  color="#666"/>
      
                </TouchableOpacity>

                <CountryPicker
                show={show}
                pickerButtonOnPress={(item) =>{
                  setCountryCode(item.dial_code + ' '); 
                  setShowCountry(false);
                  setCountryFlag(item.flag);
                }}
                />
    </View>
    <View style={styles.input}>
      <TextInput placeholder='Password' secureTextEntry={secure} value={password} onChangeText={setPassword} style={{justifyContent:'center',flex:1}}/>
        <TouchableOpacity onPress={() => setSecure(!secure)} style={styles.icon}>
                    <Feather name={secure ? 'eye':'eye-off'} size={20}  color="#666"/>
      
                </TouchableOpacity>
    </View>
<TouchableOpacity style={styles.btn}>
          <Text style={{fontSize:18,color:'#ffffff'}}>Login</Text>
        </TouchableOpacity>
 
    </View>
   
    <View style={{backgroundColor:'#cccccc',height:1 ,width:300,top:-85}}>

    </View>
    <View style={{top:-97,backgroundColor:'#ffffff',width:40,justifyContent:'center',alignItems:'center',}}>
    <Text style={{color:'#6b7474',}}>OR</Text>
   
    </View>
    <View style={{flexDirection:'row',top:-80,gap:30}}>
    <TouchableOpacity style={{borderWidth:1,borderRadius:3,borderColor:'#ccc',height:50,width:50,justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../../assets/images/socialLogo/facebook.png')} style={{height:40,width:40}}/>
    </TouchableOpacity>
    <TouchableOpacity  style={{borderWidth:1,borderRadius:3,borderColor:'#ccc',height:50,width:50,justifyContent:'center',alignItems:'center'}} >
      <Image source={require('../../assets/images/socialLogo/google.png')} style={{height:25,width:25}}/>
    </TouchableOpacity>
    <TouchableOpacity  style={{borderWidth:1,borderRadius:3,borderColor:'#ccc',height:50,width:50,justifyContent:'center',alignItems:'center'}}>
      <Image source={require('../../assets/images/socialLogo/apple.png')} style={{height:25,width:25}}/>
    </TouchableOpacity>
  
    </View>
   <View style={{flexDirection:'row',top:-60}}>
        <Text>Already have an account?  </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}
        ><Text style={{color:'#ff6a12',fontSize:14,fontWeight:'600'}}>Login</Text></TouchableOpacity>
        </View>
      
   
  
  </View>
)
}
const styles = StyleSheet.create({
Container:{
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
profileCircle:{
  backgroundColor:'#ecf3ec',
  height:100,
  width:100,borderRadius:100,
  justifyContent:'center',
  alignItems:'center',
},
input:{
  height:height/15,
  width:width/1.3,
  borderRadius:10,
  backgroundColor:'#efefef',paddingHorizontal:15,flexDirection:'row'
},
btn:{
  height:50,
  width:width/1.3,
  borderRadius:50,
  backgroundColor:'#ff6a12',
  justifyContent:'center',
  alignItems:'center'
},
icon:{
  justifyContent:'center'
}
})