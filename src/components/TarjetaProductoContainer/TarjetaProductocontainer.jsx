import { useState, useEffect } from "react";
import TarjetaProducto from "../TarjetaProducto/TarjetaProducto";
import "./TarjetaProductoContainer.css";

const TarjetaProductoContainer = ({ Mensaje, Destacado }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.productos);
        console.log("Productos cargados:", data.productos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  const ProductosAMostrar = Destacado
    ? productos.filter((prod) => prod.destacado)
    : productos;

  return (
    <>
      <br />
      <h2>{Mensaje}</h2>
      <div className="container-layout">
        {ProductosAMostrar.map((unProducto) => (
          <TarjetaProducto key={unProducto.id} productos={unProducto} />
        ))}
      </div>
    </>
  );
};

export default TarjetaProductoContainer;
