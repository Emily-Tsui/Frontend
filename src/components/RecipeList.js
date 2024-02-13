import React from 'react';
import RecipeRow from './RecipeRow';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function RecipeList({ recipes, onDelete, onEdit }) {
    return (
        <table id="recipes">
            <caption>Log and Edit your Recipes below!</caption>
            <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Diet</th>
                    <th>Calories</th>
                    <th>Timeline</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map((recipes, i) => 
                    <RecipeRow
                        recipe={recipes} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default RecipeList;
