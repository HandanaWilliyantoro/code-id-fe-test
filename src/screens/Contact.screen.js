import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

// Store
import {useSelector, useDispatch} from 'react-redux';
import {retrieveAllContacts} from "../store/actions/contact"

const Contact = () => {
    return (
        <View>
            <Text>Contact</Text>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})