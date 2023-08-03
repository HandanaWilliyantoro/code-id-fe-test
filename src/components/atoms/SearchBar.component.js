import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
        placeholder="Search contact here.."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
        inputStyle={styles.search_input}
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
    search: {
        backgroundColor: '#fff',
        borderColor: "#fff",
        borderWidth: 1,
        height: 35,
        flex: 1,
        color: '#fff',
        borderRadius: 5,
    },
    search_input: {
        fontSize: 14,
        height: 35,
        minHeight: 0,
    }
})