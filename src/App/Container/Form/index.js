import React, { useState } from "react";
import Result from "./Result";
import Clock from "./Clock";
import { FormContainer, Fieldset, Label } from "./styled.js";
import { useRatesData } from "../../useRatesData";
import { Loading } from "./Loading/styled";
import { Error } from "./Error/styled";


const Form = () => {
    const [currency, setCurrency] = useState();
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amount) => {
        const rate = ratesData.rates[currency];
        
        setResult({
            sourceAmount: +amount,
            targetAmount: amount * rate,
            currency,
        })
    }

    return (
        <FormContainer onSubmit={onFormSubmit}>
            <Fieldset>
                <legend>Kalkulator walut</legend>
                <Label clock>
                    <Clock />
                </Label>
                {ratesData.state === "loading"
                    ? (
                        <Loading>
                            Proszę czekać... Ładuje kursy walut z Europejskiego Banku Centralnego.
                        </Loading>
                    )
                    : (
                        ratesData.state === "error" ? (
                            <Error>
                                Hmm... Coś poszło nie tak! Sprawdź czy masz połączenie z internetem.
                            </Error>
                        ) : (
                            <>
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
                                        {Object.keys(ratesData.rates).map((currency => (
                                            <option
                                                key={currency}
                                                value={currency}
                                            >
                                                {currency}
                                            </option>
                                        )))}
                                    </select>
                                </Label>
                                <Label center>
                                    Kursy walut pochodzą z Europejskiego Banku Centralnego z dnia {ratesData.date}
                                </Label>
                                <Label>
                                    <button>Przelicz</button>
                                </Label>
                                <Label>
                                    <Result result={result} />
                                </Label>
                            </>
                        )
                    )
                }

            </Fieldset>
        </FormContainer>
    )
};

export default Form;