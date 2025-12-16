import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function PhoneInputScreen({ navigation }: any) {
  const [phone, setPhone] = useState('');

  async function handleSend() {
    const res = await fetch('http://localhost:3000/auth/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    });
    const data = await res.json();
    if (data.success) {
      navigation.navigate('OtpVerify', { phone });
    } else {
      alert(data.message || 'Error sending OTP');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kutana — Enter phone</Text>
      <TextInput
        value={phone}
        onChangeText={setPhone}
        style={styles.input}
        placeholder="+2547XXXXXXXX"
        keyboardType="phone-pad"
      />
      <Button title="Send OTP" onPress={handleSend} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 20, marginBottom: 12 },
  input: { borderWidth: 1, padding: 8, marginBottom: 12, borderRadius: 6 },
});
