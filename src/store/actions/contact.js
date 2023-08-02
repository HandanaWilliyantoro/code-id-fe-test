import {
    CREATE_CONTACT,
    RETRIEVE_CONTACT,
    UPDATE_CONTACT,
    RETRIEVE_ALL_CONTACTS,
    DELETE_CONTACT
} from "../types";

import ContactDataServices from '../../services/contact.services'

export const createContact = ({firstName, lastName, age, photo}) => async (dispatch) => {
    try {
        const res = await ContactDataServices.create({ firstName, lastName, age, photo });

        dispatch({
            type: CREATE_CONTACT,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const retrieveAllContacts = () => async (dispatch) => {
    try {
        const res = await ContactDataServices.getAll();
        console.log(res, 'ini res')

        dispatch({
            type: RETRIEVE_ALL_CONTACTS,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateContact = (id, data) => async (dispatch) => {
    try {
        const res = await ContactDataServices.update(id, data);

        dispatch({
            type: UPDATE_CONTACT,
            payload: data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteContact = (id) => async (dispatch) => {
    try {
        await ContactDataServices.delete(id);

        dispatch({
            type: DELETE_CONTACT,
            payload: { id },
        });
    } catch (err) {
        console.log(err);
    }
};

export const retrieveContact = (id) => async (dispatch) => {
    try {
        const res = await ContactDataServices.get(id);

        dispatch({
            type: RETRIEVE_CONTACT,
            payload: res.data,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};