import React, { useState, useEffect } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';
import './App.css';
// URL base de la API para usuarios
const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function App() {
  // Estado para almacenar la lista de usuarios
  const [users, setUsers] = useState([]);
  // Estado para controlar la carga de datos 
  const [loading, setLoading] = useState(true);
  // Estado para manejar alertas
  const [alert, setAlert] = useState(null);

  // useEffect para cargar usuarios una sola vez al montar el componente
  useEffect(() => {
    fetch(API_URL) // Realiza peticion GET a la API
      .then(res => res.json()) // Convierte la respuesta a JSON
      .then(data => {
        // Filtramos solo los campos necesarios
        const filteredUsers = data.map(({ id, name, email }) => ({ id, name, email }));
        // Actualiza el estado con los usuarios filtrados
        setUsers(filteredUsers);
        // Cambia el estado de carga a false para indicar que ya termino
        setLoading(false);
      })
      .catch(() => {
        // En caso de error, también deja de cargar y muestra alerta
        setLoading(false);
        setAlert({ type: 'error', message: 'Error cargando usuarios' });
      }); 
  }, []); // Dependencias vacias se ejecuta solo una vez al montar

  /**
   * Función para agregar un usuario nuevo.
   * @param {Object} user - Objeto con  name, email  del usuario
   */
  const addUser = (user) => {
    // Valida que name y email no esten vacios
    if (!user.name || !user.email) return;

    fetch(API_URL, {
      method: 'POST', // Metodo POST para crear usuario
      headers: { 'Content-Type': 'application/json' }, // Indica que el cuerpo es JSON
      body: JSON.stringify(user), // Convierte el objeto user a JSON para enviar
    })
      .then(res => res.json()) // Convierte la respuesta a JSON
      .then(newUser => {
        // Actualiza el estado agregando el nuevo usuario al arreglo actual
        setUsers([...users, newUser]);
        // Muestra alerta de éxito
        setAlert({ type: 'success', message: 'Usuario agregado correctamente' });
      })
      .catch(() => {
        // En caso de error, muestra alerta de error
        setAlert({ type: 'error', message: 'Error agregando usuario' });
      });
  };

  // Si esta cargando usuarios, muestra un mensaje simple
  if (loading) return <div>Cargando usuarios...</div>;

  // Renderizado principal cuando ya se cargaron los usuarios
  return (
    <div className="card">
      <h1>Gestor de Usuarios</h1>
      {/* Muestra alerta si existe */}
      {alert && <div className={`alert alert-${alert.type}`}>{alert.message}</div>}
      {/* Componente para agregar usuarios, recibe la funcion addUser */}
      <AddUserForm addUser={addUser} />
      {/* Componente que muestra la lista de usuarios */}
      <UserList users={users} />
    </div>
  );
}
