# 🚀 Dashboard Quick Reference

## 📍 URLs
- **Dashboard**: `/dashboard`
- **Contact Form**: `/contact`

## 🔑 Required Setup Information

You need these 2 values from Supabase:

### 1. VITE_SUPABASE_URL
**Where to find it:**
1. Login to https://supabase.com
2. Select your project
3. Go to Settings (⚙️) → API
4. Copy "Project URL"

**Format:** `https://xxxxxxxxxxxxx.supabase.co`

### 2. VITE_SUPABASE_ANON_KEY  
**Where to find it:**
1. Same page (Settings → API)
2. Under "Project API keys"
3. Copy the "anon" / "public" key

**Format:** `eyJhbGci...` (long string)

---

## ⚡ Quick Setup (3 Steps)

### Step 1: Create Supabase Project
1. Go to https://supabase.com → New Project
2. Wait 2 minutes for setup

### Step 2: Run SQL
1. SQL Editor → New Query
2. Copy/paste SQL from `SUPABASE_SETUP.md`
3. Click RUN

### Step 3: Configure Project
1. Get your URL and Key (see above)
2. Open `.env.local`
3. Replace placeholder values
4. Restart dev server: `npm run dev`

---

## 🎯 SQL to Run (Copy This)

```sql
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

CREATE INDEX idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX idx_contact_messages_status ON contact_messages(status);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_messages FOR INSERT TO public WITH CHECK (true);

CREATE POLICY "Authenticated users can view all messages"
  ON contact_messages FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated users can update messages"
  ON contact_messages FOR UPDATE TO authenticated USING (true);
```

---

## 👤 Create Admin User

1. Supabase Dashboard → Authentication → Users
2. Click "Add user" → "Create new user"
3. Fill in:
   - Email: `admin@gvsconsulting.com`
   - Password: (your secure password)
   - ✅ Check "Auto Confirm User"
4. Click "Create user"

---

## ✅ Test It

### 1. Test Contact Form
- Go to `/contact`
- Submit a test message
- Should see success notification

### 2. Verify Database  
- Supabase → Table Editor → contact_messages
- Your message should appear

### 3. Test Dashboard
- Go to `/dashboard`
- Login with admin credentials
- See your test message

---

## 🆘 Common Issues

| Problem | Solution |
|---------|----------|
| "Missing environment variables" | Check `.env.local` exists and restart dev server |
| Can't login | Verify user exists in Authentication and "Auto Confirm" was checked |
| No messages showing | Check if logged in, verify data in Supabase Table Editor |
| Form won't submit | Check browser console for errors, verify SQL policies ran |

---

## 📞 Support

For detailed help, see:
- `DASHBOARD_SETUP.md` - Full setup guide
- `SUPABASE_SETUP.md` - Technical details
- `IMPLEMENTATION_SUMMARY.md` - Complete overview

---

## 🎉 That's It!

Once you have:
1. ✅ Supabase project created
2. ✅ SQL executed
3. ✅ Admin user created
4. ✅ `.env.local` configured

You're ready to use the dashboard at `/dashboard`!
