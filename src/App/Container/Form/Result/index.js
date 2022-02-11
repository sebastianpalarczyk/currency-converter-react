import React from "react";


const Result = ({ result }) => (
    <label className="form__label form__label--center">
        {result !== undefined && (
            <>
                <stron>
                    {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;
                    = {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </stron>
            </>
        )}

    </label>
)

export default Result;