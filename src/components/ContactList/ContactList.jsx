import PropTypes from 'prop-types';
import ContactListUl from './ContactList.styled';

const ContactList = ({ listToRender, onRemoveContact }) => {
    return <ContactListUl>{listToRender.map(el => (<li key={el.id}>
        <span>
            {el.name}:
        </span>
        <span>
            {el.number}
        </span>
        <button onClick={() => onRemoveContact(el.id)}>Remove</button>
    </li>))
    }</ContactListUl>
}

ContactList.propTypes = {
    listToRender: PropTypes.array.isRequired,
    onRemoveContact: PropTypes.func.isRequired,
};

export { ContactList };