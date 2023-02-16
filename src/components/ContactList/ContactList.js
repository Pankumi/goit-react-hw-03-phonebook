import { ContactItem } from './ContactIten/ContactItem';

export const ContactList = ({contacts, deleteContact}) => {
//   console.log(props);
  return (
    <ul>
      {contacts.map(({id, userName, userNumber}) => {
        return (
          <ContactItem key={id} id={id} userName={userName} userNumber={userNumber} deleteContact={deleteContact}/>
        );
      })}
    </ul>
  );
};
