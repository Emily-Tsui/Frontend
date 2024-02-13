import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RecipeList from '../components/RecipeList';
import { Link } from 'react-router-dom';

import { MdOutlineAdd } from "react-icons/md";

function RecipesLog({ setRecipe }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [recipes, setRecipes] = useState([]);

    // RETRIEVE the entire list of recipes
    const loadRecipes = async () => {
        const response = await fetch('https://simple-web-app-backend.onrender.com/Recipe');
        const recipes = await response.json();
        setRecipes(recipes);
    } 
    

    // UPDATE a single recipe
    const onEditRecipe = async recipe => {
        setRecipe(recipe);
        redirect("https://simple-web-app-backend.onrender.com/updateRecipe");
    }


    // DELETE a single recipe 
    const onDeleteRecipe = async _id => {
        const response = await fetch(`https://simple-web-app-backend.onrender.com/Recipe/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('https://simple-web-app-backend.onrender.com/Recipe');
            const recipes = await getResponse.json();
            setRecipes(recipes);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the recipes
    useEffect(() => {
        loadRecipes();
    }, []);

    // DISPLAY the recipes
    return (
        <>
            <h2>List of Ingredients</h2>
            <p>Here is a list to jot down which ingredients were used and for which diet type.</p>
            <p>Click the plus icon to add an ingredient to the list.</p>
            <p>
                You may also edit this list and delete ingredients as you cook along.
            </p>
            <Link to="/addRecipe" id="addIngredient"><p><MdOutlineAdd id="plusSign"></MdOutlineAdd> Click here to add</p></Link>
            <RecipeList 
                recipes={recipes} 
                onEdit={onEditRecipe} 
                onDelete={onDeleteRecipe} 
            />
        </>
    );
}

export default RecipesLog;