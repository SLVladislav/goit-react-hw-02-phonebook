import PropTypes from 'prop-types';

const Contact = ({ name, number }) => {
  return (
    <div>
      <p>{`${name}: ${number}`}</p>
    </div>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
