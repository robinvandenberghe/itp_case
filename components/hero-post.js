import Avatar from "../components/avatar";
import Date from "../components/date";
import CoverImage from "../components/cover-image";
import Link from "next/link";

export default function HeroPost({ recipe }) {
  return (
    <section>
      <div className="heroRecipe">
        {recipe.recommended ? (
          <div className="recommendedLabel">
            <span className="recommendedText">Recommended</span>
          </div>
        ) : (
          ``
        )}
        <CoverImage
          title={recipe.title}
          responsiveImage={recipe.cover.responsiveImage}
          slug={recipe.slug}
        />
        <div className="recipeInfo">
          <h3>{recipe.title}</h3>
          <span className="timeLabel">
            <img src="images/clock.svg" alt="clock icon" />
            {` ${recipe.cookingtime}`}
          </span>
          <p>{recipe.intro}</p>
          <Link href={`/recipes/${recipe.slug}`}>
            <a href={`/recipes/${recipe.slug}`} className="discoverButton">
              {`discover >`}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
