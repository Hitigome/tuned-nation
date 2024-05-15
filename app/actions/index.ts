import { createClient } from '@supabase/supabase-js';

export async function getEvents() {
    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
    );
        
    return await supabase.from('Event').select('*');
}
