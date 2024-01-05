import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilter, deleteContact } from '../redux/ContactSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter((contact) =>
    String(contact.name).toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.LiContact} key={id}>
          <p>
            <span>{String(name)}:</span>
            <span>{String(number)}</span>
          </p>
          <button
            className={css.DelContact}
            data-id={id}
            onClick={() => handleDelete(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
