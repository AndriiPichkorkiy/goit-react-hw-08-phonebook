import ContactListUl from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem';
import { useSelector } from "react-redux";
import { getFiltredList } from 'redux/selectors';

const ContactList = () => {
    const contacts = useSelector(getFiltredList);

    const markup = contacts.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />
    })

    return <ContactListUl>
        {markup}
    </ContactListUl>

}

export { ContactList };