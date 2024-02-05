import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://krncxsrkclpxsiawilgz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtybmN4c3JrY2xweHNpYXdpbGd6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4OTc0MzksImV4cCI6MjAyMjQ3MzQzOX0.4TCKeqBV3CUZrOr2vkA9aAygCwYyTHWC678ax5pep5c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
