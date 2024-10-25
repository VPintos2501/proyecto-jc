import React from 'react';

const SignupPage = () => {
    const handleSignup = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para manejar el registro
    };

    return (
        <div>
            <h2>Registrarse</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" required />
                </div>
                <div>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" required />
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" required />
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default SignupPage;
