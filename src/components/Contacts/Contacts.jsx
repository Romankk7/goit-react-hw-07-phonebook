import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import ContactsFilter from 'components/ContactsFilter/ContactsFilter';

import css from './Contacts.module.css';

const Contacts = () => {
  return (
    <div>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />
      <ContactsFilter />
      <h2 className={css.title}>Contacts</h2>
      <ContactList />
    </div>
  );
};

export default Contacts;
