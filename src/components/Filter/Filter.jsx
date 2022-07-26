import { Component } from 'react';
import PropTypes from 'prop-types';
import FilterBlock from './Filter.styled';

export class Filter extends Component {
    static propTypes = {
        onFilterChange: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired,
    };

    render() {
        const { value, onFilterChange } = this.props;
        return <FilterBlock>
            <h2>Contacts</h2>

            <label htmlFor='filter'>Find contacts by name or number</label>
            <input type="text" name="filter"
                id="filter" onChange={onFilterChange} placeholder="serch" value={value} />
        </FilterBlock>

    }
}