import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditRecipePageTable = ({ recipeToEdit }) => {
 
    const [ingredient, setIngredient]   = useState(recipeToEdit.ingredient);
    const [diet, setDiet]               = useState(recipeToEdit.diet);
    const [calories, setCalories]       = useState(recipeToEdit.calories);
    const [timeline, setTimeline]       = useState(recipeToEdit.timeline.slice(0,10));
    
    const redirect = useNavigate();

    const editRecipe = async () => {
        const response = await fetch(`https://simple-web-app-backend.onrender.com/Recipe/${recipeToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                ingredient: ingredient, 
                diet: diet, 
                calories: calories,
                timeline: timeline
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Status ${response.status}: Recipe was successfully edited!`);
        } else {
            const errMessage = await response.json();
            alert(`Hmm... please try to edit again. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/RecipesLog");
    }

    return (
        <>
        <article>
            <h2>Edit a recipe</h2>
            <table id="recipes">
                <caption>Which recipe are you going to edit?</caption>
                <thead>
                    <tr>
                        <th>Recipe</th>
                        <th>Diet</th>
                        <th>Calories</th>
                        <th>Timeline</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="Ingredient">Name of Recipe</label>
                        <input
                            type="text"
                            placeholder="Cheese, pumpkin, etc..."
                            value={ingredient}
                            onChange={e => setIngredient(e.target.value)} 
                            id="Ingredient" />
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

                    <td><label for="calories">Add calories</label>
                        <input
                            type="number"
                            value={calories}
                            placeholder="How many calories is the recipe?"
                            onChange={e => setCalories(e.target.value)} 
                            id="calories" />
                    </td>

                    <td><label for="timeline">Date Cooked</label>
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
                    <label for="submit">Edit</label>
                        <button
                            type="submit"
                            onClick={editRecipe}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditRecipePageTable;