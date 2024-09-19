import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#aaa" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Buscar barbearia..."
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Buscar" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
