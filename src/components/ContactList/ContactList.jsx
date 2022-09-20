import ContactListUl from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem';
import { useDispatch, useSelector } from "react-redux";
import { getFiltredList } from 'redux/filter/selectors';

import { getContacts } from 'redux/contacts/contacts-selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';



const ContactList = () => {
    const contacts = useSelector(getFiltredList);
    // const contacts = useSelector(getContacts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const markup = contacts.map(({ id, name, phone }) => {
        return <ContactListItem key={id} id={id} name={name} phone={phone} />
    })

    return <ContactListUl>
        {markup}
    </ContactListUl>

}

export { ContactList };