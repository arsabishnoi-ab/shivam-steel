# Shivam Steel Railing & Furniture

The website for the railing workshop in Banashankari, Bengaluru. Business details, photographs, videos, reviews, and SEO text are edited in a few files under `src/config` and `src/data`.

## 1. Install dependencies

```bash
npm install
```

## 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` before you set a public URL or any secret.

## 3. Update business information

Edit `src/config/site.ts`.

- Name, email, address, and both phone numbers are already filled from the business card.
- Ramesh’s number is the floating WhatsApp button and the header call link. Both numbers are shown on the contact page and in the footer.
- Leave hours, social links, `googleReviewUrl`, and `googleMapsEmbedUrl` empty until you have the real values. Empty fields are hidden.
- Do not add a founding year, project count, team size, certification, or warranty unless you can stand behind it. Those fields live in `src/data/about.ts` and stay off the page while blank.
- `NEXT_PUBLIC_SITE_URL` should be the live address, with no slash at the end, before you deploy. Canonical links and the sitemap use it.

## 4. Add photographs

1. Put image files in `public/images/projects`. Use a descriptive file name, such as `banashankari-balcony-ss.jpg`.
2. Add an object to the array in `src/data/projects.ts`.
3. Set `isSample` to `false`, or leave it out.
4. Write a real `alt` description of what the photograph shows.
5. Extra photographs of the same job go in `images`.

The pictures shipped with the site are stock photographs from Pexels and Unsplash, used under those licences so the layout can be reviewed. They are labelled as samples and are not Shivam projects. Delete those objects when your own photographs are in place.

The gallery loads 12 photographs at a time, so a long list does not all download at once.

## 5. Add videos

Edit `src/data/videos.ts`. Use either:

- `youtubeId`: the id only, from `watch?v=`, not the full link
- `src`: a file such as `/videos/balcony.mp4` placed in `public/videos`

YouTube players load after a visitor presses play. Local files use the browser player and do not autoplay. The homepage video block appears only after at least one video is in the list. The projects page says “Project videos will be added here” until then.

## 6. Add genuine reviews

Edit `src/data/reviews.ts`. Copy the commented example and put a real review inside the array.

Do not invent a customer, a star rating, or review text. Do not set `googleVerified` on a review you typed yourself. That flag is only for reviews returned by Google’s API. A hand-copied Google review can use `source: "manual"`, and the site will not call it verified.

If the array is empty, the page says “Customer reviews will be added here.”

## 7. Configure Google review integration

There are two separate settings.

- `googleReviewUrl` in `src/config/site.ts` is the official link that opens your Google review form. The “Write a Google Review” button appears only when this is set. Do not paste a guessed link.
- `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` in `.env.local` turn on the Places API (New). Both stay on the server. The key must never use a `NEXT_PUBLIC_` name. Google returns only a limited number of reviews. If the variables are missing, the site uses the local review file and does not invent a Place ID or a rating.

This site does not add Review or AggregateRating structured data. A business’s own pages are not eligible for those review rich results. FAQ structured data is also omitted, because Google limits FAQ rich results to government and health sites. The questions are still on the page for visitors.

A maintained Google Business Profile, accurate details, genuine reviews, and useful local pages matter more to local search than any tag in this codebase. This website does not promise a ranking.

## 8. Configure contact-form email

The form checks the fields in the browser and again on the server.

- No `CONTACT_PROVIDER` while you are developing: a valid enquiry is saved in `.data/enquiries.json`. The page says email was not sent.
- No provider in production: the page does not show success. It asks the visitor to call or WhatsApp.
- `CONTACT_PROVIDER=resend`: set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`. Success is shown only after Resend accepts the message.

Secrets stay in `.env.local`. They are not written into the pages.

## 9. Update SEO metadata

Default title and description are in `src/config/site.ts`. Each service has its own title and description in `src/data/services.ts`. Other pages set theirs next to the page. Change the words there. Do not repeat city names for their own sake.

`src/app/sitemap.ts` and `src/app/robots.ts` list the public pages. Structured data includes the business name, the Banashankari address, both phone numbers, the email, and Bengaluru as the service area. It does not include a map coordinate, a rating, a price, or an opening hour until you supply hours in the required shape.

## 10. Deploy

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` to the live address in the host’s environment. On Vercel or another Node host, add the same variables from `.env.example` in the project settings, not in the browser code. Point the domain at that deployment.

After launch, replace the sample photographs, add real reviews only when you have them, and keep the Google Business Profile address identical to `src/config/site.ts`.
