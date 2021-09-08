import React, { useReducer } from "react";
// import uuid from "uuid";
import ContactContext from "./contact-context";
import ContactReducer from "./contact-reducer";
// import {
//   GET_CONTACTS,
//   ADD_CONTACT,
//   DELETE_CONTACT,
//   SET_CURRENT,
//   CLEAR_CURRENT,
//   UPDATE_CONTACT,
//   FILTER_CONTACTS,
//   CLEAR_FILTER,
//   CONTACT_ERROR,
//   CLEAR_CONTACTS,
// } from "../types";
import { users } from "../../components/users/user-list";
const ContactState = (props) => {
  const initialState = {
    contacts: users,
  };
  //const [state, dispatch] = useReducer(ContactReducer, initialState);
  const [state] = useReducer(ContactReducer, initialState);
  //Add
  //Delete
  //Set
  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
