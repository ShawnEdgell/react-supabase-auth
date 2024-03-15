import { Auth as SupabaseAuth } from '@supabase/auth-ui-react';
import { supabase } from './supabaseClient';
import { ThemeSupa } from '@supabase/auth-ui-shared';

const Auth = () => {
    return (
        <SupabaseAuth
            supabaseClient={supabase}
            appearance={{ theme: ThemeSupa }}
            providers={['google', 'twitch', 'discord']}
        />
    );
};

export default Auth;
