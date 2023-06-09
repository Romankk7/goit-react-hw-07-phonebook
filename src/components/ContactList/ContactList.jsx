import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { getFilteredContacts } from 'Redux/Contacts/contacts-selectors';
import { deleteContact } from 'Redux/Contacts/contacts-operation';
import { fetchContacts } from 'Redux/Contacts/contacts-operation';

import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleRemoveContact = id => {
    dispatch(deleteContact(id));
  };

  const names = contacts.map(({ id, name, number }) => (
    <li key={id}>
      {name} : {number}
      <button
        className={css.button}
        onClick={() => handleRemoveContact(id)}
        type="button"
      >
        Delete
      </button>
    </li>
  ));

  return (
    <div className={css.contacts_wrapper}>
      <ul className={css.contact_items}>{names}</ul>
    </div>
  );
};

export default ContactList;
