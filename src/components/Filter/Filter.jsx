const Filter = ({ filter, onChange, onReset }) => {
  return (
    <section>
      <input type="text" name="filter" value={filter} onChange={onChange} />
      <button type="button" onClick={onReset}>
        Clear field
      </button>
    </section>
  );
};

export default Filter;
