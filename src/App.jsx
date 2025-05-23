import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';
import Footer from './components/Footer'; // Importamos el Footer
import './App.css';

export default function App() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Juan Pérez', email: 'juan@example.com' },
    { id: 2, name: 'Ana Gómez', email: 'ana@example.com' },
  ]);

  const [alert, setAlert] = useState(null);

  const addUser = (user) => {
    if (!user.name || !user.email) {
      setAlert({ type: 'error', message: 'Todos los campos son obligatorios.' });
      return;
    }

    const newUser = { id: Date.now(), ...user };
    setUsers([...users, newUser]);
    setAlert({ type: 'success', message: 'Usuario agregado correctamente.' });
  };

  return (
    <>
      <div className="card">
        <h1>Gestor de Usuarios</h1>
        {alert && <div className={`alert alert-${alert.type}`}>{alert.message}</div>}
        <AddUserForm addUser={addUser} />
        <UserList users={users} />
      </div>
      <Footer /> {/* Agregamos el Footer aquí */}
    </>
  );
}
