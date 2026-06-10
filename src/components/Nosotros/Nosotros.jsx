import React, { useState, useEffect } from "react";

import "./nosotros.css";

const Nosotros = () => {
  const [nosotros, setNosotros] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNosotros = async () => {
      try {
        const response = await fetch("/data/Nosotros.json");
        if (!response.ok) throw new Error("No se pudo cargar el archivo");
        const data = await response.json();
        setNosotros(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNosotros();
  }, []);

  if (loading) {
    return <p>Cargando miembros, por favor espere...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="nosotros-section">
      {" "}
      <ul className="flex-container">
        {" "}
        {nosotros.map((miembro) => (
          <li key={miembro.id} className="flex-item">
            {" "}
            <h2>{miembro.nombre}</h2>
            <p>{miembro.puesto}</p>
            <img
              src={miembro.imagen}
              alt={miembro.nombre}
              style={{ width: "100%", height: "auto" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nosotros;
