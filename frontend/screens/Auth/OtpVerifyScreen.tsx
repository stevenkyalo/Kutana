import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function OtpVerifyScreen({ route, navigation }: any) {
  const { phone } = route.params;
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleVerify() {
    setLoading(true);
    try {
      const res = await fetch('http://localhost:3000/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, otp }),
      });
      const data = await res.json();
      if (data.success) {
        // On success navigate to main tab UI
        // TODO: store auth token/session as needed
        navigation.reset({
          index: 0,
          routes: [{ name: 'Main' }],
        });
      } else {
        alert(data.message || 'Verify failed');
      }
    } catch (err) {
      alert('Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the OTP sent to {phone}</Text>
      <TextInput value={otp} onChangeText={setOtp} style={styles.input} keyboardType="numeric" placeholder="123456" />
      <Button title={loading ? 'Verifying...' : 'Verify'} onPress={handleVerify} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 16, marginBottom: 12 },
  input: { borderWidth: 1, padding: 8, marginBottom: 12, borderRadius: 6 },
});
