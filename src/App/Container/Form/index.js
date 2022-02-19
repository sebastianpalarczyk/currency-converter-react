import React, { useState } from "react";
import { currencies } from "../../currencies";
import Result from "./Result";
import Clock from "./Clock";
import { FormContainer, Fieldset, Label } from "./styled.js";


const Form = ({ calculateResult, result }) => {
    const [currency, setCurrency] = useState(currencies[0].short);
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }


    return (
        <FormContainer onSubmit={onFormSubmit}>
            <Fieldset>
                <legend>Currency converter</legend>
                <Label clock>
                    <Clock/>
                </Label>
                <Label>
                    Kwota do przeliczenia:
                    <input
                        required
                        type="number"
                        placeholder="Kwota w zł"
                        min="0.01" step="0.01"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </Label>
                <Label>
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
                </Label>
                <Label center>
                    Kursy walut pochodzą ze strony nbp.pl z dnia: 11.02.2022
                </Label>
                <Label>
                    <button>Przelicz</button>
                </Label>
                <Label>
                    <Result result={result} />
                </Label>
            </Fieldset>
        </FormContainer>
    )
};

export default Form;