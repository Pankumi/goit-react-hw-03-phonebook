import React, { Component } from 'react';
// npm i styled-components
import { Box } from "./Styled";
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', userName: 'Rosie Simpson', userNumber: '459-12-56' },
      { id: 'id-2', userName: 'Hermione Kline', userNumber: '443-89-12' },
      { id: 'id-3', userName: 'Eden Clements', userNumber: '645-17-79' },
      { id: 'id-4', userName: 'Annie Copeland', userNumber: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = newContact => {
    if (
      this.state.contacts.some(
        stateContact => stateContact.userName === newContact.userName
      )
    ) {
      alert(`${newContact.userName} is already in contacts.`);
      return;
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
    // // or:
    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, newContact]
    // }));
    // // or:
    // this.setState({
    //   contacts: [...this.state.contacts, newContact],
    // });
  };

  filterChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  deleteContact = evt => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== evt.target.id)
    })
  }

  render() {
    const filterContact = this.state.contacts.filter(contact =>
      contact.userName
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLocaleLowerCase())
    );
    // console.log(this.state);

    return (
      <Box>
        <h1>Phonebook</h1>
        <ContactForm addContacts={this.addContacts} />

        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          filterChange={this.filterChange}
        />
        <ContactList contacts={filterContact} deleteContact={this.deleteContact} />
      </Box>
    );
  }
}

// чотири компоненти:
// форма додавання контактів,
// список контактів,
// елемент списку контактів та
// фільтр пошуку.
