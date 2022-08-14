import PropTypes from 'prop-types';
import FilterBlock from './Filter.styled';

const Filter = function ({ value, onFilterChange }) {
    return <FilterBlock>
        <h2>Contacts</h2>

        <label htmlFor='filter'>Find contacts by name or number</label>
        <input type="text" name="filter"
            id="filter" onChange={onFilterChange} placeholder="serch" value={value} />
    </FilterBlock>
}

Filter.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export { Filter }