const ContactsList = ({ title, contacts, onClick }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {contacts
          .map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
                <button type="button" onClick={() => onClick(id)}>
                  Delete
                </button>
              </li>
            );
            // }
          })}
      </ul>
    </section>
  );
};

export default ContactsList;
