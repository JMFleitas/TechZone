import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductoDetalle = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);
    fetch("/data/data.json")
      .then((response) => response.json())
      .then((data) => {
        // 💡 CLAVE: Buscamos dentro de data.productos porque es un objeto contenedor
        if (data && data.productos) {
          const productoEncontrado = data.productos.find(
            (p) => p.id === parseInt(id),
          );
          setProducto(productoEncontrado);
        }
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
        setCargando(false);
      });
  }, [id]);

  if (cargando) {
    return <h2>Cargando detalle del producto...</h2>;
  }

  if (!producto) {
    return <h2>Producto no encontrado.</h2>;
  }

  return (
    <div>
      <h2>Detalle del Producto: {producto.nombre}</h2>
      <img
        src={producto.imagen}
        alt={producto.nombre}
        style={{ maxWidth: "400px" }}
      />
      <h3>${producto.precio}</h3>
      <p>{producto.descripcion}</p>
    </div>
  );
};

export default ProductoDetalle;
