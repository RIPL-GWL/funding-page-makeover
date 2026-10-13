import { createFileRoute } from "@tanstack/react-router";
import { publicPages, SITE_URL } from "@/frontend/content/site-pages";
import { services } from "@/frontend/features/our-services/content";
import { countries } from "@/frontend/features/global-presence/content";
import { investors } from "@/frontend/features/investors/data";
import { mentors, team } from "@/frontend/features/people/data";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          ...publicPages.map((p) => p.path),
          ...countries.map((c) => `/global-presence/${c.slug}`),
          ...services.map((s) => `/our-services/${s.id}`),
          ...investors.map((i) => `/our-investors/${i.slug}`),
          ...mentors.map((m) => `/our-mentors/${m.slug}`),
          ...team.map((t) => `/our-team/${t.slug}`),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join("\n")}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
