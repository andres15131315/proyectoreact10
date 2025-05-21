import React, { useState, useEffect } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const filteredUsers = data.map(({ id, name, email }) => ({ id, name, email }));
        setUsers(filteredUsers);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const addUser = (user) => {
    if (!user.name || !user.email) return;

    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(newUser => {
        setUsers([...users, newUser]);
      })
      .catch(() => {});
  };

  if (loading) return <div>Cargando usuarios...</div>;

  return (
    <div className="card">
      <h1>Gestor de Usuarios</h1>
      <AddUserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}
