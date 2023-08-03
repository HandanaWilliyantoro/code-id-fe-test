import React, {useEffect} from 'react'
import { View, FlatList, StyleSheet } from 'react-native'

// Store
import {useSelector, useDispatch} from 'react-redux';
import {deleteContact, retrieveAllContacts} from "../store/actions/contact";

// Components
import { Card } from '../components';

const ContactList = ({navigation}) => {
    //#region HOOKS
    const {list} = useSelector(state => state.contacts);
    const dispatch = useDispatch()
    //#endregion

    //#region HANDLER
    /* Component Did Mount */
    useEffect(() => {
        dispatch(retrieveAllContacts());
    }, [])

    /* Delete Contact Card */
    const removeContact = (id) => {
        dispatch(deleteContact(id))
    }

    /* Navigate */
    const navigateEdit = (id) => {
        navigation.navigate('EditContact', {id})
    }
    //#endregion

    return (
        <View style={styles.container}>
            <FlatList
                data={list}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                    <Card 
                        photo={item.photo || ''} 
                        name={`${item.firstName} ${item.lastName}`} 
                        age={item.age} 
                        onPressDelete={removeContact}
                        onPressEdit={navigateEdit}
                        id={item.id}
                        key={item.id}
                    />
                }
            />
        </View>
    )
}

export default ContactList

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flex: 1,
        backgroundColor: '#fff',
    },
})