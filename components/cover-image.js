import { Image } from "react-datocms";
import cn from "classnames";
import Link from "next/link";

export default function CoverImage({ title, responsiveImage, slug }) {
  const image = (
    <Image
      data={{
        ...responsiveImage,
        alt: `Cover Image for ${title}`,
      }}
      className={cn("shadow-small", {
        "hover:shadow-medium transition-shadow duration-200": slug,
      })}
    />
  );
  return (
    <div className="coverImage">
      {slug ? (
        <Link as={`/recipes/${slug}`} href="/recipes/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
