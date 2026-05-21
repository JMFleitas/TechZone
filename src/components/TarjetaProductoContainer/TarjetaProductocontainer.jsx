import { useState, useEffect } from "react";
import TarjetaProducto from "../TarjetaProducto/TarjetaProducto";
import "./TarjetaProductoContainer.css";

const TarjetaProductoContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.productos);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error cargando productos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="container-layout">
      {productos.map((prod) => (
        <TarjetaProducto key={prod.id} producto={prod} />
      ))}
    </div>
  );
};

export default TarjetaProductoContainer;
