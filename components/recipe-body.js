import markdownStyles from "./markdown-styles.module.css";

export default function RecipeBody({ content }) {
  return (
    <div className="recipeDetail recipeSteps">
      {content.map((item, index) => {
        switch (item.subtitle !== undefined) {
          case true:
            return (
              <h4 id={index} className="recipeSubtitle">
                {item.subtitle}
              </h4>
            );

          case false:
            return (
              <div key={index} className="recipeStep">
                <span className="stepNumber">{item.stepnumber}</span>
                <span
                  className="stepContent"
                  dangerouslySetInnerHTML={{ __html: item.step }}
                ></span>
              </div>
            );
        }
      })}
    </div>
  );
}
