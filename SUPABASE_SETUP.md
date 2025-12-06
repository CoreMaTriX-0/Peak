# Supabase Setup Instructions

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Sign up or log in
3. Create a new project
4. Save your project credentials

## Step 2: Create Database Table

Run this SQL in your Supabase SQL Editor:

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

-- Create index for faster queries
CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_status ON contact_messages(status);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for contact form)
CREATE POLICY "Anyone can submit contact form"
  ON contact_messages
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Only authenticated users can view (for dashboard)
-- Note: You'll need to set up authentication for this
CREATE POLICY "Authenticated users can view all messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users can update
CREATE POLICY "Authenticated users can update messages"
  ON contact_messages
  FOR UPDATE
  TO authenticated
  USING (true);
```

## Step 3: Get Your Credentials

1. Go to Project Settings → API
2. Copy your **Project URL** (e.g., `https://xxxxx.supabase.co`)
3. Copy your **anon/public** key

## Step 4: Configure Environment Variables

1. Open `.env.local` in your project root
2. Replace the placeholder values:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## Step 5: Set Up Authentication (Optional - for Dashboard Access)

### Option A: Simple Password Protection (Recommended for internal use)

Create a simple auth table:

```sql
-- Create admin users table
CREATE TABLE admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert an admin user (change email and use a proper hash in production)
INSERT INTO admin_users (email, password_hash)
VALUES ('admin@gvsconsulting.com', crypt('your-secure-password', gen_salt('bf')));
```

### Option B: Use Supabase Auth (More secure)

1. Go to Authentication → Providers
2. Enable Email provider
3. Add your email as a user in Authentication → Users
4. The dashboard will use Supabase's built-in authentication

## Step 6: Test the Setup

1. Restart your dev server: `npm run dev`
2. Visit the contact page and submit a test message
3. Check Supabase Dashboard → Table Editor → contact_messages
4. You should see your test message

## Database Schema

### contact_messages table

| Column     | Type      | Description                          |
|------------|-----------|--------------------------------------|
| id         | UUID      | Primary key (auto-generated)         |
| created_at | TIMESTAMP | When message was submitted           |
| name       | TEXT      | Sender's name                        |
| email      | TEXT      | Sender's email                       |
| phone      | TEXT      | Sender's phone number                |
| message    | TEXT      | Message content                      |
| status     | TEXT      | 'new', 'read', or 'replied'          |
| notes      | TEXT      | Admin notes (optional)               |

## Security Notes

- **.env.local is in .gitignore** - Never commit credentials to Git
- **RLS is enabled** - Only authenticated users can view messages
- **Public can insert** - Contact form works without authentication
- **Use environment variables** - Never hardcode credentials
