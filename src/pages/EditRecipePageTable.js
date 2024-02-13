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
            <p>Paragraph about this page.</p>
            <table id="recipes">
                <caption>Which recipe are you going to edit?</caption>
                <thead>
                    <tr>
                        <th>Ingredient</th>
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
                        <input
                            type="text"
                            placeholder="Vegetarian, Carbohydarate..."
                            value={diet}
                            onChange={e => setDiet(e.target.value)} 
                            id="diet" />
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
                            type="text"
                            placeholder="yyyy-mm-dd"
                            required
                            value={timeline}
                            onChange={e => setTimeline(e.target.value.slice(0,10))} 
                            pattern= "\d{1,2}\/\d{1,2}\/\d{4}"
                            id="timeline" />
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