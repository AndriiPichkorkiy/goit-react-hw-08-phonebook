import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Filter } from '../components/Filter';
import { ContactList } from '../components/ContactList';
import { Container, Section } from '../components/Container.js';

export function ContactsBook({ showMessage }) {

    return (
        <Section>
            <Container>
                <ContactForm showMessage={showMessage} />
            </Container>
            <Container>
                <Filter />
                <ContactList />
            </Container>
        </Section>
    );
    // }
};
