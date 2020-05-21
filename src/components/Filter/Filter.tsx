import React from 'react';
import Symbol from './Symbol';
import Dates from './Dates';
import Warning from './Warning';
import FilterManager from '../../utils/FilterManager';

const Filter = () => {
    return <FilterManager>
        <div className="filters">
            <Symbol />
            <Dates />
        </div>
        <Warning/>
    </FilterManager>
}

export default Filter;