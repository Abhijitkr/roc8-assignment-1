import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://saxfrmruyqylyyqlhnhg.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_API;
export const supabase = createClient(supabaseUrl, supabaseKey);
