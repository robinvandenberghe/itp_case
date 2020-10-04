import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/container";
import RecipeBody from "../../components/recipe-body";
import Header from "../../components/header";
import RecipeHeader from "../../components/recipe-header";
import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
import { getAllRecipesWithSlug, getRecipe } from "../../lib/api";
import RecipeTitle from "../../components/recipe-title";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";

export default function Recipe({ recipe, preview }) {
  const router = useRouter();
  if (!router.isFallback && !recipe?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <RecipeTitle>Loading…</RecipeTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{recipe.title}</title>
                <meta
                  property="og:image"
                  content={recipe.cover.responsiveImage}
                />
              </Head>
              <RecipeHeader
                title={recipe.title}
                coverImage={recipe.cover.responsiveImage}
                time={recipe.cookingtime}
                ingredients={recipe.ingr}
              />
              <RecipeBody content={recipe.steps} />
            </article>
            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getRecipe(params.slug, preview);
  const ingr = await markdownToHtml(data?.recipe.ingredients);
  return {
    props: {
      preview,
      recipe: {
        ...data?.recipe,
        ingr: ingr,
      },
    },
  };
}

export async function getStaticPaths() {
  const allRecipes = await getAllRecipesWithSlug();
  return {
    paths: allRecipes?.map((recipe) => `/recipes/${recipe.slug}`) || [],
    fallback: false,
  };
}
