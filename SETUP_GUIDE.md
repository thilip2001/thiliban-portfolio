# Environment Setup Guide

This guide will help you set up all the required environment variables for the portfolio.

## Required Environment Variables

### 1. Database Configuration (Neon Postgres)

Already set up! Your Neon Postgres database is connected.

### 2. Admin Password

**Location:** `.env.local`
```bash
NEXT_PUBLIC_ADMIN_PASSWORD=Thiliban@2024
```

✅ **Already configured!**

To change the admin password:
1. Update the value in `.env.local`
2. Restart your development server
3. Login at `/admin` with the new password

### 3. Email Configuration (Resend)

**Location:** `.env.local`
```bash
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=your.email@example.com
```

#### How to Get Resend API Key:

1. **Sign up for Resend:**
   - Go to [https://resend.com](https://resend.com)
   - Create a free account (100 emails/day free)

2. **Get your API Key:**
   - Go to [https://resend.com/api-keys](https://resend.com/api-keys)
   - Click "Create API Key"
   - Copy the API key

3. **Add to `.env.local`:**
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
   CONTACT_EMAIL=thiliban.ravichandran@example.com
   ```

4. **Verify your domain (Optional for production):**
   - For development, you can use `onboarding@resend.dev`
   - For production, verify your own domain in Resend dashboard

5. **Restart your server:**
   ```bash
   npm run dev
   ```

## Testing the Contact Form

1. Make sure `RESEND_API_KEY` is set in `.env.local`
2. Go to `/contact` page
3. Fill out the form and submit
4. You should see a success toast notification
5. Check your email at `CONTACT_EMAIL` for the message

## Features Enabled

### ✅ Admin Authentication
- Password stored securely in environment variable
- Login at `/admin` route
- Protected blog creation, editing, and deletion

### ✅ Blog Management with Toasts
- **Create:** Success toast when blog is published
- **Update:** Success toast when blog is edited
- **Delete:** Success toast when blog is removed
- **Error Handling:** Error toasts with descriptive messages

### ✅ Contact Form
- Integrated with Resend email API
- Form validation with Zod
- Success/error toast notifications
- Email sent to your `CONTACT_EMAIL`

## Important Notes

- Never commit `.env.local` to git (already in `.gitignore`)
- Use `.env.example` as a template for new setups
- Restart dev server after changing environment variables
- For production deployment on Vercel:
  - Add all environment variables in Vercel dashboard
  - Settings → Environment Variables
  - Vercel will automatically load them

## Troubleshooting

### Contact form not working?
- Check if `RESEND_API_KEY` is set correctly
- Verify the API key is valid in Resend dashboard
- Check browser console and terminal for error messages

### Admin login not working?
- Verify `NEXT_PUBLIC_ADMIN_PASSWORD` is set in `.env.local`
- Clear browser localStorage and try again
- Restart the development server

### Toasts not showing?
- Sonner is already installed and configured
- Check if `<Toaster />` is in `app/layout.tsx`
- Clear browser cache and reload

## Next Steps

1. Get your Resend API key from [resend.com](https://resend.com)
2. Add it to `.env.local`
3. Test the contact form
4. Deploy to Vercel with environment variables configured
