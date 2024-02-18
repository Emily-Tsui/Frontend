import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";


function RecipeRow({ recipe, onEdit, onDelete }) {
    return (
        <tr>
            <td title="Name of ingredient you used for your recipe.">{recipe.ingredient}</td>
            <td title="What kind of diet is your recipe?">{recipe.diet}</td>
            <td title="How many calories will this ingredient and recipe combined be?">{recipe.calories}</td>
            <td title="When did you make this recipe?">{recipe.timeline.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><MdDeleteOutline id="delete" onClick={() => onDelete(recipe._id)} /></td>
            <td><MdOutlineDriveFileRenameOutline id="edit" onClick={() => onEdit(recipe)} /></td>
        </tr>
    );
}

export default RecipeRow;