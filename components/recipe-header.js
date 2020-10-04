import CoverImage from "./cover-image";
import RecipeTitle from "./recipe-title";
import markdownToHtml from "../lib/markdownToHtml";

export default function RecipeHeader({ title, coverImage, time, ingredients }) {
  return (
    <>
      <RecipeTitle>{title}</RecipeTitle>
      <CoverImage title={title} responsiveImage={coverImage} />
      <div className="recipeDetail">
        <span className="timeLabel">
          <img src="/images/clock.svg" alt="clock icon" />
          {` ${time}`}
        </span>
        <div className="recipeIngredients">
          <h4>Ingredients</h4>
          <div dangerouslySetInnerHTML={{ __html: ingredients }}></div>
        </div>
      </div>
    </>
  );
}
