import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => {
          return (
            <li key={id}>
              <Contact name={name} number={number} />
              <button
                type="button"
                onClick={() => {
                  deleteContact(id);
                }}
              ></button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
