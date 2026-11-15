import { bindings, defineConfig, triggers } from "cf/config";

/**
 * This migration needs manual work. Resolve every TODO in this file, then remove the error below.
 */
/**
 * TODO(@cloudflare): cf migrate: config.routes.0: A route uses a zone ID. Verify the generated fetch trigger target.
 */
throw new Error("Migration incomplete. Resolve every cf migrate TODO in `cloudflare.config.ts`.");

export default defineConfig({
  worker: {
    name: "reds-photo",
    compatibilityDate: "2026-11-01",
    compatibilityFlags: ["global_fetch_strictly_public"],
    entrypoint: "@astrojs/cloudflare/entrypoints/server",
    observability: {
      enabled: true,
    },
    triggers: [
      triggers.fetch({
        pattern: "reds.photo",
        zone: "b72ed4069a1f981caa7135f69a0ce6f4",
      }),
    ],
    env: {
      ASSETS: bindings.assets(),
    },
    /**
     * TODO(@cloudflare): cf migrate: A route uses a zone ID. Verify the generated fetch trigger target.
     */
  },
});
