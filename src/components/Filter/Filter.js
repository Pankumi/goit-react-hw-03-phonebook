export const Filter = ({ filterValue, filterChange }) => {
  //   console.log(filterValue);
  //   console.log(filterChange);
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Enter name"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        value={filterValue}
        onChange={filterChange}
      />
    </div>
  );
};
