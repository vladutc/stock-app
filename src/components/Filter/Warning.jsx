import React, { useContext } from "react";
import { FilterContext } from "../../utils/FilterManager";

const Warning = () => {
  const { validDates } = useContext(FilterContext);
  return (
    <React.Fragment>
      {!validDates && (
        <h3 className="warning">Start date must be before end date!</h3>
      )}
    </React.Fragment>
  );
};

export default Warning;
