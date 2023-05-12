import { ListWrapper } from './ContactsList.styled';
import { Button } from '../common.styled';

const ContactsList = ({ contacts, onClick }) => {
  return contacts.length === 0 ? (
    <p>Nothing to show</p>
  ) : (
    <ListWrapper>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <Button type="button" onClick={() => onClick(id)}>
              Delete
            </Button>
          </li>
        );
      })}
    </ListWrapper>
  );
};

export default ContactsList;
