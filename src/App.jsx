import { FormularioContainer } from "./components/Formulariocontainer/FormularioContainer";
import Layout from "./components/Layout/Layout";
import TarjetaProductoContainer from "./components/TarjetaProductoContainer/TarjetaProductoContainer";

function App() {
  return (
    <Layout>
      <h1>Bienvenido a TechZone</h1>
      <p>Tu tienda de tecnología</p>
      <TarjetaProductoContainer></TarjetaProductoContainer>
      <FormularioContainer />
    </Layout>
  );
}

export default App;
