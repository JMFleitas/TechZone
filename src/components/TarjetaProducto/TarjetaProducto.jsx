import React from "react";
import "./TarjetaProducto.css";

const TarjetaProducto = ({ producto }) => {
  const { imagen, nombre, descripcion, precio } = producto;

  return (
    <div className="tarjeta">
      <div className="contenedor-img">
        <img src={imagen} alt={nombre} className="imagen" />
      </div>
      <div className="detalles">
        <h3 className="titulo">{nombre}</h3>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">${precio.toLocaleString()}</p>
      </div>
      <button className="boton-agregar">Agregar al carrito</button>
    </div>
  );
};

export default TarjetaProducto;
