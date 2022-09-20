import React from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import { Container, Section } from './Container.js';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function App() {
  //general method
  const showMessage = (msg) => {
    Notify.warning(msg)
  }

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
