export default function Hero() {
    return (
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Lic. Gabriela Paré
          </h1>
  
          <h2 className="mt-4 text-xl text-blue-900 font-medium">
            Backend Engineer | Java & Spring Boot
          </h2>
  
          <p className="mt-6 text-gray-600 leading-relaxed">
            Diseño y desarrollo APIs robustas y mantenibles, con foco en
            arquitectura limpia, integración de servicios y evolución técnica continua.
          </p>
  
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition"
            >
              LinkedIn
            </a>
  
            <a
              href="mailto:tuemail@ejemplo.com"
              className="px-6 py-3 border border-blue-900 text-blue-900 rounded-md hover:bg-blue-50 transition"
            >
              Contacto
            </a>
          </div>
        </div>
      </section>
    );
  }