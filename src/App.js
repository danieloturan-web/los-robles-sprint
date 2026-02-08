import { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [casa, setCasa] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [registros, setRegistros] = useState([]);

  const registrar = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !casa.trim()) {
      setMensaje("⚠️ Completa nombre y número de casa.");
      return;
    }

    const nuevo = {
      id: Date.now(),
      nombre: nombre.trim(),
      casa: casa.trim(),
      fecha: new Date().toLocaleString(),
    };

    setRegistros([nuevo, ...registros]);
    setMensaje("✅ Registro guardado (simulado).");
    setNombre("");
    setCasa("");
  };

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <div className="badge">RLR </div>
          <div>
            <h1>Residencial Los Robles</h1>
            <p>Registro de residentes</p>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="card">
          <h2>Registro de residente</h2>
          <p className="hint">
           Este módulo corresponde al Sprint 1 del sistema web del Residencial Los Robles, enfocado en el registro de residentes.
          </p>

          <form onSubmit={registrar} className="form">
            <label>
              Nombre del residente
              <input
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej. Daniel Torres"
              />
            </label>

            <label>
              Número de casa
              <input
                value={casa}
                onChange={(e) => setCasa(e.target.value)}
                placeholder="Ej. 12-B"
              />
            </label>

            <button type="submit">Registrar</button>

            {mensaje && <div className="msg">{mensaje}</div>}
          </form>
        </section>

        <section className="card">
          <h2>Registros recientes</h2>
          {registros.length === 0 ? (
            <p className="hint">Aún no hay registros. Agrega el primero.</p>
          ) : (
            <ul className="list">
              {registros.map((r) => (
                <li key={r.id} className="item">
                  <div>
                    <strong>{r.nombre}</strong> — Casa <strong>{r.casa}</strong>
                  </div>
                  <small>{r.fecha}</small>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Los Robles — demo académica</small>
      </footer>
    </div>
  );
}

export default App;

