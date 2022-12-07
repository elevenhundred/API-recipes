import "./App.css";
import { useState, useEffect } from "react";
import video from "./food.mp4";
import MyRecipeComponent from "./MyRecipeComponent";

export default function App() {
  //const [recipe, setRecipe] = useState([]);
  const API_ID = "68fe7df8";
  const API_KEY = "897093fcd96451ca971af75983161983";
  const [wordSubmitted, setWordSubmitted] = useState("");

  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  
  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  };

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  };

  useEffect(() => {
    const getRecipe = async () => {
      const result = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      const data = await result.json();
      console.log(data.hits);
      setMyRecipes(data.hits);
    };
    getRecipe();
  }, [wordSubmitted]);

  return (
    <div className="App">
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <div className="header">
        <h1>Find a recipe</h1>
      </div>
      <div className="searchForm">
        <form onSubmit={finalSearch} className="searchForm">
          <input
            type="text"
            className="search"
            placeholder="search..."
            value={mySearch}
            onChange={myRecipeSearch}
          />
          <button>search</button>
        </form>
      </div>
      <div>
        <div className="array">
          {myRecipes.map((element) => (
            <MyRecipeComponent
              label={element.recipe.label}
              image={element.recipe.image}
              calories={element.recipe.calories}
              ingredients={element.recipe.ingredientLines}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
