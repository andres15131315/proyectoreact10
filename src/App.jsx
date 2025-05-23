import React, { useState } from 'react'; 
import AddUserForm from './components/AddUserForm'; 
import UserList from './components/UserList'; 
import Footer from './components/Footer'; 
import Button from './components/Button';
import Header from './components/Header';
import './App.css'; 

export default function App() {

  // useState para manejar el estado de la lista de usuarios
  const [users, setUsers] = useState([
    { id: 1, name: 'lizeth karina', email: 'karina@gmail.com' },
    { id: 2, name: 'andres', email: 'andres@gmail.com' },
  ]);

  // useState para mostrar una alerta 
  const [alert, setAlert] = useState(null);

  // Funcion que se ejecuta cuando se agrega un nuevo usuario
  const addUser = (user) => {
    const newUser = { id: Date.now(), ...user }; // Crea un nuevo usuario con ID unico
    setUsers([...users, newUser]); // Agrega el nuevo usuario a la lista
    setAlert({ type: 'success', message: 'Usuario agregado correctamente.' }); // Muestra alerta

    // Oculta la alerta despues de 3 segundos
    setTimeout(() => setAlert(null), 3000);
  };

  return (
    <>
      <div className="card">
        <h1>Gestor de Usuarios</h1>
        {/* Muestra la alerta solo si hay una */}
        {alert && <div className={`alert alert-${alert.type}`}>{alert.message}</div>}
        {/* Componente para agregar un nuevo usuario */}
        <AddUserForm addUser={addUser} />
        {/* Componente para mostrar la lista de usuarios */}
        <UserList users={users} />
      </div>
      {/* Pie de pagina */}
      <Footer />
    </>
  );
}
