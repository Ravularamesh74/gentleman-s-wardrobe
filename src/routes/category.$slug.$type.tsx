import { createFileRoute, useParams } from "@tanstack/react-router";
import { CategoryPage } from "./category.$slug";
import { CATEGORIES } from "@/lib/catalog";

export const Route = createFileRoute("/category/$slug/$type")({
  component: CategoryTypePage,
  head: ({ params }) => {
    const category = CATEGORIES.find((c) => c.slug === params.slug);
    const typeLabel = params.type?.replace(/-/g, " ");
    const title = category
      ? `${typeLabel ? `${typeLabel} ${category.name}` : category.name} — Style Daddy`
      : "Shop — Style Daddy";

    return {
      meta: [
        { title },
        {
          name: "description",
          content: `Browse premium ${typeLabel ?? "style"} ${category?.name.toLowerCase() ?? "menswear"} at Style Daddy. Modern fit, royal quality, free shipping over ₹999.`,
        },
        { property: "og:title", content: title },
        {
          property: "og:description",
          content: `Discover ${typeLabel ?? "premium"} ${category?.name.toLowerCase() ?? "menswear"} with Style Daddy.`,
        },
      ],
    };
  },
});

function CategoryTypePage() {
  const { type } = useParams({ from: "/category/$slug/$type" });
  return <CategoryPage type={type} />;
}
