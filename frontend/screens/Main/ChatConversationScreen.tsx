import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function ChatConversationScreen({ route }: any) {
  const { matchId, name } = route.params || {};
  const [messages, setMessages] = useState<any[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    // TODO: load messages for matchId from backend
    setMessages([{ id: '1', from: 'them', text: 'Hi' }]);
  }, [matchId]);

  function handleSend() {
    if (!text) return;
    setMessages((m) => [...m, { id: Date.now().toString(), from: 'me', text }]);
    setText('');
    // TODO: send to backend/socket
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <FlatList
        data={messages}
        keyExtractor={(m) => m.id}
        renderItem={({ item }) => (
          <View style={item.from === 'me' ? styles.msgMe : styles.msgThem}><Text>{item.text}</Text></View>
        )}
      />
      <View style={styles.inputRow}>
        <TextInput value={text} onChangeText={setText} style={styles.input} />
        <Button title="Send" onPress={handleSend} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
  inputRow: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, padding: 8, marginRight: 8 },
  msgMe: { alignSelf: 'flex-end', backgroundColor: '#DCF8C6', padding: 8, borderRadius: 6, marginVertical: 4 },
  msgThem: { alignSelf: 'flex-start', backgroundColor: '#FFF', padding: 8, borderRadius: 6, marginVertical: 4 },
});
