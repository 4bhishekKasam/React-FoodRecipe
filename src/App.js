import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import Recipes from './Components/Recipes';

const API_KEY = "2dd5258613e19417fb9cb6b53dfa967b";

class App extends Component {
  state = { recipes: [] }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    console.log(recipeName);
    const apiCall = await fetch(`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    const data = await apiCall.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);
  }

  componentDidMount = () => {
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    this.setState({ recipes });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Food Recipe</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
