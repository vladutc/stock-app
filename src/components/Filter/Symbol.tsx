import React, { useContext } from 'react';
import { FilterContext } from '../../utils/FilterManager';
import { FilterInterface } from '../../interfaces/FilterInterface';

const Symbol: React.FC = () => {
    const { symbol, setSymbol }: FilterInterface = useContext(FilterContext);
    return (
        <label>Symbol:
            <input placeholder="Enter symbol (e.g. NFLX)" value={symbol} onChange={setSymbol} />
        </label>
    );
}

export default Symbol;