# 🚀 Hostinger Deployment Guide

## 📋 Prerequisites
- Hostinger hosting account
- FTP credentials or File Manager access
- Node.js installed locally

## 🔧 Deployment Steps

### Step 1: Build Your Project
```bash
npm run build
```
This creates a `dist` folder with production-ready files.

### Step 2: Upload Files to Hostinger

#### Option A: Using FTP (FileZilla/WinSCP)
1. Connect to your Hostinger FTP
2. Navigate to `public_html` (or your domain folder)
3. Upload **all contents** from the `dist` folder
4. Upload the `.htaccess` file from `public` folder

#### Option B: Using Hostinger File Manager
1. Login to Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html`
4. Upload all files from `dist` folder
5. Upload `.htaccess` from `public` folder

### Step 3: Create Environment Variables on Server

**IMPORTANT:** You must create a `.env` file on your Hostinger server.

1. Access Hostinger File Manager or FTP
2. Navigate to your website root (same level as `index.html`)
3. Create a new file named `.env`
4. Add these exact lines:

```bash
VITE_SUPABASE_URL=https://cidcadsykravywmuvgmk.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpZGNhZHN5a3Jhdnl3bXV2Z21rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwODgyMjUsImV4cCI6MjA4MDY2NDIyNX0.XwYR0pGd96VtnaNZroOvPyZ7YZTfKBNd7aPWfoNRSgM
```

**Note:** The `.htaccess` file already denies access to `.env` files for security.

### Step 4: Verify Deployment

1. Visit your website: `https://yourdomain.com`
2. Test navigation (routes should work without 404 errors)
3. Test contact form: `https://yourdomain.com/contact`
4. Test dashboard: `https://yourdomain.com/dashboard`

### Step 5: Setup Supabase Database

If you haven't already, run this SQL in your Supabase dashboard:

```sql
CREATE TABLE contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new',
  notes TEXT
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Enable insert for all users" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Enable read for authenticated users" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');

CREATE POLICY "Enable update for authenticated users" ON contact_messages
  FOR UPDATE USING (auth.role() = 'authenticated');
```

### Step 6: Create Admin User

1. Go to Supabase → Authentication → Users
2. Click "Add User"
3. Enter email and password
4. Enable "Auto-confirm user"
5. Use these credentials to login at `/dashboard`

## 🔄 Updating Your Site

When you make changes:

```bash
# 1. Make your code changes
# 2. Build the project
npm run build

# 3. Upload ONLY the contents of 'dist' folder to Hostinger
# DO NOT upload: node_modules, src, package.json, etc.
```

## ✅ Deployment Checklist

- [ ] Built project locally (`npm run build`)
- [ ] Uploaded all files from `dist` folder
- [ ] Uploaded `.htaccess` from `public` folder
- [ ] Created `.env` file on server with Supabase credentials
- [ ] Verified website loads at your domain
- [ ] Tested all page routes (Home, Who We Are, Contact, Blog, Dashboard)
- [ ] Created Supabase database table
- [ ] Created admin user in Supabase
- [ ] Tested contact form submission
- [ ] Tested dashboard login

## 🆘 Troubleshooting

### Routes show 404 errors
- Make sure `.htaccess` is uploaded
- Verify Apache mod_rewrite is enabled on Hostinger

### Dashboard shows "Not Configured"
- Verify `.env` file exists on server
- Check that environment variables are correct
- Clear browser cache

### Contact form doesn't work
- Check Supabase database table exists
- Verify RLS policies are set up
- Check browser console for errors

## 📁 File Structure on Server

```
public_html/
├── index.html
├── .htaccess
├── .env              # YOU MUST CREATE THIS
├── assets/
│   ├── index-abc123.js
│   ├── index-def456.css
│   └── ...
├── logo.jpg
└── robots.txt
```

## 🔒 Security Notes

- `.env` file is protected by `.htaccess` (cannot be accessed via browser)
- Never commit `.env.production` to GitHub
- Supabase anon key is safe to expose client-side
- Use Row Level Security in Supabase for data protection
