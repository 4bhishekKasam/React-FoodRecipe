import React from 'react';
import './Form.css';

const Form = (props) => (
    <form onSubmit={props.getRecipe} style={{ marginBottom: "2rem" }}>
        <input className="form__input" type="text" name="recipeName" />
        <button className="form__button">Search Recipe</button>
    </form>
);

export default Form;