import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://mhtwgrhevhttmpscphem.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1odHdncmhldmh0dG1wc2NwaGVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwMjIwNzQsImV4cCI6MjA3OTU5ODA3NH0.-OZJrAPxs0DnxkBr8I1mPLxpwfzKo394U3lp6CjWWY8";

export const supabase = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);