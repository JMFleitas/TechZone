import React from "react";

const estilosNosotros = {
  container: {
    maxWidth: "800px",
    margin: "40px auto",
    padding: "20px",
    color: "#e0e0e0",
    fontFamily: "sans-serif",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: "#ffffff",
  },
  text: {
    textAlign: "justify",
    lineHeight: "1.6",
    marginBottom: "20px",
    fontSize: "1.1rem",
  },
};

const NosotrosInfo = () => {
  return (
    <div style={estilosNosotros.container}>
      <h1 style={estilosNosotros.title}>Sobre Nosotros</h1>
      <p style={estilosNosotros.text}>
        Bienvenido a <strong>TechZone</strong>, tu aliado estratégico en el
        mundo del hardware y la informática. Nos apasiona la tecnología y nos
        dedicamos a equipar a entusiastas, gamers, professionals y empresas con
        lo último y lo mejor del mercado tecnológico.
      </p>
      <p style={estilosNosotros.text}>
        Sabemos que cada componente cuenta. Por eso, nos especializamos en
        ofrecer un catálogo rigurosamente seleccionado que incluye desde
        potentes <strong>componentes para computadoras</strong> —como
        procesadores, placas de video, memorias RAM y discos de última
        generación— hasta monitores de alta definición con máxima tasa de
        refresco para que no te pierdas ningún detalle.
      </p>
      <p style={estilosNosotros.text}>
        Además, elevamos tu experiencia digital con periféricos premium.
        Contamos con una amplia variedad de{" "}
        <strong>
          auriculares envolventes, teclados mecánicos y mouses de alta precisión
        </strong>{" "}
        que garantizan el máximo confort y rendimiento, ya sea para ganar tus
        partidas o para potenciar tus extensas jornadas de trabajo.
      </p>
      <p style={estilosNosotros.text}>
        En TechZone no solo vendemos productos; brindamos confianza,
        asesoramiento técnico experto, garantía oficial y envíos rápidos para
        que tu única preocupación sea disfrutar de la máxima potencia en tu
        setup. ¡Lleva tu rendimiento al siguiente nivel con nosotros!
      </p>
    </div>
  );
};

export default NosotrosInfo;
