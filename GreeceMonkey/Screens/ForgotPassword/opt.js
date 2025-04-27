import { View, Text, StyleSheet, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { height, width } = Dimensions.get('window');

export default function Otp({navigation}) {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (e, index) => {
    if (e.nativeEvent.key === 'Backspace' && index > 0 && otp[index] === '') {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name='left' color={'#000000'} size={24} />
        <Text style={{ fontSize: 29, fontWeight: '500', top: -8 }}>Enter OTP</Text>
      </View>

      <View style={{ top: 67, left: -50 }}>
        <Text style={{ color: '#000000', fontSize: 17, fontWeight: '300' }}>We have sent an OTP to </Text>
        <Text style={{ color: '#ff6a12', fontSize: 15, fontWeight: '500' }}>samiullahmuhammad62@gmail</Text>
      </View>

      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            style={styles.input}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleBackspace(e, index)}
            value={digit}
            autoFocus={index === 0}
          />
        ))}
      </View>
<View style={{flexDirection:'row',top:150,gap:5}}>
    <Text>Didn't recieved code?</Text>
    <TouchableOpacity>
        <Text style={{color:'#ff6a12'}}>Resend</Text>
    </TouchableOpacity>
</View>
      <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('verify')}>
        <Text style={{ fontSize: 18, color: '#ffffff' }}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  header: {
    top: 50,
    flexDirection: 'row',
    gap: 30,
    right: 70,
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
  btn: {
    height: 50,
        
    width: width / 1.3,
    borderRadius: 50,
    backgroundColor: '#ff6a12',
    justifyContent: 'center',
    alignItems: 'center',
    top: height / 1.9,
  },
});
