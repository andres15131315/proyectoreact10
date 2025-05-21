import React from 'react';

export default function UserList({ users }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </ul>
  );
}
