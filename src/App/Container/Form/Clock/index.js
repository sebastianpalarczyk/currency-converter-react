import React from "react";
import { useCurrentDate } from "./useCurrentDate";

const Clock = () => {

    const date = useCurrentDate();

    return (
        <>
            Dzisiaj jest{" "} {date}
        </>
    )
}

export default Clock;