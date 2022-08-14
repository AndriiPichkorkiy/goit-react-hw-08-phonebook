import PropTypes from 'prop-types';
import ContactListUl from './ContactList.styled';
import { ContactListItem } from 'components/ContactListItem';

const ContactList = ({ listToRender, onRemoveContact }) => {

    const list = listToRender.map(({ id, name, number }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} onRemoveContact={onRemoveContact} />
    })

    return <ContactListUl>
        {list}
    </ContactListUl>

}

ContactList.propTypes = {
    listToRender: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired,
};

export { ContactList };