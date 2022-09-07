import React, { useCallback } from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import Container from './Container.js';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { useSelector, useDispatch } from "react-redux";

import { addContact, removeContact } from '../redux/reducer-contacts'
import { setFilter } from '../redux/reducer-filter'


export function App() {
  //redux
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();


  //method for component FIlter
  const filterChange = (event) => {
    const { value } = event.currentTarget
    dispatch(setFilter(value));
  }

  //method for component ContactList
  const getFiltredList = () => {
    if (filter) {
      const subString = filter.toLocaleUpperCase();
      const key = isNaN(+filter.charAt(0)) ? 'name' : 'number'
      return contacts.filter(el => el[key].toLocaleUpperCase().includes(subString));
    } else {
      return contacts;
    }
  }

  //general method
  const showMessage = (msg) => {
    Notify.warning(msg)
  }

  //check and add new contact
  const onAddContact = useCallback((newContact) => {
    //check contacts 
    const isExist = Object.keys(newContact).find(key => {
      const subString = newContact[key].toLocaleUpperCase();
      const contact = contacts.find(el => el[key].toLocaleUpperCase().includes(subString));
      if (contact) return !showMessage(`${contact[key]} is already in contacts`);
      else return false
    })

    if (isExist) return true;

    //continue
    dispatch(addContact(newContact));
  }, [contacts, dispatch])

  //remove contact by id, method for component ContactList
  const onRemoveContact = useCallback((id) => {
    dispatch(removeContact(id));
  }, [dispatch])

  // render() {
  const listToRender = getFiltredList();

  return (
    <Container>
      <div>
        <ContactForm onAddContact={onAddContact} showMessage={showMessage} />
      </div>
      <div>
        <Filter value={filter} onFilterChange={filterChange} />
        <ContactList listToRender={listToRender} onRemoveContact={onRemoveContact} />
      </div>
    </Container>
  );
  // }
};
