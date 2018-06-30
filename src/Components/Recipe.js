import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Recipe.css';

const API_KEY = "2dd5258613e19417fb9cb6b53dfa967b";

class Recipe extends Component {
    state = { activeRecipe: [] }

    componentDidMount = async () => {
        const title = this.props.location.state.recipe;
        const apiCall = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`);
        const res = await apiCall.json();
        this.setState({ activeRecipe: res.recipes[0] });
        console.log('Recipe page :');
        console.log(this.state.activeRecipe);
    }

    render() {
        const recipe = this.state.activeRecipe;
        return (
            <div className="container">
                {
                    this.state.activeRecipe.length !== 0 &&
                    <div className="active-recipe">
                        <img src={recipe.image_url} alt={recipe.title} className="active-recipe__img" />
                        <h3 className="active-recipe__title">{recipe.title}</h3>
                        <h4 className="active-recipe__publisher">
                            Publisher : <span>{recipe.publisher}</span>
                        </h4>
                        <p className="active-recipe__website">
                            Website :
                        <span><a href={recipe.publisher_url}>
                                {recipe.publisher_url}
                            </a></span>
                        </p>
                        <button className="active-recipe__button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>
                }
            </div>
        );
    }
}

export default Recipe;


