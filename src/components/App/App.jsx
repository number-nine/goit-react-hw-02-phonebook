import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactEditor from 'components/ContactEditor';
import Filter from 'components/Filter';
import ContactsList from 'components/ContactsList';

import getUsers from '../../controllers/request-controller'

import { Container } from 'components/App/App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  RANDOM_PHONEBOOK_DATA = [
    { name: 'Rosie Simpson', number: '459-12-56' },
    { name: 'Hermione Kline', number: '443-89-12' },
    { name: 'Eden Clements', number: '645-17-79' },
    { name: 'Annie Copeland', number: '227-91-26' },
  ];

  addContact = ({ name, number }) => {
    return new Promise((resolve, reject) => {
      if (this.isNameUniq(name)) {
        this.setState(({ contacts }) => {
          return {
            contacts: [
              ...contacts,
              {
                id: nanoid(),
                name: name.trim(),
                number: number.trim(),
              },
            ],
          };
        });
        resolve(`New contact ${name} successfully added`);
      } else {
        reject(new Error(`${name} is already in contacts`));
      }
    });
  };

  handleFillPhonebook = () =>
    this.RANDOM_PHONEBOOK_DATA.forEach(contact => {
      this.addContact(contact)
        .then(result => Notify.success(result))
        .catch(({ message }) => {
          Notify.failure(message);
        });
    });

  isNameUniq = nameToAdd =>
    !this.state.contacts
      .map(({ name }) => name.toLowerCase())
      .includes(nameToAdd.toLowerCase());

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleDeleteContact = idToRemove => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idToRemove),
    }));
    Notify.success('Contact succesfully removed');
  };

  handleResetFilter = () => {
    this.setState({ filter: ''});
  };

  filterContacts = (contacts, filter) => {
    if (!filter.trim()) {
      return this.state.contacts;
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  render() {
    return (
      <Container>
        <ContactEditor onSubmit={this.addContact} />
        <button type="button" onClick={this.handleFillPhonebook}>
          Fill phonebook
        </button>
        <Filter
          filter={this.state.filter}
          onChange={this.onChange}
          onReset={this.handleResetFilter}
        />
        <ContactsList
          title="Contacts"
          contacts={this.filterContacts(this.state.contacts, this.state.filter)}
          onClick={this.handleDeleteContact}
        />
        <button type="button" onClick={getUsers}>get users</button>
      </Container>
    );
  }
}

export default App;
