// Controllers for the Movie Collection

import 'dotenv/config';
import express from 'express';
import * as Recipe from './recipes-model.mjs'; //Used same name Recipe from collection and imported the model file

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/Recipe', (req,res) => { 
    Recipe.createRecipe(
        req.body.ingredient,
        req.body.diet, 
        req.body.calories, 
        req.body.timeline
        )
        .then(recipe => {
            res.status(201).json(recipe); //successfully added a recipe
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Status 400: Bad request because there is a client error, example missing some required parameter or has a typo for creating a recipe.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/Recipe', (req, res) => {
    Recipe.retrieveRecipes()
        .then(recipe => { 
            if (recipe !== null) {
                res.json(recipe);
            } else {
                res.status(404).json({ Error: 'Status 404: Not Found. The requested resource is not found on the server. Please come back again.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Status 400: Status 400: Bad request because there is a client error, example missing some required parameter or has a typo for retrieving a recipe.' });
        });
});


// RETRIEVE by ID controller
app.get('/Recipe/:_id', (req, res) => {
    Recipe.retrieveRecipeByID(req.params._id)
    .then(recipe => { 
        if (recipe !== null) {
            res.json(recipe);
        } else {
            res.status(404).json({ Error: 'Status 404: Not Found. The requested resource is not found on the server.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Status 400: Status 400: Bad request because there is a client error, example missing some required parameter or has a typo for retrieving a recipe by the ID.' });
    });

});


// UPDATE controller ************************************
app.put('/Recipe/:_id', (req, res) => {
    Recipe.updateRecipe(
        req.params._id, 
        req.body.ingredient, 
        req.body.diet, 
        req.body.calories,
        req.body.timeline
    )
    .then(recipe => {
        res.json(recipe);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'Status 400: Bad request because there is a client error, example missing some required parameter or has a typo for updating the recipe.' });
    });
});


// DELETE Controller ******************************
app.delete('/Recipe/:_id', (req, res) => {
    Recipe.deleteRecipeById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Status 200: No Content. Server successfully processed a delete request. Good job! ' });
            } else {
                res.status(404).json({ Error: 'Status 404: Not Found. The requested resource is not found on the server. Please come back again.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Error encountered with deleting a recipe from the database.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});