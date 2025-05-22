import React, { useState } from 'react';
import Button from './Button';

export default function AddUserForm({ addUser }) {
  // Estado local para el nombre ingresado
  const [name, setName] = useState('');
  // Estado local para el correo electronico ingresado
  const [email, setEmail] = useState('');

  /**
   * Funcion que maneja el envio del formulario
   * @param {Event} e 
   */
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recargar la pagina al enviar

    // Valida que los campos no esten vacios
    if (!name.trim() || !email.trim()) return;

    // Llama a la funcion addUser que recibe por props con el nuevo usuario
    addUser({ name: name.trim(), email: email.trim() });

    // Limpia los campos del formulario para nueva entrada
    setName('');
    setEmail('');
  };

  return (
    <form className="add-user-form" onSubmit={handleSubmit}>
      {/* Input para nombre */}
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)} // Actualiza el estado name
      />

      {/* Input para correo electronico */}
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        // Actualiza el estado email
        onChange={(e) => setEmail(e.target.value)} 
      />

      {/* Boton para enviar el formulario */}
      <Button type="submit">Agregar Usuario</Button>
    </form>
  );
}