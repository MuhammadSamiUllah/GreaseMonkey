import { View, Text,StyleSheet ,Dimensions, TextInput} from 'react-native'
import React, { useState } from 'react'
const {height,width} = Dimensions.get('window');
import CheckBox from 'react-native-check-box'
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
export default function SignIn({navigation}) {
  const [password,setPassword] = useState('');
  const [secure,setSecure] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
return (
  <View style={styles.container}>
      <View style={{alignItems:'center',top:90}}>
          <Text style={{fontSize:30,fontWeight:'500', }}>Login to your Account</Text>
        
          </View>
          <View style={{top:150,alignItems:'center',gap:30}}>

          <TextInput placeholder='E mail'  style={styles.input}/>
          <View style={styles.passwordContainer}>
          <TextInput placeholder='Password'  style={styles.passwordinput} secureTextEntry={secure} value={password} onChangeText={setPassword} />
          <TouchableOpacity onPress={() => setSecure(!secure)} style={styles.icon}>
              <Feather name={secure ? 'eye':'eye-off'} size={20}  color="#666"/>

          </TouchableOpacity>
          </View>
          <View>
            
          </View>   
          <View style={{flexDirection:'row',gap:120}}>      
          <View style={{flexDirection:'row',gap:5,left:30}}>

          <CheckBox
    isChecked={toggleCheckBox}
  onClick={() => setToggleCheckBox(!toggleCheckBox)}
    checkBoxColor="#898989"
    style={styles.checkox}
/><Text style={{top:3}}>Remember me</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('enterEmail')}>
          <Text style={{color:'#ff6a12',fontSize:15,fontWeight:'600', top:3,right:35}}>Forgot Password?</Text>
          </TouchableOpacity>


          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={{fontSize:18,color:'#ffffff'}}>Login</Text>
          </TouchableOpacity>
    
          
          </View>
          
      
        <View style={{flexDirection:'row',justifyContent:'center',height:height/1.2,alignItems:'center'}}>
        <Text>Don't have an account?  </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}
        ><Text style={{color:'#ff6a12',fontSize:14,fontWeight:'600'}}>Sign Up</Text></TouchableOpacity>
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
input:{
  height:height/15,
  width:width/1.3,
  borderRadius:10,
  backgroundColor:'#efefef',paddingHorizontal:15
},
icon:{
  paddingHorizontal: 5,
}
,  passwordContainer: {
  height: height / 15,
  width: width / 1.3,
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: 10,
  backgroundColor: '#efefef',
  paddingHorizontal: 15,
},
btn:{
  height:50,
  width:width/1.3,
  borderRadius:50,
  backgroundColor:'#ff6a12',
  justifyContent:'center',
  alignItems:'center'

},

passwordinput:{
  flex:1,
  fontSize:16
},
checkox:{
}
})