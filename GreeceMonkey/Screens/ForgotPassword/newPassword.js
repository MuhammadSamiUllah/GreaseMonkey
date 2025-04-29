import { View, Text,StyleSheet,Dimensions,TextInput,TouchableOpacity } from 'react-native'
import React,{useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

import AntDesign from 'react-native-vector-icons/AntDesign';
const {height,width} = Dimensions.get('window');
export default function newPassword({navigation}) {

const [password,setPassword] = useState('');
const [secureForPassword,setSecureForPassword] = useState(true);
const [confirmPassword,setconfirmPassword] = useState('');
const [secureForConfirmPassword,setSecureFoConfirmrPassword] = useState(true);
return (
<View style={styles.container}>
<View style={styles.header}>
  <TouchableOpacity onPress={()=>navigation.navigate('verify')}>

  <AntDesign name='left' color={'#000000'} size={31} />
  </TouchableOpacity>
<Text style={{ fontSize: 28, fontWeight: '500', top: -3 }}>Create New Password</Text>
</View>
<View style={{ top: 80, left: -4 }}>
    <Text style={{ color: '#666', fontSize: 22, fontWeight: '300' }}>Please enter a new password to {"\n"}regain access</Text>
    
  </View>
  <View style={{gap:30,top:120}}>
  <View style={styles.passwordContainer}>
            <TextInput placeholder='Password'  style={styles.passwordinput} secureTextEntry={secureForPassword} value={password} onChangeText={setPassword} />
            <TouchableOpacity onPress={() => setSecureForPassword(!secureForPassword)} style={styles.icon}>
                <Feather name={secureForPassword ? 'eye':'eye-off'} size={20}  color="#666"/>
  
            </TouchableOpacity>
            </View>

            <View style={styles.passwordContainer}>
                      <TextInput placeholder='Confirm Password'  style={styles.passwordinput} secureTextEntry={secureForConfirmPassword} value={confirmPassword} onChangeText={setconfirmPassword} />
                      <TouchableOpacity onPress={() => setSecureFoConfirmrPassword(!secureForConfirmPassword)} style={styles.icon}>
                          <Feather name={secureForConfirmPassword ? 'eye':'eye-off'} size={20}  color="#666"/>
            
                      </TouchableOpacity>
                      </View>

  </View>
  




            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('passwordUpdate')}>
                      <Text style={{fontSize:18,color:'#ffffff'}}>Reset</Text>
                    </TouchableOpacity>
</View>
)
}
const styles = StyleSheet.create({
container:{
height:height,
width:width,
backgroundColor:'#ffffff',
alignItems:'center'
},
header: {
top: 50,
flexDirection: 'row',
gap: 20,
right:10
},

inputContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 100,
width: '60%',
},
input: {
width: 50,
height: 50,
borderWidth: 1,
borderColor: '#ccc',
textAlign: 'center',
fontSize: 24,
borderRadius: 5,
backgroundColor: '#ffffff',
},
icon:{
paddingHorizontal: 5,
},
passwordinput:{
flex:1,
fontSize:16
},
passwordContainer: {
height: height / 15,
width: width / 1.2,
flexDirection: 'row',
alignItems: 'center',
borderRadius: 10,
backgroundColor: '#efefef',
paddingHorizontal: 15,
},
btn: {
  height: 50,
      
  width: width / 1.3,
  borderRadius: 50,
  backgroundColor: '#ff6a12',
  justifyContent: 'center',
  alignItems: 'center',
  top: height / 1.8,
},
})