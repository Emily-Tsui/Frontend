import React from 'react';
import { Link } from 'react-router-dom';
import { MdCottage } from "react-icons/md";
import { MdDining } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";


// Change the function names and links
// to fit your portfolio topic.

function TabNav() {
  return (
    <nav>
        {/* Add links to Home, Topics, Gallery, Contact, and Staff Pages  */}
        <Link to="/" exact><MdCottage /> Home</Link>
        <Link to="/RecipesLog"><MdDining /> Log Recipes</Link>
        <Link to="/TopicsPage"><MdLibraryBooks /> Web Dev Topics</Link>
    </nav>
  );
}

export default TabNav;
