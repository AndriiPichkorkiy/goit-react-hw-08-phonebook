import React from 'react';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { ContactList } from './ContactList';
import Container from './Container.js';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function App() {
  //general method
  const showMessage = (msg) => {
    Notify.warning(msg)
  }

  return (
    <Container>
      <div>
        <ContactForm showMessage={showMessage} />
      </div>
      <div>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
  // }
};
