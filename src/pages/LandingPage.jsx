import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>Bienvenido a Nuestro Blog de Destinos Turísticos</h1>
            <p>Explora los mejores destinos turísticos del mundo y comparte tus experiencias.</p>
            <p>¡Únete a nuestra comunidad y comienza a viajar!</p>
            <div>
                <Link to="/login">
                    <button style={{ margin: '10px', padding: '10px 20px' }}>Iniciar Sesión</button>
                </Link>
                <Link to="/signup">
                    <button style={{ margin: '10px', padding: '10px 20px' }}>Registrarse</button>
                </Link>
            </div>
        </div>
    );
};

export default LandingPage;
