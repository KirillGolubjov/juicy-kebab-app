import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://koyjmfdhfztfrlvtyoua.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtveWptZmRoZnp0ZnJsdnR5b3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwOTExOTIsImV4cCI6MjAyMTY2NzE5Mn0.EAKreL5IV-AGDV-LBp2BAalb2bhErFSHuoJyhcDn2Ug';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
