import CoverImage from "./cover-image";
import RecipeTitle from "./recipe-title";
import markdownToHtml from "../lib/markdownToHtml";
import Link from "next/link";

export default function RecipeHeader({ title, coverImage, time, ingredients }) {
  return (
    <>
      <RecipeTitle>{title}</RecipeTitle>
      <div className="recipeDetail">
        <Link href="/">
          <a href="/" className="backLink">{`< back`}</a>
        </Link>
      </div>

      <div className="recipeCover">
        <CoverImage title={title} responsiveImage={coverImage} />
      </div>
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
