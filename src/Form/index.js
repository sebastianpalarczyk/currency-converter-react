import React from "react";
import "./style.css";


const Form = (props) => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend>Currency converter</legend>
            <label>
                Kwota do przeliczenia: <input required type="number" placeholder="Kwota w zł" min="0.01" step="0.01" />
            </label>
            <p>
                <label>
                    <span className="form__span">USD</span><input type="checkbox" name="USD" />
                    <span className="form__span">EUR</span> <input type="checkbox" name="EUR" />
                    <span className="form__span">GBP</span>  <input type="checkbox" name="GBP" />
                </label>
            </p>
        </fieldset>
        <p className="paragraph">
            <button>Przelicz</button>
        </p>
    </form>
)

export default Form;