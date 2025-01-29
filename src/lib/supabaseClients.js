import { createClient } from '@supabase/supabase-js'

// 데이터베이스용 클라이언트
export const dbSupabase = createClient(
  process.env.REACT_APP_DB_SUPABASE_URL,
  process.env.REACT_APP_DB_SUPABASE_ANON_KEY
)

// 인증 및 도메인용 클라이언트
export const authSupabase = createClient(
  process.env.REACT_APP_AUTH_SUPABASE_URL,
  process.env.REACT_APP_AUTH_SUPABASE_ANON_KEY
)

// Test connection
export const testConnection = async () => {
  try {
    const { data, error } = await dbSupabase.from('products').select('count');
    if (error) throw error;
    console.log('Supabase connection successful!');
    return true;
  } catch (error) {
    console.error('Supabase connection failed:', error.message);
    return false;
  }
}

export const testAuthConnection = async () => {
  try {
    const { data, error } = await authSupabase.auth.getSession();
    if (error) throw error;
    console.log('Auth Supabase connection successful!');
    return true;
  } catch (error) {
    console.error('Auth Supabase connection failed:', error.message);
    return false;
  }
} 