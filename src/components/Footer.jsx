import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>
            <p>© {new Date().getFullYear()} Mi Blog de Destinos Turísticos. Todos los derechos reservados.</p>
        </footer>
    );
};

export default Footer;
