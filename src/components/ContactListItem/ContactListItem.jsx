import PropTypes from 'prop-types';
import { memo } from 'react';

const ContactListItem = ({ id, name, number, onRemoveContact }) => {
    return <li>
        <span>
            {name}:
        </span>
        <span>
            {number}
        </span>
        <button onClick={() => onRemoveContact(id)}>Remove</button>
    </li>
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onRemoveContact: PropTypes.func.isRequired,
};

export default memo(ContactListItem);