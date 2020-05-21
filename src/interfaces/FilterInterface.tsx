import { ChangeEvent } from "react";

export interface FilterInterface {
    getSymbol: () => string;
    setSymbol: (event: ChangeEvent<HTMLInputElement>) => void;
    getDates: () => { startDate: string, endDate: string };
    setDates: (type:string) => (event: ChangeEvent<HTMLInputElement>) => void;
    validDates: boolean;
};