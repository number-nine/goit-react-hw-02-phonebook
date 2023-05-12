import { FilterWrapper } from './Filter.styled'
import { Button } from '../common.styled';

const Filter = ({ filter, onChange, onReset }) => {
  return (
    <FilterWrapper>
      <input type="text" name="filter" value={filter} onChange={onChange} />
      <Button type="button" onClick={onReset}>
        Clear field
      </Button>
    </FilterWrapper>
  );
};

export default Filter;
