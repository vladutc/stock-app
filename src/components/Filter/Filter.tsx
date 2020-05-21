import React from 'react';
import Symbol from './Symbol';
import Dates from './Dates';
import FilterManager from '../../utils/FilterManager';

const Filter = () => {
    return <FilterManager>
        <Symbol/>
        <Dates/>
    </FilterManager>
}

export default Filter;