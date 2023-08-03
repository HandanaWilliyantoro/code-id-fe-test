import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';


const CardContact = ({
  photo,
  name,
  age,
  onPressDelete,
  id,
  onPressEdit
}) => (
  <Card style={styles.container}>
    <Card.Cover source={{ uri: photo }} />
    <Card.Content style={styles.content}>
      <Text variant="titleLarge">{name}</Text>
      <Text variant="titleSmall">Age: {age} years old</Text>
    </Card.Content>
    <Card.Actions>
      <Button style={styles.button} onPress={() => onPressEdit(id)} mode='contained' buttonColor='blue' textColor='white'>Edit</Button>
      <Button style={styles.button} onPress={() => onPressDelete(id)} mode='contained' buttonColor='red'>Delete</Button>
    </Card.Actions>
  </Card>
);

export default CardContact;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  content: {
    paddingVertical: 10,
  },
  button: {
    width: 100,
  }
})