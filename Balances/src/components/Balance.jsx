import { useEffect, useState } from "react";
import { moneyFormat } from "../helpers";

const Balance = ({ count, subs, spent, setSpent }) => {
    

    const upadateBalance = () => {
        const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
        setSpent(spent);
    }

    useEffect(() => {
        upadateBalance();
    }, [subs]);

    return ( 
        <div className="balance">
            <h3>Balance: {moneyFormat(count)}</h3>
            <h3>Available: {moneyFormat(count - spent)}</h3>
            <h3>Spent: {moneyFormat(spent)}</h3>
        </div>
    );
}
 
export default Balance;