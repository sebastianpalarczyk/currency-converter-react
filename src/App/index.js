import React, { useState } from "react";
import Container from "./Container";
import Form from "./Container/Form";
import Result from './Container/Form/Result';
import { currencies } from "./currencies";


function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies
      .find(({ short }) => short === currency)
      .rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currency,
    })
  }

  return (
    <Container>
      <Form
        result={result}
        calculateResult={calculateResult}
      />
      <Result />
    </Container>
  );
}

export default App;
