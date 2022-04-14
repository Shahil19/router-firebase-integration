import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();

    return (
        <div style={{ background: '#efefef' }}>
            <h3>Please Login</h3>
            
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Sign in with Google</button>
            </div>

            <form >
                <input type="email" name="" placeholder='abc@mail.com' />
                <br />
                <input type="password" name="" placeholder='*****' />
                <br />
                <input type="submit" value='Log in' name="" />
            </form>
        </div>
    );
};

export default Login;