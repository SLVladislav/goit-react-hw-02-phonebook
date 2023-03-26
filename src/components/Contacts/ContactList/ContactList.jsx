import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';

export default function ContactList({
  contacts,
  visiblContacts,
  deleteContact,
}) {
  return contacts ? (
    <ul>
      {visiblContacts.map(({ id, name, number }) => {
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
  ) : (
    <></>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.number.isRequired,
  visiblContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
