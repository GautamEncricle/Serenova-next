# Serenova Next.js Project

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Structure

```
serenova-next/
├── .gitignore
├── db.json (JSON database file)
├── src/
│   ├── app/
│   │   └── (pages)/
│   │       ├── contact/
│   │       │   └── page.tsx
│   │       └── about/
│   │           └── page.tsx
│   ├── components/
│   │   ├── Marquee/
│   │   │   └── Marquee.tsx
│   │   ├── Journal/
│   │   │   └── Journal.tsx
│   │   └── Home/
│   │       └── Home.tsx
│   ├── lib/
│   │   ├── api/
│   │   │   └── home.ts
│   │   └── axiosClient.ts
│   └── types/
│       ├── homeTypes.ts
│       └── contactTypes.ts
```

## Key Components

### JSON Server

This project uses JSON Server as a mock API backend. JSON Server creates a full fake API with zero coding.

**Features:**

- Provides a REST API endpoint at `http://localhost:3001`
- Uses `db.json` file as the database
- Support only GET method for the fetch the product or data.

**To start JSON Server:**

```bash
npm run json-server
```

This will start the JSON Server on port 3001, watching the `db.json` file for changes.

### axiosClient

Located at `src/lib/axiosClient.ts`:

```typescript
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
```

**Features:**

- Configured with base URL `http://localhost:3001` for API calls
- Sets default Content-Type header to `application/json`
- Provides a reusable axios instance for consistent API requests

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
