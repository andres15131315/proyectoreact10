

export default function UserList({ users }) {
  return (
    <ul className="user-list">
      {/* Recorre el arreglo de usuarios y crea un <li> por cada uno */}
      {users.map((user) => (
        <li key={user.id}>
          {/* Nombre en negrita seguido del correo */}
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
}
