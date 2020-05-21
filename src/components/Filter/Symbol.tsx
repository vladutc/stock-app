import React, { useContext } from 'react';
import { FilterContext } from '../../utils/FilterManager';
import { FilterInterface } from '../../interfaces/FilterInterface';

const Symbol: React.FC = () => {
    const { getSymbol, setSymbol }: FilterInterface = useContext(FilterContext);
    return (
        <label>Symbol:
            <input value={getSymbol()} onChange={setSymbol} />
        </label>
    );
}

export default Symbol;