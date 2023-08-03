import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from '../components';
import { Avatar, Button } from 'react-native-paper';

// Form
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Store
import {useSelector, useDispatch} from 'react-redux';
import {retrieveContact, updateContact} from "../store/actions/contact"

const EditContact = ({route, navigation}) => {
    
    //#region PROPS & STATES
    const {id} = route.params;
    const [userContact, setUserContact] = useState({})
    //#endregion

    //#region HOOKS
    const dispatch = useDispatch();
    const {selected} = useSelector(state => state.contacts)
    //#endregion

    //#region SUBMIT
    const onSubmit = (val) => {
        dispatch(updateContact(id, val)).then(_ => navigation.navigate('ContactList'))
    }
    //#endregion

    //#region FORM HANDLER
    const schema = Yup.object({
        firstName: Yup.string().required("First name field is required"),
        lastName: Yup.string().optional(),
        age: Yup.number().required('Age field is required'),
        photo: Yup.string().optional(),
    });

    const formik = useFormik({
        initialValues: {
            firstName: userContact.firstName ?? "",
            lastName: userContact.lastName ?? "",
            age: userContact.age ?? 0,
            photo: userContact.photo ?? ''
        },
        onSubmit,
        validationSchema: schema,
        validateOnBlur: true,
        validateOnChange: true,
        enableReinitialize: true,
    })
    //#endregion

    //#region HANDLER
    /* Component Did Mount */
    useEffect(() => {
        dispatch(retrieveContact(id))
    }, [])

    /* Selector Watcher */
    useEffect(() => {
        if(selected){
            setUserContact(selected)
        }
    }, [selected])
    //#endregion

    return (
        <View style={styles.container}>
            <View style={styles.photo_container}>
                <Avatar.Image size={100} source={formik.values.photo ? {uri: formik.values.photo} : null} />
            </View>
            <Input 
                name=""
                label={'Photo URL*'}
                input={formik.values.photo}
                setInput={val => formik.setFieldValue('photo', val)}
                error={formik.errors.photo}
                touched={formik.touched.photo}
            />
            <Input 
                name="firstName"
                label={'First Name*'}
                input={formik.values.firstName}
                setInput={val => formik.setFieldValue('firstName', val)}
                error={formik.errors.firstName}
                touched={formik.touched.firstName}
            />
            <Input 
                name='lastName'
                input={formik.values.lastName}
                label='Last Name'
                setInput={val => formik.setFieldValue('lastName', val)}
                error={formik.errors.lastName}
                touched={formik.touched.lastName}
            />
            <Input 
                name='age'
                input={formik.values.age.toString()}
                label={'Age*'}
                setInput={val => formik.setFieldValue('age', Number(val))}
                keyboardType="numeric"
                error={formik.errors.age}
                touched={formik.touched.age}
            />
            <Button onPress={formik.handleSubmit} style={styles.button} dark mode='contained' uppercase>Edit Contact</Button>
        </View>
    )
}

export default EditContact

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'column',
        backgroundColor: '#Fff',
        flex: 1,
    },
    photo_container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    preview: {
        fontSize: 14,
        marginTop: 5,
        fontWeight: 'bold',
        color: 'blue'
    },
    button: {
        paddingVertical: 5,
        borderRadius: 10,
        marginTop: 10,
    }
})