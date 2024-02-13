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
        redirect("https://simple-web-app-backend.onrender.com/RecipesLog");
    };


    return (
        <>
        <article>
            <h2>Add an ingredient used here!</h2>
            <p>Here you can add when you made a certain recipe or ingredient you used. In addition, you can
                jot down how many calories the dish is and what type of diet it was for.
            </p>
            
            <table>
                <caption>Add an Ingredient down below</caption>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Diet</th>
                        <th>Calories</th>
                        <th>Timeline</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="ingredient">Ingredients</label>
                        <input
                            type="text"
                            placeholder="Ingredients from a recipe"
                            value={ingredient}
                            required
                            onChange={e => setIngredient(e.target.value)} 
                            id="ingredient" />
                    </td>

                    <td><label for="diet">Diet Type</label>
                        <input
                            type="text"
                            placeholder="What type of diet?"
                            value={diet}
                            required
                            onChange={e => setDiet(e.target.value)} 
                            id="diet" />
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
                            type="text"
                            value={timeline}
                            placeholder="yyyy-mm-dd"
                            onChange={e => setTimeline(e.target.value.slice(0,10))} 
                            pattern= "\d{1,2}\/\d{1,2}\/\d{4}"
                            id="timeline" />
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