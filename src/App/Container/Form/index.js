import React, { useState } from "react";
import "./style.css";
import { currencies } from "../../currencies";
import Result from "./Result";


const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }


    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend>Currency converter</legend>
                <label>
                    Kwota do przeliczenia:
                    <input
                        required
                        type="number"
                        placeholder="Kwota w zł"
                        min="0.01" step="0.01"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </label>
                <p>
                    <label>
                        <select
                            value={currency}
                            onChange={({ target }) => setCurrency(target.value)}
                        >
                            {currencies.map((currency => (
                                <option
                                    key={currency.short}
                                    value={currency.short}
                                >
                                    {currency.name}
                                </option>
                            )))}
                        </select>
                    </label>
                </p>
                <p className="paragraph">
                    <button>Przelicz</button>
                </p>
                <Result result={result} />
            </fieldset>
        </form>
    )
};

export default Form;