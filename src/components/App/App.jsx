import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Container } from 'components/App/App.styled';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  INITIAL_FORM_STATE = {
    name: '',
  }

  handleFormSubmit = e => {
    e.preventDefault();
    // const {name} = this.state.name;
    this.setState((currentState) => {
      this.state.contacts = [
        ...currentState.contacts,
        {
          id: nanoid(),
          name: currentState.name,
        },
      ];
      console.log(this.state.contacts);
    });
    this.resetForm();
  };

  resetForm = () => {
    // console.log('clearing form: ', this.INITIAL_FORM_STATE);
    this.setState({name:''});
  }

  onChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleFormSubmit} onChange={this.onChange}>
          <input
            type="text"
            name="name"
            value={this.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
      </Container>
    );
  }
}

export default App;
