import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hxawjvhjuscfkyevguka.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh4YXdqdmhqdXNjZmt5ZXZndWthIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk2NjU3MzMsImV4cCI6MjA5NTI0MTczM30.Ul0SETMaSWkep14K9IjH47gIQZ6xZG9wpnu1-nYUwEc";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
