// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import TabNav from './components/TabNav';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 
// import ProductPage from './data/products.js';

import HomePage from './pages/HomePage.js';
import RecipesLog from './pages/RecipesLog';
import TopicsPage from './pages/TopicsPage.js';

// For Create and Edit, use the form OR table design; not both.
// If your schema requires LONG data input, then use the FORM design:
// import AddRecipePageForm from './pages/AddRecipePageForm.js';
// import EditRecipePageForm from './pages/EditRecipePageForm.js';

// If your schema requires SHORT data input, then use the TABLE design.
import EditRecipePageTable from './pages/EditRecipePageTable.js';
import AddRecipePageTable from './pages/AddRecipePageTable.js';


// Define the function that renders the content in Routes, using State.
function App() {

  const [Recipe, setRecipe] = useState([])

  return (
    <>
      <BrowserRouter>
    
          <header>
            <h1>
              {<img src="android-chrome-192x192.png" alt="Healthcare Logo"/>}
              Emily Tsui
            </h1>
            <p>A website created with MongoDB, Express, React, and Node.js.</p>
          </header>

          <TabNav />
          
            

          <main>
            <section>
                <Routes> 
                    
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    
                    <Route path="/" element={<HomePage />} />
                    <Route path="/RecipesLog" element={<RecipesLog setRecipe={setRecipe}/>} />
                    <Route path="/TopicsPage" element={<TopicsPage />} />
                 
                    {/* Use these if your schema requires LONG data input: */}
                    <Route path="/addRecipe" element={<AddRecipePageTable />} /> 
                    <Route path="/updateRecipe" element={<EditRecipePageTable recipeToEdit={Recipe} />} />

                    {/* Or these if your schema requires SHORT data input: */}
                    {/* <Route path="/create" element={<AddRecipePageForm />} />   
                     <Route path="/update" element={<EditRecipePageForm movieToEdit={recipe} />} />*/}
                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2024 Emily Tsui</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;