import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddRecipePageTable = () => {

    const [ingredient, setIngredient]   = useState('Squash');
    const [diet, setDiet]               = useState('Vegetarian');
    const [calories, setCalories]       = useState('135');
    const [timeline, setTimeline]       = useState('04-11-2023');
    
    const redirect = useNavigate();

    const addRecipe = async () => {
        const newRecipe = { ingredient, diet, calories, timeline };
        const response = await fetch('https://simple-web-app-backend.onrender.com/Recipe', {
            method: 'post',
            body: JSON.stringify(newRecipe),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Recipe added to the database!`);
        } else {
            alert(`Status: ${response.status} Hmm... nothing was added. Please fill in all required fields and try again.`);
        }
        redirect("/RecipesLog");
    };


    return (
        <>
        <article>
            <h2>Add an ingredient used here!</h2>
            <p>Here you can add when you made a certain recipe. In addition, you can
                jot down the calories and diet for this type of recipe.
            </p>
            
            <table>
                <caption>Add an Ingredient down below</caption>
                <thead>
                    <tr>
                        <th>Recipe</th>
                        <th>Diet</th>
                        <th>Calories</th>
                        <th>Timeline</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="Recipe Name">Ingredients</label>
                        <input
                            type="text"
                            placeholder="Ingredients from a recipe"
                            value={ingredient}
                            required
                            onChange={e => setIngredient(e.target.value)} 
                            id="ingredient" />
                    </td>

                    <td><label for="diet">Diet Type</label>
                    <select
                            type="text"
                            value={diet}
                            required
                            onChange={e => setDiet(e.target.value)} 
                            id="diet" >
                            <option value="regular">Regular</option>
                            <option value="vegetarian">Vegetarian</option>
                            <option value="keto">Keto</option>
                            <option value="carnivore">Carnivore</option>
                            <option value="vegan">Vegan</option>
                            <option value="lowcarb">Low-Carb</option>
                            <option value="paleo">Paleo</option>
                            <option value="medit">Mediterranean</option>
                        </select>
                    </td>

                    <td><label for="calories">How many calories?</label>
                        <input
                            type="number"
                            value={calories}
                            required
                            onChange={e => setCalories(e.target.value)} 
                            id="calories" />
                    </td>

                    <td><label for="timeline">When was this made?</label>
                        <input
                                type="date"
                                value={timeline}
                                placeholder="yyyy-mm-dd"
                                onChange={e => setTimeline(e.target.value.slice(0,10))} 
                                pattern= "\d{2}/\d{2}/\d{4}"
                                id="timeline"
                                required
                                min="1993-01-01"
                                max="2025-12-30" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={addRecipe}
                            id="submit"
                        >Add</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddRecipePageTable;