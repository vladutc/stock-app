import React, { useState, ChangeEvent } from 'react';
import { FilterInterface } from '../interfaces/FilterInterface';
import moment from 'moment';

export const FilterContext = React.createContext<FilterInterface>({symbol: '', setSymbol: (e) => '', dates: {startDate: moment().format('yyyy-MM-DD'), endDate: moment().format('yyyy-MM-DD')}, setDates: (t) => (e) => '', validDates: true});

const FilterManager = ({ children }: any) => {
    const [symbol, setSymbol] = useState('');
    const [dates, setDates] = useState({startDate: moment().format('yyyy-MM-DD'), endDate: moment().format('yyyy-MM-DD')});

    const handleDateChange = (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setDates({...dates, [type]:event.target.value});
    }
    const areDatesValid = () => moment(dates.startDate) <= moment(dates.endDate);

    const context = {
        symbol: symbol,
        setSymbol: (e: ChangeEvent<HTMLInputElement>) => setSymbol(e.target.value),
        dates: dates,
        setDates: handleDateChange,
        validDates: areDatesValid()
    };
    return <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
}

export default FilterManager;