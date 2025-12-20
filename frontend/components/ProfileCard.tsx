import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileCard({ profile }: any) {
  return (
    <View style={styles.card}>
      {/* TODO: replace with Image component and real photo */}
      <View style={styles.photoPlaceholder}><Text>Photo</Text></View>
      <Text style={styles.name}>{profile.name}, {profile.age}</Text>
      <Text style={styles.bio}>{profile.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { width: '100%', padding: 12, borderWidth: 1, borderRadius: 8 },
  photoPlaceholder: { height: 200, backgroundColor: '#eee', marginBottom: 8, alignItems: 'center', justifyContent: 'center' },
  name: { fontSize: 18, fontWeight: 'bold' },
  bio: { marginTop: 6 },
});
