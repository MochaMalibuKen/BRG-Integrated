# Vercel deployment

1. In Vercel, add a new project and import `MochaMalibuKen/BRG-Integrated`.
2. Select the **Next.js** framework preset and leave the root directory at the repository root.
3. Use the default install command, `npm run build`, and the default output directory. Remove any previous Vinext or `dist` overrides.
4. Deploy and open the assigned Vercel URL. Check desktop and mobile layouts and review Deployment Protection before sharing with the client.

The quote form is a demonstration and does not deliver inquiries yet.

## Connect a GoDaddy domain later

Add the domain in the Vercel project's **Settings → Domains**. In GoDaddy DNS, apply the exact records Vercel displays for that domain. Preserve existing mail records. No domain transfer is required.

Set `SITE_URL` in Vercel to the final HTTPS domain and redeploy so social image URLs use that domain. Until then, the application uses Vercel's deployment URL.
