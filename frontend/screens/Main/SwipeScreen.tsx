import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SwipeScreen({ navigation }: any) {
  const [profiles, setProfiles] = useState<any[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // TODO: replace with real API call (GET /profiles?exclude_current=true)
    setProfiles([
      { id: '1', name: 'Alice', age: 25, bio: 'Loves hiking.' },
      { id: '2', name: 'Brian', age: 27, bio: 'Coffee enthusiast.' },
    ]);
  }, []);

  function handleLike() {
    const current = profiles[index];
    if (!current) return;
    // TODO: POST /profiles/:id/like
    alert('Liked ' + current.name);
    setIndex(i => i + 1);
  }

  function handlePass() {
    setIndex(i => i + 1);
  }

  const current = profiles[index];

  return (
    <View style={styles.container}>
      {current ? (
        <View style={styles.card}>
          <Text style={styles.name}>{current.name}, {current.age}</Text>
          <Text style={styles.bio}>{current.bio}</Text>
          <View style={styles.actions}>
            <Button title="Pass" onPress={handlePass} />
            <Button title="Like" onPress={handleLike} />
          </View>
        </View>
      ) : (
        <Text>No more profiles</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  card: { width: '90%', padding: 20, borderWidth: 1, borderRadius: 8 },
  name: { fontSize: 20, fontWeight: 'bold' },
  bio: { marginTop: 8 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
});
