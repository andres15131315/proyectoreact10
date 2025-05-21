import React, { useState } from 'react';
import Button from './Button';

export default function AddUserForm({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) return;

    addUser({ name: name.trim(), email: email.trim() });
    setName('');
    setEmail('');
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button type="submit">Agregar Usuario</Button>
    </form>
  );
}
