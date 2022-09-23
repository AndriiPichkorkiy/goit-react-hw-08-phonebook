import ContactListUl from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem';
import { useDispatch, useSelector } from "react-redux";
import { getFiltredList } from 'redux/filter/selectors';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';



const ContactList = () => {
    const contacts = useSelector(getFiltredList);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const markup = contacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />
    })

    return <ContactListUl>
        {markup.length ? markup : 'Phonebook is empty.'}
    </ContactListUl>

}

export { ContactList };