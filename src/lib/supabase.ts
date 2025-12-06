import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if credentials are configured (more lenient check for production)
export const isSupabaseConfigured = 
  supabaseUrl.length > 0 && 
  supabaseAnonKey.length > 0 &&
  supabaseUrl.includes('supabase.co') &&
  supabaseAnonKey.startsWith('eyJ');

if (!isSupabaseConfigured) {
  console.warn(
    '⚠️ Supabase not configured. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY\n' +
    `URL: ${supabaseUrl ? 'Set ✓' : 'Missing ✗'}\n` +
    `Key: ${supabaseAnonKey ? 'Set ✓' : 'Missing ✗'}\n` +
    'See QUICK_START.md for setup instructions.'
  );
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder'
);

// Database types
export type ContactMessage = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'new' | 'read' | 'replied';
  notes?: string;
};
