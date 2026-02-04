// Supabase Configuration
const SUPABASE_URL = 'https://ewtnswgbvjrbaoskpogq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3dG5zd2didmpyYmFvc2twb2dxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAxMDMwMzIsImV4cCI6MjA4NTY3OTAzMn0.FkFAIZTADLC6tE7bi2pdx_seDlB4qKmXEB2_Io8fQpQ';

// Use the global 'supabase' object provided by the CDN
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Make it globally accessible for all our JS files
window.supabase = supabaseClient;
