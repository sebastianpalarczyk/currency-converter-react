import React, { useState, useEffect } from "react";

const Time = () => {
    const [date, setDate] = useState(new Date());


    const intervalId = useEffect(() => {
        setInterval(() => {
            setDate(date => date = new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    });

    return (
        <label className="form__label form__label--time">
            Dzisiaj jest {date.toLocaleDateString(undefined, { weekday: "long", day: "numeric", month: "long" })}, {date.toLocaleTimeString()}
        </label>
    )


}

export default Time;