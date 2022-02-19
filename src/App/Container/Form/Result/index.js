import React from "react";
import { Strong } from "./styled.js";


const Result = ({ result }) => (
    <>
        {result !== undefined && (
            <>
                <Strong>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;
                    = {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </Strong>
            </>
        )}
    </>
)

export default Result;