import { authSupabase } from './supabaseClients'

export const signIn = async (email, password) => {
    const { data, error } = await authSupabase.auth.signInWithPassword({
        email,
        password
    })
    return { data, error }
}

export const signOut = async () => {
    const { error } = await authSupabase.auth.signOut()
    return { error }
}

export const handleSocialLogin = async (provider) => {
  try {
    const { data, error } = await authSupabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/register`
      }
    });

    if (error) throw error;
    return { data, error: null };
  } catch (error) {
    console.error('Social login error:', error);
    return { data: null, error };
  }
}; 