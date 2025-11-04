# Vercel Postgres + Prisma Setup Guide

## ✅ What's Been Done:
1. ✅ Installed Prisma and Vercel Postgres
2. ✅ Created Blog model in schema.prisma
3. ✅ Set up Prisma client
4. ✅ Updated API routes to use database

## 🚀 Next Steps:

### 1. Create Vercel Postgres Database (On Vercel Dashboard)

1. Go to your Vercel project dashboard:
   https://vercel.com/thilip2001s-projects/thiliban-portfolio-yokk

2. Click **"Storage"** tab → **"Create Database"**

3. Select **"Postgres"**

4. Choose database name: `thiliban-portfolio-db`

5. Select region: **Choose closest to you**

6. Click **"Create"**

7. Vercel will automatically add environment variables:
   - `POSTGRES_URL`
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`

### 2. Pull Environment Variables Locally

```bash
# Install Vercel CLI if you haven't
npm i -g vercel

# Login to Vercel
vercel login

# Link your project
vercel link

# Pull environment variables
vercel env pull .env.local
```

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Push Database Schema to Vercel Postgres

```bash
npx prisma db push
```

### 5. Test Locally

```bash
npm run dev
```

Your blog API will be available at:
- GET /api/blogs - List all blogs
- POST /api/blogs - Create blog
- GET /api/blogs/[id] - Get single blog
- PUT /api/blogs/[id] - Update blog
- DELETE /api/blogs/[id] - Delete blog

### 6. Update Blog Pages to Use API

Currently your blog pages use Jotai + localStorage. You'll need to:
1. Replace Jotai atoms with API calls
2. Use React Query or fetch for data fetching
3. Remove localStorage persistence

Would you like me to update the blog pages to use the API?

## 📝 Database Schema

```prisma
model Blog {
  id        String   @id @default(cuid())
  title     String
  content   String   @db.Text
  excerpt   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🔒 Security Notes

- Never commit `.env` or `.env.local` files
- Use environment variables for database URLs
- Vercel automatically injects env vars in production

## 💡 Prisma Commands

```bash
# Generate Prisma Client
npx prisma generate

# Push schema changes
npx prisma db push

# Open Prisma Studio (GUI)
npx prisma studio

# Create migration
npx prisma migrate dev --name init

# Reset database
npx prisma db push --force-reset
```
