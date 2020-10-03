import "isomorphic-unfetch";

const API_URL = "https://graphql.datocms.com/";
const API_TOKEN = process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN;

// See: https://www.datocms.com/blog/offer-responsive-progressive-lqip-images-in-2020
const responsiveImageFragment = `
  fragment responsiveImageFragment on ResponsiveImage {
  srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    bgColor
    base64
  }
`;

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(API_URL + (preview ? "/preview" : ""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getPreviewPostBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($slug: String) {
      post(filter: {slug: {eq: $slug}}) {
        slug
      }
    }`,
    {
      preview: true,
      variables: {
        slug,
      },
    }
  );
  return data?.recipe;
}

export async function getAllRecipesWithSlug() {
  const data = await fetchAPI(`
    {
      allRecipes {
        slug
      }
    }
  `);
  return data?.allRecipes;
}

export async function getAllRecipes(preview) {
  const data = await fetchAPI(
    `
    query getAll {
      allRecipes {
        slug
        title
        intro
        cover {
          responsiveImage(imgixParams: {fm: jpg, fit: fill, w: 2000, h: 1000 }) {
            ...responsiveImageFragment
          }
        }
        recommended
        ingredients
        cookingtime
        steps {
          ... on SubtitleRecord {
            subtitle
          }
          ... on StepRecord {
            step(markdown: true)
            stepnumber
          }
        }
      }
    }
    ${responsiveImageFragment}

  `,
    { preview }
  );
  return data?.allRecipes;
}

export async function getRecipe(slug, preview) {
  const data = await fetchAPI(
    `
  query RecipeBySlug($slug: String) {
    recipe(filter: {slug: {eq: $slug}}) {
      slug
      title
      intro
      cover {
        responsiveImage(imgixParams: {fm: jpg, fit: fill, w: 2000, h: 1000 }) {
          ...responsiveImageFragment
        }
      }
      recommended
      ingredients
      cookingtime
      steps {
        ... on SubtitleRecord {
          subtitle
        }
        ... on StepRecord {
          step(markdown: true)
          stepnumber
        }
      }
    }
  }

  ${responsiveImageFragment}
  `,
    {
      preview,
      variables: {
        slug,
      },
    }
  );
  return data;
}
