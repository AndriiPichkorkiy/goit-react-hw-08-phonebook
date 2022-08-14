import React, { useEffect, useState, useCallback } from 'react';
import { nanoid } from 'nanoid'
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import Container from './Container.js';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

let isFirstTimeAppStarted = true;

export function App() {
  const [getContacts, setContacts] = useState([]);
  const [getFilter, setFilter] = useState('')

  const LS_KEY = 'contacts';

  //method for component FIlter
  const filterChange = (event) => {
    const { name, value } = event.currentTarget
    setFilter(value);
  }

  //component did mount
  useEffect(() => {
    setContacts(getDataFromLS())
  }, [])


  //update LS
  useEffect(() => {
    if (isFirstTimeAppStarted) { isFirstTimeAppStarted = false; return };

    updateLS(getContacts);
  }, [getContacts])

  //method for component ContactList
  const getFiltredList = () => {
    const contacts = getContacts;
    const filter = getFilter;

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
    const contacts = getContacts;

    //check contacts 
    const isExist = Object.keys(newContact).find(key => {
      const subString = newContact[key].toLocaleUpperCase();
      const contact = contacts.find(el => el[key].toLocaleUpperCase().includes(subString));
      if (contact) return !showMessage(`${contact[key]} is already in contacts`);
      else return false
    })

    if (isExist) return true;

    //continue
    newContact.id = nanoid(10)
    setContacts(preContacts => [...preContacts, newContact]);

    updateLS(getContacts);
  }, [])

  //remove contact by id, method for component ContactList
  const onRemoveContact = useCallback((id) => {
    setContacts(preContacts => preContacts.filter(contact => contact.id !== id));
    updateLS(getContacts);
  }, [setContacts])

  //use it when add or delete contact
  const updateLS = (contacts) => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts))
  }

  //us it only for componentDidMount
  function getDataFromLS() {
    return JSON.parse(localStorage.getItem(LS_KEY) || '[]')
  }

  // render() {
  const listToRender = getFiltredList();
  return (
    <Container>
      <div>
        <ContactForm onAddContact={onAddContact} showMessage={showMessage} />
      </div>
      <div>
        <Filter value={getFilter} onFilterChange={filterChange} />
        <ContactList listToRender={listToRender} onRemoveContact={onRemoveContact} />
      </div>
    </Container>
  );
  // }
};
