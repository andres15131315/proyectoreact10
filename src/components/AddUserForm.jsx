import React, { useState } from 'react';
import Button from './Button';

export default function AddUserForm({ addUser }) {

  // hooks useState guarda el texto del campo de nombre y email
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  
  // Funcion que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la pagina se recargue
    if (!name.trim() || !email.trim()) return;
    // Llama a la funcion addUser del componente padre
    addUser({ name: name.trim(), email: email.trim() });
    // Limpia los campos del formulario
    setName('');
    setEmail('');
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      {/* Campo de entrada para el nombre */}
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)} // Actualiza el estado 
      />

      {/* Campo de entrada para el correo electronico */}
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)} // Actualiza el estado 
      />

      {/* Boton para enviar el formulario */}
      <Button type="submit">Agregar Usuario</Button>
    </form>
  );
}
