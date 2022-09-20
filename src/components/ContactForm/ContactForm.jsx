import { useState } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

import { useSelector, useDispatch } from "react-redux";

import { addContact } from '../../redux/contacts/contacts-operations'

export function ContactForm({ showMessage }) {
    const [getName, setName] = useState('');
    const [getNumber, setNumber] = useState('');
    //redux
    // const contacts = useSelector(state => state.items);
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
        const newContact = { name, phone: number };
        // const isExist = Object.keys(newContact).find(key => {
        //     const subString = newContact[key].toLocaleUpperCase();
        //     const contact = contacts.find(el => el[key].toLocaleUpperCase().includes(subString));
        //     if (contact) return !showMessage(`${contact[key]} is already in contacts`);
        //     else return false
        // })

        // if (isExist) return true;

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
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={getName}
                onChange={handleChange}
                placeholder="add Name"
                id='name'
            />


            <label htmlFor='number'>
                Number
            </label>
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={getNumber}
                onChange={handleChange}
                placeholder="add Number"
                id='number'
            />

            <button type="submit">Add contact</button>
        </Form>
    </div>

}

ContactForm.propTypes = {
    showMessage: PropTypes.func.isRequired,
};