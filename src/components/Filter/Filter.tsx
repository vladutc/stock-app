import React from 'react';
import Symbol from './Symbol';
import Dates from './Dates';
import Warning from './Warning';

const Filter = () => {
    return (<React.Fragment>
        <div className="filters">
            <Symbol />
            <Dates />
        </div>
        <Warning />
    </React.Fragment>
    )
}

export default Filter;