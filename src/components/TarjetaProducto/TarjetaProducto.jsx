import React from "react";
import { Link } from "react-router-dom"; // 💡 Importación obligatoria
import "./TarjetaProducto.css";

const TarjetaProducto = ({ productos }) => {
  // 💡 Agregamos el 'id' a la desestructuración
  const { id, imagen, nombre, descripcion, precio } = productos;

  return (
    <div className="tarjeta">
      <div className="contenedor-img">
        <img src={imagen} alt={nombre} className="imagen" />
      </div>
      <div className="detalles">
        <h3 className="titulo">{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio ? precio.toLocaleString() : "0"}</p>

        {/* 💡 Reemplazamos <a> por <Link> apuntando a tu ruta dinámica */}
        <Link to={`/productos/${id}`} className="boton-ver-mas">
          Ver más
        </Link>
      </div>
      <button className="boton-agregar">Agregar al carrito</button>
    </div>
  );
};

export default TarjetaProducto;
