import PropTypes from 'prop-types';
import { memo } from 'react';
import { useCallback } from 'react';

import { changeContact, removeContact } from '../../redux/contacts/contacts-operations'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { InputName, InputPhoneNumber } from 'components/ContactForm/Inputs';
import ButtonStyled from 'styled/Button.styled';

const ContactListItem = ({ id, name: propName, number: propNumber }) => {
    const [isBeingChanging, setIsBeingChanging] = useState(false);
    const [name, setName] = useState(propName);
    const [number, setNumber] = useState(propNumber);

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        name === 'name' ? setName(value) : setNumber(value);
    }

    const dispatch = useDispatch();

    const onRemoveContact = useCallback((e) => {
        e.preventDefault();
        const id = e.target.form.dataset.contactid;
        dispatch(removeContact(id));
    }, [dispatch])

    const onChangeContact = (e) => {
        e.preventDefault();
        setIsBeingChanging(true);
    }

    const onFinishContact = (e) => {
        e.preventDefault();
        setIsBeingChanging(false);
        const id = e.target.form.dataset.contactid;
        dispatch(changeContact({ id, name, number }));
    }

    return <li>
        <form data-contactid={id}>
            <span>
                {isBeingChanging
                    ? <InputName value={name} onChange={handleChange} />
                    : name}:
            </span>
            <span>
                {isBeingChanging ?
                    <InputPhoneNumber value={number} onChange={handleChange} />
                    : number}
            </span>
            <div>{isBeingChanging ? <ButtonStyled onClick={onFinishContact} type="change">Finish</ButtonStyled> : <ButtonStyled onClick={onChangeContact} type="change">Change</ButtonStyled>}
                <ButtonStyled type="delete" onClick={onRemoveContact}>Remove</ButtonStyled>
            </div>

        </form >
    </li >
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default memo(ContactListItem);