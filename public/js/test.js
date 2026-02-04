import { supabase } from './supabase.js';

const testConnection = async () => {
  const { data, error } = await supabase.from('profiles').select('*');

  if (error) {
    console.error('❌ Supabase error:', error.message);
  } else {
    console.log('✅ Supabase connected!', data);
  }
};

testConnection();
