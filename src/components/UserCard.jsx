

export default function UserCard({ user }) {
  return (
    <div className="user-card">
      {/* Nombre del usuario */}
      <h3>{user.name}</h3>
      {/* Correo electrónico del usuario */}
      <p>{user.email}</p>
    </div>
  );
}
