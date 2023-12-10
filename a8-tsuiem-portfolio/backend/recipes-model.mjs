// Models for the Recipe Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Status 500: Internal Server Error. Unable to connec to the MondoDB Atlas database. Please check the model.mjs code.' });
    } else  {
        console.log('We have successfully accessed the database! Feel free to add documents.');
    }
});

// SCHEMA: Define the collection's schema.
const recipeSchema = mongoose.Schema({
	ingredient:    { type: String, required: true },
	diet:          { type: String, required: true },
	calories:      { type: Number, min:[5, 'A value below five is not allowed!'], required: true },
    timeline:      { type: Date, min: '04-10-2023', required: true}
});

// Compile the model from the schema 
// by defining the collection name "movies".
const Recipe = mongoose.model('Recipe', recipeSchema); //automatically lowercases and adds an 's'


// CREATE model *****************************************
const createRecipe = async (ingredient, diet, calories, timeline) => {
    const recipe = new Recipe({ 
        ingredient: ingredient, 
        diet: diet, 
        calories: calories,
        timeline: timeline
    });
    return recipe.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveRecipes = async () => {
    const query = Recipe.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRecipeByID = async (_id) => {
    const query = Recipe.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRecipeById = async (_id) => {
    const result = await Recipe.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRecipe = async (_id, ingredient, diet, calories, timeline) => {
    const result = await Recipe.replaceOne({_id: _id }, {
        ingredient: ingredient, 
        diet: diet, 
        calories: calories,
        timeline: timeline
    });
    return { 
        _id: _id, 
        ingredient: ingredient, 
        diet: diet, 
        calories: calories,
        timeline: timeline
    }
}

// EXPORT the variables for use in the controller file.
export { createRecipe, retrieveRecipes, retrieveRecipeByID, updateRecipe, deleteRecipeById }