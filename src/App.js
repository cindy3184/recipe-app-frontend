import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import { makeStyles } from '@material-ui/core/styles';
import { Route, Link } from 'react-router-dom';



const App = () => {
/// API AUTHENTICATION ///
  const APP_ID = '88a7c4d3';
  const APP_KEY = '3b08efbc9c07ad2966108d5250ceabf7';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [find, setFind] = useState('');


  async function getAppData() {
    const BASE_URL = 'https://backend-recipe-app.herokuapp.com/api/recipes';
    const recipes = await fetch(BASE_URL).then(res => res.json());
    setSearch((prevState) => ({
      recipes, 
      ...prevState
    }))
  }

  useEffect(() => {
    getAppData();
  }, []);



  useEffect( () => {
    getApi();
  }, [find]);

  const getApi = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${find}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json(); //format it with json method and any external request needs async and await
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setFind(search);
    setSearch('');
  }


  return (
  


    <div className='App'>
        <header>
        <h1>RECIPES</h1>
        <p>Type in your search below to view hundreds of delicious recipes!</p>
        </header>
      <form onSubmit={getSearch} className='search-form'><span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
        <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <Button className='search-button' type='submit'>Search</Button>
      </form>
     <div className='recipe-card'>
      {recipes.map(recipe => (

        <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
        />
       
      
      ))}
      </div>

    </div>


  );
};


export default App;
