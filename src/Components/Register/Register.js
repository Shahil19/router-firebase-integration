import React, { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const formSubmit = event => {
        event.preventDefault();
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    return (
        <div style={{ background: '#b1b1b1' }}>
            <h3>Please Register</h3>
            <form onSubmit={formSubmit}>
                <input type="text" name="" id="" placeholder='User Name' />
                <br />
                <input onBlur={handleEmailBlur} type="email" name="" placeholder='abc@mail.com' />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="" placeholder='*****' />
                <br />
                <input type="submit" value='Register' name="" />
            </form>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
        </div>
    );
};

export default Register;