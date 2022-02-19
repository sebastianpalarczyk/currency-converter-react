import React from "react";


const Result = ({ result }) => (
    <>
        {result !== undefined && (
            <>
                <strong>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;
                    = {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </>
)

export default Result;