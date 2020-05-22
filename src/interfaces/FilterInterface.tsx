import { ChangeEvent } from "react";

export interface FilterInterface {
    symbol: string;
    setSymbol: (event: ChangeEvent<HTMLInputElement>) => void;
    dates: { startDate: string, endDate: string };
    setDates: (type:string) => (event: ChangeEvent<HTMLInputElement>) => void;
    validDates: boolean;
};