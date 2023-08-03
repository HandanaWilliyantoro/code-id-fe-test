import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input } from '../components';
import { Avatar, Button } from 'react-native-paper';
import Toast from 'react-native-simple-toast'

// Form
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Store
import {useDispatch} from 'react-redux';
import {createContact, retrieveAllContacts} from "../store/actions/contact"

const EditContact = ({route, navigation}) => {
    //#region HOOKS
    const dispatch = useDispatch();
    //#endregion

    //#region SUBMIT
    const onSubmit = (val) => {
        dispatch(createContact(val))
        .then(_ => dispatch(retrieveAllContacts()))
        .then(_ => navigation.navigate('ContactList'))
        .catch(e => Toast.show(e))
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
            firstName: "",
            lastName: "",
            age: "",
            photo: ''
        },
        onSubmit,
        validationSchema: schema,
        validateOnBlur: true,
        validateOnChange: true,
        enableReinitialize: true,
    })
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
            <Button onPress={formik.handleSubmit} style={styles.button} dark mode='contained' uppercase>Create New Contact</Button>
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