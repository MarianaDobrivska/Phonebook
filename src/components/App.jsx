import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsContactsEmpty } from 'redux/contactsSelectors';
import { fetchContacts } from 'redux/contactsOperations';

import { ContactForm } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const dispatch = useDispatch();
  const isContactsEmpty = useSelector(getIsContactsEmpty);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, isContactsEmpty]);

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isContactsEmpty ? (
        <h2>Contactbook is empty, please add your first contact!</h2>
      ) : (
        <ContactList />
      )}
    </div>
  );
};
