import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const Input = ({input, setInput, label, placeholder, touched, error, name, ...props}) => {
  return (
    <View style={styles.container}>
      <TextInput
        label={label}
        value={input}
        onChangeText={val => setInput(val)}
        placeholder={placeholder}
        touched={touched}
        style={styles.text_input_style}
        name={name}
        {...props}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginVertical: 10,
  },
  text_input_style: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  }
})