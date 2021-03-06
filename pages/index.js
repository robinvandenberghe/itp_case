import Container from "../components/container";
import MoreRecipes from "../components/more-recipes";
import Layout from "../components/layout";
import { getAllRecipes } from "../lib/api";
import Head from "next/head";
import Header from "../components/header";
import HeroRecipe from "../components/hero-recipe";

export default function Index({ allRecipes }) {
  const heroPost = allRecipes[0];
  const morePosts = allRecipes.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Robin's recipes</title>
          <link rel="icon" type="image/x-icon" href="favicon/favicon.ico" />
        </Head>
        <Container>
          <Header />
          {heroPost && <HeroRecipe recipe={heroPost} />}
          {morePosts.length > 0 && <MoreRecipes recipes={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview }) {
  const allRecipes = await getAllRecipes(preview);
  return {
    props: { allRecipes },
  };
}
