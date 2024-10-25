import React, { useState } from 'react';

const Dashboard = () => {
    const [destinations, setDestinations] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [editIndex, setEditIndex] = useState(null); // Para saber si estamos editando

    const handleAddOrUpdateDestination = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            // Actualizar el destino
            const updatedDestinations = [...destinations];
            updatedDestinations[editIndex] = { name, description };
            setDestinations(updatedDestinations);
            setEditIndex(null);
        } else {
            // Agregar nuevo destino
            const newDestination = { name, description };
            setDestinations([...destinations, newDestination]);
        }
        setName('');
        setDescription('');
    };

    const handleDeleteDestination = (index) => {
        const updatedDestinations = destinations.filter((_, i) => i !== index);
        setDestinations(updatedDestinations);
    };

    const handleEditDestination = (index) => {
        setEditIndex(index);
        setName(destinations[index].name);
        setDescription(destinations[index].description);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Dashboard</h2>
            <form onSubmit={handleAddOrUpdateDestination}>
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
                <button type="submit">{editIndex !== null ? 'Actualizar Destino' : 'Agregar Destino'}</button>
            </form>
            <h3>Destinos Agregados</h3>
            <ul>
                {destinations.map((destination, index) => (
                    <li key={index}>
                        <strong>{destination.name}</strong>: {destination.description}
                        <button onClick={() => handleEditDestination(index)}>Editar</button>
                        <button onClick={() => handleDeleteDestination(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
