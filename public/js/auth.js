// Auth handling
async function signup(email, password) {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
    });
    if (error) throw error;
    return data;
}

async function login(email, password) {
    console.log('Attempting login for:', email);
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) {
        console.error('Supabase login error:', error);
        throw error;
    }
    console.log('Login successful, data:', data);
    return data;
}

async function logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    window.location.href = './login.html';
}

async function checkUser() {
    const { data: { user } } = await supabase.auth.getUser();
    return user;
}

async function getUserRole(userId) {
    console.log('Fetching role for UID:', userId);
    try {
        const { data, error } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', userId)
            .maybeSingle();

        if (error) {
            console.error('Error in getUserRole query:', error);
            throw error;
        }

        console.log('Profile data fetched:', data);
        const role = data ? data.role.trim().toLowerCase() : 'user';
        console.log('Final determined role:', role);
        return role;
    } catch (err) {
        console.error('Error fetching role:', err);
        return 'user';
    }
}
