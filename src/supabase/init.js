import { createClient } from '@supabase/supabase-js';

const url = '';
const key = '';

const supabase = createClient(url, key);

export default supabase