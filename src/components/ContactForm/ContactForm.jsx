import { Component } from 'react';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handlSubmit = e => {
    e.preventDefault();

    const isIncludes = this.props.contacts.find(
      contact => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );

    isIncludes
      ? alert(`${this.state.name} is already in contacts`)
      : this.props.addContact(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  handlChange = ({ currentTarget: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form onSubmit={this.handlSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handlChange}
          />
        </label>

        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handlChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
