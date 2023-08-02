import {
    CREATE_CONTACT,
    RETRIEVE_ALL_CONTACTS,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    RETRIEVE_CONTACT,
  } from "../types";
  
  const initialState = {
    list: [],
    selected: {}
  };
  
  function contactReducer(contacts = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case CREATE_CONTACT:
        return {...contacts, list: [...contacts.list, payload]};
  
      case RETRIEVE_ALL_CONTACTS:
        return {...contacts, list: payload};
  
      case UPDATE_CONTACT:
        return {...contacts, list: contacts.list.map((contact) => {
          if (contact.id === payload.id) {
            return {
              ...contact,
              ...payload,
            };
          } else {
            return contact;
          }
        })}
  
      case DELETE_CONTACT:
        return {...contacts, list: contacts.list.filter(({ id }) => id !== payload.id)};
  
      case RETRIEVE_CONTACT:
        return {...contacts, selected: payload}
  
      default:
        return contacts;
    }
  };
  
  export default contactReducer;