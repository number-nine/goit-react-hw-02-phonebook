import PropTypes from 'prop-types';
import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  FormContainer,
  InputWrapper,
} from 'components/ContactEditor/ContactEditor.styled';
import { Button } from 'components/common.styled';

class ContactEditor extends Component {
  state = {
    name: '',
    number: '',
  };

  INITIAL_FORM_STATE = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props
      .onSubmit(this.state)
      .then(result => {
        Notify.success(result);
        this.resetForm();
      })
      .catch(({ message }) => Notify.failure(message));
  };

  resetForm = () => {
    this.setState({ ...this.INITIAL_FORM_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <InputWrapper>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </InputWrapper>

        <InputWrapper>
          Phone number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </InputWrapper>

        <Button type="submit">Add contact</Button>
      </FormContainer>
    );
  }
}

ContactEditor.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ContactEditor;
