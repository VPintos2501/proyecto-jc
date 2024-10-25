import React, { useState } from 'react';

const Dashboard = () => {
    const [destinations, setDestinations] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleAddDestination = (e) => {
        e.preventDefault();
        const newDestination = { name, description };
        setDestinations([...destinations, newDestination]);
        setName('');
        setDescription('');
    };

    const handleDeleteDestination = (index) => {
        const updatedDestinations = destinations.filter((_, i) => i !== index);
        setDestinations(updatedDestinations);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Dashboard</h2>
            <form onSubmit={handleAddDestination}>
                <div>
                    <label htmlFor="name">Nombre del Destino:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Descripción:</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Agregar Destino</button>
            </form>
            <h3>Destinos Agregados</h3>
            <ul>
                {destinations.map((destination, index) => (
                    <li key={index}>
                        <strong>{destination.name}</strong>: {destination.description}
                        <button onClick={() => handleDeleteDestination(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
