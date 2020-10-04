import RecipePreview from "./recipe-preview";

export default function MoreRecipes({ recipes }) {
  return (
    <section>
      <h2 className="allTitle">All recipes</h2>
      <div className="previewGrid">
        {recipes.map((recipe, index) => (
          <RecipePreview key={index} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
