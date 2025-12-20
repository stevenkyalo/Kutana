import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function EditProfileScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  function handleSave() {
    // TODO: save profile to backend (POST/PUT /me/profile)
    alert('Profile saved');
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Name" value={name} onChangeText={setName} style={styles.input} />
      <TextInput placeholder="Bio" value={bio} onChangeText={setBio} style={[styles.input, { height: 100 }]} multiline />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 12 },
});
