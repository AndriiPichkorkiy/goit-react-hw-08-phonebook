import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import { InputPhoneNumber, InputName } from './Inputs';

import { useDispatch } from "react-redux";

import { addContact } from '../../redux/contacts/contacts-operations'

export function ContactForm({ showMessage }) {
    const [getName, setName] = useState('');
    const [getNumber, setNumber] = useState('');
    //redux
    const dispatch = useDispatch();

    const handleChange = (event) => {
        const { name, value } = event.currentTarget;

        name === 'name' ? setName(value) : setNumber(value);
    }

    const validateForm = function (event, showMessage) {
        event.preventDefault();
        const name = getName
        const number = getNumber

        //check inputs
        if (!name || !number) return showMessage('Fill in all filds plz');

        //if everything ok - continue
        const newContact = { name, number };

        //continue
        dispatch(addContact(newContact));

        //reset form
        setName('')
        setNumber('')
    }

    return <div>
        <h1>PhoneBook</h1>

        <Form onSubmit={(event) => { validateForm(event, showMessage) }}>
            <label htmlFor='name'>
                Name
            </label>
            <InputName value={getName} onChange={handleChange} id={'name'} />

            <label htmlFor='number'>
                Number
            </label>
            <InputPhoneNumber value={getNumber} onChange={handleChange} id={'number'} />

            <button type="submit">Add contact</button>
        </Form>
    </div>

}

ContactForm.propTypes = {
    showMessage: PropTypes.func.isRequired,
};