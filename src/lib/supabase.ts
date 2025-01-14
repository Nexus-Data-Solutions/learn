import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cnewlgksrjfurhkcsvwj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNuZXdsZ2tzcmpmdXJoa2NzdndqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4MzYzODksImV4cCI6MjA1MjQxMjM4OX0.ovqvMXpYVJ9VF3yhhF_aYf03aJjlhmRzm4o1QcP9j0s';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);