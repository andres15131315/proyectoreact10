

export default function Header({ title }) {
  return (
    <header className="header">
      {/* Título principal recibido por props */}
      <h1>{title}</h1>
    </header>
  );
}
