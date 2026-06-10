import { FormularioContainer } from "./components/Formulariocontainer/FormularioContainer";
import TarjetaProductoContainer from "./components/TarjetaProductoContainer/TarjetaProductocontainer";
import Layout from "./components/Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Nosotros from "./components/NosotrosInfo/NosotrosInfo";
import Inicio from "./components/Inicio/Inicio";
import ProductoDetalle from "./components/ProductoDetalle/ProductoDetalle";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/productos"
            element={<TarjetaProductoContainer Mensaje="Nuestros Productos" />}
          />
          <Route path="/productos/:id" element={<ProductoDetalle />} />
          <Route path="/alta" element={<FormularioContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route
            path="/contacto"
            element={
              <div>
                <h1>Contacto</h1>
                <p>Envíanos un mensaje si tienes dudas o consultas.</p>
              </div>
            }
          />
          <Route
            path="*"
            element={
              <div>
                <h1>Error 404</h1>
                <p>La página que buscas no existe.</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
