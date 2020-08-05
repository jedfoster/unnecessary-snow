import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchRecipes, recipesSelector } from "./recipesSlice";

// console.log(fetchRecipes)
export function Recipes() {
  const dispatch = useDispatch();
  const { recipes, loading, hasErrors } = useSelector(recipesSelector);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  const renderRecipes = () => {
    if (loading) return <p>Loading recipes...</p>;
    if (hasErrors) return <p>Cannot display recipes...</p>;

    return recipes.map(recipe => (
      <div key={recipe.idMeal} className="tile">
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt="" />
      </div>
    ));
  };

  return (
    <section>
      <h1>Recipes</h1>
      <div className="content">{renderRecipes()}</div>
    </section>
  );
}
