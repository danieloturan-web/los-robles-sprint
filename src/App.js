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

        <nav className="menu-principal">
            <a href="#actividades">Actividades</a>
             <a href="#sistema">Sistema</a>
             <a href="#codigo">Código fuente</a>
             <a href="#modificaciones">Modificaciones</a>
        </nav>
      </header>

      <main className="contenedor">
        <section id="actividades" className="card">
          <h2>Actividades realizadas en el curso</h2>
          <p className="hint">
            Durante el curso se trabajó el desarrollo del sistema web para el
            Residencial Los Robles mediante la metodología SCRUM. Se elaboraron
            historias de usuario, backlog del producto, planeación del sprint,
            evidencias de avance, documentación del proyecto y registro de cambios
            mediante GitHub.
          </p>

          <ul className="lista">
            <li className="item">
              <div>
                <strong>Backlog del producto</strong> — Organización de historias de usuario.
              </div>
            </li>
            <li className="item">
              <div>
                <strong>Sprint Schedule</strong> — Planeación de tareas por etapa.
              </div>
            </li>
            <li className="item">
              <div>
                <strong>Desarrollo en React</strong> — Creación del sistema web académico.
              </div>
            </li>
            <li className="item">
              <div>
                <strong>Control de versiones</strong> — Registro de avances en GitHub.
              </div>
            </li>
          </ul>
        </section>

        <section id="sistema" className="card">
          <h2>Sistema implementado</h2>
          <p className="hint">
            El sistema implementado permite simular el registro de residentes del
            Residencial Los Robles, validar el inicio de sesión y consultar los
            registros recientes. Esta versión funciona como prototipo académico
            para representar el avance del proyecto.
          </p>
        </section>

        <section className="card">
          <h2>Registro de residente</h2>
          <p className="hint">
            En esta fase del Sprint 1 se integran el registro y el inicio de sesión
            de residentes como parte del avance funcional del sistema web del
            Residencial Los Robles.
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
            Este módulo permite validar el acceso de residentes previamente
            registrados dentro de la demostración académica del sistema.
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

        <section id="codigo" className="card">
          <h2>Código fuente</h2>
          <p className="hint">
            El código fuente del sistema se encuentra documentado y almacenado en
            el repositorio de GitHub del proyecto. Para la entrega final, también
            se incluirá una carpeta comprimida con los archivos principales del
            sistema.
          </p>

          <p className="hint">
            Repositorio: https://github.com/danieloturan-web/los-robles-sprint.git
          </p>
        </section>

        <section id="modificaciones" className="card">
          <h2>Reporte de modificaciones realizadas</h2>
          <p className="hint">
            Se documentaron mejoras relacionadas con el backlog, el avance del
            sprint, la evidencia registrada en GitHub y la integración del menú
            solicitado para la entrega final del proyecto.
          </p>

          <ul className="lista">
            <li className="item">
              <div>
                <strong>Menú principal</strong> — Se agregó navegación hacia las
                secciones solicitadas en el producto integrador.
              </div>
            </li>
            <li className="item">
              <div>
                <strong>Backlog actualizado</strong> — Revisión de historias de
                usuario y prioridades.
              </div>
            </li>
            <li className="item">
              <div>
                <strong>Sistema implementado</strong> — Integración de registro,
                inicio de sesión y consulta de registros recientes.
              </div>
            </li>
            <li className="item">
              <div>
                <strong>Documentación</strong> — Actualización del archivo README.md
                del repositorio.
              </div>
            </li>
            <li className="item">
              <div>
                <strong>GitHub</strong> — Registro de cambios mediante commits
                vinculados al avance del proyecto.
              </div>
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Los Robles — demo académica</small>
      </footer>
    </div>
  );
}

export default App;