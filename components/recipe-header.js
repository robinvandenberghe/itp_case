import CoverImage from "./cover-image";
import PostTitle from "./recipe-title";
import markdownToHtml from "../lib/markdownToHtml";

export default function RecipeHeader({ title, coverImage, time, ingredients }) {
  // const ingr = markdownToHtml(ingredients);
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} responsiveImage={coverImage} />
      </div>
      <div className="recipeDetail">
        <span className="timeLabel">
          <img src="/images/clock.svg" alt="clock icon" />
          {` ${time}`}
        </span>
      </div>

      {/* <div>{ingr}</div> */}
    </>
  );
}