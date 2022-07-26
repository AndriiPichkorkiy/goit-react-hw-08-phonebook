import { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    static propTypes = {
        onAddContact: PropTypes.func.isRequired,
        showMessage: PropTypes.func.isRequired,
    };

    handleChange = (event) => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        })
    }

    validateForm(event, callBack, showMessage) {
        event.preventDefault();
        const { name, number } = this.state;
        //check inputs
        if (!name || !number) return showMessage('Fill in all filds plz');

        //if everything ok - continue

        const isExist = callBack({ name, number })

        //reset form
        if (!isExist)
            this.setState({
                name: '',
                number: ''
            })
    }

    render() {
        const { name, number } = this.state
        const { onAddContact, showMessage } = this.props
        return <div>
            <h1>PhoneBook</h1>

            <Form onSubmit={(event) => { this.validateForm(event, onAddContact, showMessage) }}>
                <label htmlFor='name'>
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={this.handleChange}
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
                    value={number}
                    onChange={this.handleChange}
                    placeholder="add Number"
                    id='number'
                />

                <button type="submit">Add contact</button>
            </Form>
        </div>
    }

}