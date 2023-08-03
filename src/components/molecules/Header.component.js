import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

// Components
import { SearchBar } from '../atoms'

const Header = () => {

  //#region HOOKS
  const navigation = useNavigation()
  //#endregion

  //#region HANDLER
  const handleOnPressAdd = () => {
    navigation.navigate('CreateContact')
  }
  //#endregion

  return (
    <View style={styles.container}>
      <SearchBar />
      <TouchableOpacity onPress={handleOnPressAdd} style={styles.add_icon}>
        <AntDesign name="pluscircleo" size={25} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      paddingHorizontal: 10,
      flexDirection: "row",
      backgroundColor: '#939393'
    },
    add_icon: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 10,
    }
})