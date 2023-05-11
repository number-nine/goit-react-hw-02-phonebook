import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import Form from 'components/Form'

import { Container } from 'components/App/App.styled';

class App extends Component {
  state = {
    contacts: [],
    // name: '',
    // number: '',
    filter: '',
  };

  INITIAL_FORM_STATE = {
    name: '',
    number: '',
  };

  RANDOM_PHONEBOOK_DATA = [
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ];

  addContact = ({name, number}) => {
    // e.preventDefault();
    // const newName = this.state.name;
    if (this.isNameUniq(name)) {
      this.setState(({contacts}) => {
        return {
          contacts: [
            ...contacts,
            {
              id: nanoid(),
              name: name,
              number: number,
            },
          ],
        };
      });
      // this.resetForm();
    } else {
      Notify.failure(`${name} is already in contacts.`);
    }
  };

  handleFillPhonebook = e => {
    this.setState(({contacts}) => {
      return {
        contacts: [
          ...contacts,
          ...this.RANDOM_PHONEBOOK_DATA,
        ],
      };
    });
  };

  isNameUniq = nameToAdd =>
    !this.state.contacts
      .map(({ name }) => name.toLowerCase())
      .includes(nameToAdd.toLowerCase());

  resetForm = () => {
    this.setState({ ...this.INITIAL_FORM_STATE });
  };

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDeleteContact = idToRemove => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idToRemove),
    }));
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.addContact} />
        {/* <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.onChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form> */}
        <button type="button" onClick={this.handleFillPhonebook}>
          Fill phonebook
        </button>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.onChange}
        />
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts
            .filter(({ name }) =>
              name
                .toLowerCase()
                .includes(this.state.filter.trim().toLowerCase())
            )
            .map(contact => {
              return (
                <li key={contact.id}>
                  {contact.name}: {contact.number}
                  <button
                    type="button"
                    onClick={() => this.handleDeleteContact(contact.id)}
                  >
                    Delete
                  </button>
                </li>
              );
              // }
            })}
        </ul>
      </Container>
    );
  }
}

export default App;
