import {createClient} from "@supabase/supabase-js";

const supabaseUrl = 'https://rbpzpmqyrsawapwksahu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJicHpwbXF5cnNhd2Fwd2tzYWh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU0NjIxOTcsImV4cCI6MTk4MTAzODE5N30.ScUySTn9Ki19CxkGmhYpKwFcMbV1BRs4BY3Wx8F7H0I';

const supabase = createClient(supabaseUrl, supabaseKey)

export {supabase}