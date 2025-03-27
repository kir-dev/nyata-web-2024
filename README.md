# nyata-web

This site is built with Next.js and Tailwind CSS. It is deployed to Vercel. Only Sendgrid API is used for sending emails. No CMS is used.

## Getting Started

Have Node.js v20 set up. Enable corepack.

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Copy the `.env.example` file to `.env.local` and fill in the required environment variables.

## Good to know during development

- There's an env var `NEXT_PUBLIC_APPLICATION_STATUS` (with an URL env var) that can be set to a status
  - right `open` will make the application form button available
  - any other value will make the application form unavailable
- Similarly there's an env var `NEXT_PUBLIC_WORKSHOP_STATUS` (with an URL env var) that can be set to a status
  - right `open` will make the application form button available
  - any other value will make the application form unavailable
- There's an env var `NEXT_PUBLIC_SHOW_PROGRAMS_TABLE` that can be set to `true` to show the programs table on the homepage
  - you can reach the programs table at `src/components/program-table/ProgramsTable.tsx` and change the content as needed
- Some other content changes:
  - `src/components/carousel/image-carousel-section.tsx` to change the images in the carousel, and also upload the to the `public/carousel-images` folder

> [!CAUTION]
> Anytime you change an env var on Vercel, please rebuild the latest deployment as the whole SPA needs to be rebuilt (static site).

- The Sendgrid API key is stored in the Vercel environment variables. It is mine ([triszt4n](https://github.com/triszt4n)) and I somehow set it up in the past to be able to send emails from the `nyata2024-noreply@simonyi.bme.hu` email address. If you want to use your own, you can replace it in the Vercel environment variables.
