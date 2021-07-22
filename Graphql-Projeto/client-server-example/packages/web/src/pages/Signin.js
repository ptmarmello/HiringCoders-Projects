import React from 'react';

export default function Signin(){
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://127.0.0.1:8000/authenticate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then((response) => response.json())
        .then((data) => {
            console.log('success!', data);
        })
    }
    return(
        <form action="/autenticate" method="POST" onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="email" >E-mail</label>
                <input id="email" name="email" type="email" inputmode="email" value={email} autoComplete="username" onChange={handleEmail} />
            </fieldset>
            <fieldset>
                <label htmlFor="password" >Senha</label>
                <input id="password" name="password" type="password" value={password} autoComplete="current-password" onChange={handlePassword} />
            </fieldset>
            <button type="submit" >Entrar</button>
        </form>
    )
}