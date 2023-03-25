import PropTypes from 'prop-types';

const Contact = ({ name, number }) => {
  return (
    <div>
      <p>{`${name}: ${number}`}</p>
    </div>
  );
};

export default Contact;
