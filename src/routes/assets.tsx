import { createFileRoute, Link } from "@tanstack/react-router";
import React from "react";

export const Route = createFileRoute("/assets")({
  component: AssetsPage,
  head: () => ({ meta: [{ title: "Assets — Style Daddy" }] }),
});

function AssetsPage() {
  // Use Vite's glob to load all images from src/assets as URLs at build time
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - import.meta.glob typings vary by environment
  // Use a relative path so this works in dev and build environments
  const modules = import.meta.glob('../assets/*.{png,jpg,jpeg,webp,gif,svg}', { eager: true, as: 'url' }) as Record<string, string>;
  const images = Object.keys(modules).sort().map((k) => modules[k]);

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="font-display text-3xl mb-4">Project Assets</h1>
      <p className="text-sm text-muted-foreground mb-6">Showing all images from <code>src/assets</code>.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {images.map((src, i) => (
          <div key={i} className="bg-muted rounded overflow-hidden aspect-square">
            <img src={src} alt={`asset-${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Link to="/" className="text-accent underline">Back to home</Link>
      </div>
    </div>
  );
}
