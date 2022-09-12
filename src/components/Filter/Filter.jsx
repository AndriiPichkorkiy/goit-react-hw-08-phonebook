import FilterBlock from './Filter.styled';

import { useSelector, useDispatch } from "react-redux";
import { setFilter } from 'redux/reducer-filter'
import { getFilter } from 'redux/selectors';


const Filter = function () {
    //redux
    // const filter = useSelector(state => state.filter);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const onFilterChange = (event) => {
        const { value } = event.currentTarget
        dispatch(setFilter(value));
    }

    return <FilterBlock>
        <h2>Contacts</h2>

        <label htmlFor='filter'>Find contacts by name or number</label>
        <input type="text" name="filter"
            id="filter" onChange={onFilterChange} placeholder="serch" value={filter} />
    </FilterBlock>
}

export { Filter }