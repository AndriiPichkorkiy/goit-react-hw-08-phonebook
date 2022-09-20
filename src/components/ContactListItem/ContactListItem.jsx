import PropTypes from 'prop-types';
import { memo } from 'react';
import { useCallback } from 'react';

import { removeContact } from '../../redux/contacts/contacts-operations'
import { useDispatch } from "react-redux";

const ContactListItem = ({ id, name, phone }) => {
    const dispatch = useDispatch();

    const onRemoveContact = useCallback((id) => {
        dispatch(removeContact(id));
    }, [dispatch])

    return <li>
        <span>
            {name}:
        </span>
        <span>
            {phone}
        </span>
        <button onClick={() => onRemoveContact(id)}>Remove</button>
    </li>
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};

export default memo(ContactListItem);