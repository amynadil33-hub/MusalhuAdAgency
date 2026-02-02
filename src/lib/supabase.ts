import { createClient } from '@supabase/supabase-js';


// Initialize database client
const supabaseUrl = 'https://gukqphcpwkbotqlgdqwm.databasepad.com';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjI4YzUzZDZhLWQxYzctNDU0Yi1hZjE3LThiYTJiNGVjOTk5YiJ9.eyJwcm9qZWN0SWQiOiJndWtxcGhjcHdrYm90cWxnZHF3bSIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNzcwMDI3NDU5LCJleHAiOjIwODUzODc0NTksImlzcyI6ImZhbW91cy5kYXRhYmFzZXBhZCIsImF1ZCI6ImZhbW91cy5jbGllbnRzIn0.aQBZhrbS2GbPze68CkV6LuJxbdy9FwlG9NCuP_f8X_w';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };