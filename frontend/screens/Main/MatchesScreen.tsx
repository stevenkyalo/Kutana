import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function MatchesScreen({ navigation }: any) {
  const [matches, setMatches] = useState<any[]>([]);

  useEffect(() => {
    // TODO: fetch matches from API GET /matches
    setMatches([{ id: 'm1', name: 'Alice' }, { id: 'm2', name: 'Brian' }]);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        keyExtractor={(m) => m.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ChatConversation', { matchId: item.id, name: item.name })} style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No matches yet</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 12, borderBottomWidth: 1 },
  itemText: { fontSize: 16 },
});
