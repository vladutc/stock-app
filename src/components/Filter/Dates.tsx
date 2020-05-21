import React, { useContext } from "react";
import { FilterContext } from "../../utils/FilterManager";
import moment from "moment";

const Dates: React.FC = () => {
    const {getDates, setDates} = useContext(FilterContext);
    const {startDate,endDate}= getDates();
    console.log(startDate,endDate);
    return <div>
        <label>Start date: 
            <input type="date" value={startDate} max={endDate} onChange={setDates('startDate')}/>
        </label>
        <label>End date:
            <input type="date" value={endDate} max={moment().format('yyyy-MM-DD')} onChange={setDates('endDate')}/>
        </label>
    </div>
}

export default Dates;