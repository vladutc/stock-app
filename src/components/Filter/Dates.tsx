import React, { useContext } from "react";
import { FilterContext } from "../../utils/FilterManager";
import moment from "moment";

const Dates: React.FC = () => {
    const {dates, setDates} = useContext(FilterContext);
    const {startDate,endDate}= dates;
    return <React.Fragment>
        <label>Start date: 
            <input type="date" value={startDate} max={endDate} onChange={setDates('startDate')}/>
        </label>
        <label>End date:
            <input type="date" value={endDate} max={moment().format('yyyy-MM-DD')} onChange={setDates('endDate')}/>
        </label>
    </React.Fragment>
}

export default Dates;