import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import s from './ContactList.module.css';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const getFilteredContacts = state => {
    const { contacts, filter } = state.contact;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <ul className={s.contactListWrapper}>
      {filteredContacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
          id={contact.id}
        />
      ))}
    </ul>
  );
};
