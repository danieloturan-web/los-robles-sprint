import { useState } from "react";
import "./App.css";

function App() {
  const [nombre, setNombre] = useState("");
  const [casa, setCasa] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [registros, setRegistros] = useState([]);
  const [loginNombre, setLoginNombre] = useState("");
  const [loginCasa, setLoginCasa] = useState("");
  const [mensajeLogin, setMensajeLogin] = useState("");

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

  const iniciarSesion = (e) => {
    e.preventDefault();

    if (!loginNombre.trim() || !loginCasa.trim()) {
      setMensajeLogin("⚠️ Completa nombre y número de casa para iniciar sesión.");
      return;
    }

    const existe = registros.find(
      (r) =>
        r.nombre.toLowerCase() === loginNombre.trim().toLowerCase() &&
        r.casa.toLowerCase() === loginCasa.trim().toLowerCase()
    );

    if (existe) {
      setMensajeLogin("✅ Inicio de sesión correcto.");
    } else {
      setMensajeLogin("❌ No se encontró un residente con esos datos.");
    }
  };

  return (
    <div className="pagina">
      <header className="topbar">
        <div className="brand">
          <div className="badge">RLR</div>
          <div>
            <h1>Residencial Los Robles</h1>
            <p>Registro e inicio de sesión de residentes</p>
          </div>
        </div>
      </header>

      <main className="contenedor">
        <section className="card">
          <h2>Registro de residente</h2>
          <p className="hint">
             En esta fase del Sprint 1 se integran el registro y el inicio de sesión de
  residentes como parte del avance funcional del sistema web del Residencial
  Los Robles.
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
  <h2>Inicio de sesión</h2>
  <p className="hint">
     Este módulo permite validar el acceso de residentes previamente registrados
  dentro de la demostración académica del sistema.
  </p>

  <form onSubmit={iniciarSesion} className="form">
    <label>
      Nombre del residente
      <input
        value={loginNombre}
        onChange={(e) => setLoginNombre(e.target.value)}
        placeholder="Ej. Daniel Torres"
      />
    </label>

    <label>
      Número de casa
      <input
        value={loginCasa}
        onChange={(e) => setLoginCasa(e.target.value)}
        placeholder="Ej. 12-B"
      />
    </label>

    <button type="submit">Iniciar sesión</button>

    {mensajeLogin && <div className="msg">{mensajeLogin}</div>}
  </form>
</section>

        <section className="card">
          <h2>Registros recientes</h2>

          {registros.length === 0 ? (
            <p className="hint">Aún no hay registros. Agrega el primero.</p>
          ) : (
            <ul className="lista">
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

