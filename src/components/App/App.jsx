import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Container } from 'components/App/App.styled';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
    filter: '',
  };

  INITIAL_FORM_STATE = {
    name: '',
    number: '',
  };

  RANDOM_PHONEBOOK_DATA = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if (this.isNameUniq(this.state.name)) {
      this.setState(currentState => {
        return {
          contacts: [
            ...currentState.contacts,
            {
              id: nanoid(),
              name: currentState.name,
              number: currentState.number,
            },
          ],
        };
      });
      this.resetForm();
    } else {
      Notify.failure(`${this.state.name} is already in contacts.`);
      // console.log();
    }
  };

  handleFillPhonebook = e => {
    e.preventDefault();
    this.setState(currentState => {
      return {
        contacts: [
          ...currentState.contacts,
          ...this.RANDOM_PHONEBOOK_DATA.contacts,
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

  handleDeleteContact = (e) => {
    e.preventDefault();
    // console.dir(currentState.contacts);
    this.setState(currentState => 
    {console.log(currentState.contacts);
      return currentState.contacts
        .filter((contact) =>
          (contact.id !== e.currentTarget.id))}
    );
  }

  render() {
    return (
      <Container>
        <form onSubmit={this.handleFormSubmit}>
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
        </form>
        <button type="submit" onClick={this.handleFillPhonebook}>
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
                    id={contact.id}
                    onClick={this.handleDeleteContact}
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
