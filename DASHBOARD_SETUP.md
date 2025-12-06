# 🎯 Quick Setup Guide for Dashboard

## 📋 Prerequisites
- Supabase account (free tier works)
- Node.js installed
- This project running locally

## ⚡ Quick Start (5 minutes)

### Step 1: Create Supabase Project
1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Fill in:
   - **Name**: GVS Consulting Dashboard
   - **Database Password**: (save this!)
   - **Region**: Choose closest to you
4. Wait 2-3 minutes for project to be ready

### Step 2: Create Database Table
1. In your Supabase project, go to **SQL Editor** (left sidebar)
2. Click **New Query**
3. Copy and paste this SQL:

```sql
-- Create contact_messages table
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  notes TEXT
);

-- Create indexes
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_status ON contact_messages(status);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit contact form
CREATE POLICY "Anyone can submit contact form"
  ON contact_messages FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view
CREATE POLICY "Authenticated users can view all messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated users can update
CREATE POLICY "Authenticated users can update messages"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (true);
```

4. Click **RUN** (or press F5)
5. You should see "Success. No rows returned"

### Step 3: Set Up Authentication
1. Go to **Authentication** → **Users** (left sidebar)
2. Click **Add user** → **Create new user**
3. Fill in:
   - **Email**: admin@gvsconsulting.com (or your preferred email)
   - **Password**: Create a strong password (save this!)
   - **Auto Confirm User**: ✅ Check this box
4. Click **Create user**

### Step 4: Get Your API Keys
1. Go to **Settings** → **API** (left sidebar)
2. Find these two values:
   - **Project URL** (looks like: `https://xxxxxxxxxxxxx.supabase.co`)
   - **anon public** key (under "Project API keys")

### Step 5: Configure Your Project
1. Open `.env.local` in your project root
2. Replace the placeholder values:

```env
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

3. Save the file

### Step 6: Restart Dev Server
```bash
# Stop the server (Ctrl+C) and restart:
npm run dev
```

## ✅ Testing

### Test Contact Form
1. Go to `http://localhost:5173/contact`
2. Fill out the form and submit
3. You should see a success message

### Verify Database
1. In Supabase, go to **Table Editor** → **contact_messages**
2. You should see your test message!

### Test Dashboard
1. Go to `http://localhost:5173/dashboard`
2. Login with:
   - Email: The email you created in Step 3
   - Password: The password you set in Step 3
3. You should see your dashboard with the test message!

## 🎨 Features Included

### Contact Form
✅ Real-time submission to Supabase
✅ Form validation
✅ Loading states
✅ Success/error notifications
✅ Mobile responsive

### Admin Dashboard
✅ Secure login with Supabase Auth
✅ View all messages in a table
✅ Filter by status (new/read/replied)
✅ Search by name, email, or message
✅ Mark messages as read/replied
✅ Add admin notes to messages
✅ Real-time stats (total, new, read, replied)
✅ Mobile responsive design

## 🔒 Security Features

- ✅ Row Level Security (RLS) enabled
- ✅ Public can only INSERT (submit forms)
- ✅ Only authenticated users can VIEW/UPDATE
- ✅ Environment variables for sensitive data
- ✅ .env.local excluded from Git
- ✅ Password-protected dashboard

## 📱 Access URLs

- **Website**: `http://localhost:5173`
- **Contact Form**: `http://localhost:5173/contact`
- **Dashboard**: `http://localhost:5173/dashboard`

## 🚀 Production Deployment

When deploying to production:

1. Add environment variables to your hosting platform:
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Build & deploy → Environment
   
2. Make sure to add:
   ```
   VITE_SUPABASE_URL=your-production-url
   VITE_SUPABASE_ANON_KEY=your-production-key
   ```

3. Never commit `.env.local` to Git!

## ❓ Troubleshooting

### "Missing Supabase environment variables"
- Check that `.env.local` exists in project root
- Verify the variable names start with `VITE_`
- Restart the dev server after adding variables

### Can't login to dashboard
- Verify you created a user in Supabase Authentication
- Check that you clicked "Auto Confirm User"
- Try resetting the password in Supabase dashboard

### Form submission fails
- Check browser console for errors
- Verify the RLS policies are created
- Check that the table exists in Supabase

### No messages showing in dashboard
- Verify you're logged in
- Check Table Editor in Supabase to see if data exists
- Look for errors in browser console

## 📞 Need Help?

Check these resources:
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Discord](https://discord.supabase.com)
- Project file: `SUPABASE_SETUP.md` (detailed technical docs)

## 🎉 You're Done!

Your dashboard is now fully functional with:
- ✅ Contact form submissions saving to database
- ✅ Secure admin dashboard
- ✅ Real-time message management
- ✅ Search and filtering
- ✅ Status tracking

Visit `/dashboard` to manage your contact messages!
