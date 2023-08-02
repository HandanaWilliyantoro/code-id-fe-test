import React, {useEffect} from 'react'
import { View } from 'react-native'
import { Text, XStack, YStack } from 'tamagui'

// Store
import {useSelector, useDispatch} from 'react-redux';
import {retrieveAllContacts} from "../store/actions/contact"

const ContactList = () => {
    //#region HOOKS
    const {list} = useSelector(state => state.contacts);
    const dispatch = useDispatch()
    //#endregion

    //#region HANDLER
    /* Component Did Mount */
    useEffect(() => {
        dispatch(retrieveAllContacts());
    }, [])
    //#endregion

    return (
        <View>
            <Text
                // can add theme values
                color="black"
                fontFamily="$body"
                // or just use direct values
                fontSize={20}
            >
            Lorem ipsum
            </Text>
        </View>
    )
}

export default ContactList