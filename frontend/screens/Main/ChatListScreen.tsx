import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function ChatListScreen({ navigation }: any) {
  const [conversations, setConversations] = useState<any[]>([]);

  useEffect(() => {
    // TODO: fetch active conversations
    setConversations([{ id: 'c1', name: 'Alice' }]);
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={conversations}
        keyExtractor={(c) => c.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ChatConversation', { matchId: item.id, name: item.name })} style={styles.item}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No conversations</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { padding: 12, borderBottomWidth: 1 },
});
