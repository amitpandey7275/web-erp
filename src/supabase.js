import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nkgkptxqsrogaiexfuvt.supabase.co';

const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rZ2twdHhxc3JvZ2FpZXhmdXZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MTMxNzEsImV4cCI6MjA3OTI4OTE3MX0.9x2JU_AEApbIYS4477rhk9IhJ-MO-zCMylHFIoqpnXo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

