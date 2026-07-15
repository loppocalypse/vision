import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const getMockSupabase = () => {
  return {
    from: () => ({
      insert: async () => {
        return { 
          error: { 
            message: "Supabase credentials are not configured. Local mock fallback enabled." 
          } 
        };
      }
    })
  } as any;
};

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn(
    "Supabase credentials are missing. Falling back to mock client during build/local runs."
  );
}

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : getMockSupabase();

