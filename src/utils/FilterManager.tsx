import React, { useState, ChangeEvent } from 'react';
import { FilterInterface } from '../interfaces/FilterInterface';
import moment from 'moment';

export const FilterContext = React.createContext<FilterInterface>({ getSymbol: () => '', setSymbol: (e) => {}, getDates: () => ({startDate:moment().format('yyyy-MM-DD'), endDate: moment().format('yyyy-MM-DD')}), setDates: (type) => (e) => {}, validDates: true});

const FilterManager = ({ children }: any) => {
    const [symbol, setSymbol] = useState('');
    const [dates, setDates] = useState({startDate: moment().format('yyyy-MM-DD'), endDate: moment().format('yyyy-MM-DD')});

    const handleDateChange = (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
        setDates({...dates, [type]:event.target.value});
    }
    const areDatesValid = () => moment(dates.startDate) <= moment(dates.endDate);

    const context = {
        getSymbol: () => symbol,
        setSymbol: (e: ChangeEvent<HTMLInputElement>) => setSymbol(e.target.value),
        getDates: () => dates,
        setDates: handleDateChange,
        validDates: areDatesValid()
    };
    return <FilterContext.Provider value={context}>{children}</FilterContext.Provider>
}

export default FilterManager;