const stack = {
    Backend: ["Java", "Spring Boot", "JPA / Hibernate", "JAX-RS"],
    "APIs & Integración": ["REST", "OpenAPI / Swagger", "Apigee", "Postman"],
    Infraestructura: ["Docker", "JBoss", "Linux"],
    "Bases de Datos": ["PostgreSQL", "MySQL"],
    Herramientas: ["Git", "Maven", "DBeaver"],
  };
  
  export default function TechStack() {
    return (
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-blue-900 mb-10">
            Stack Técnico
          </h3>
  
          <div className="grid md:grid-cols-2 gap-10">
            {Object.entries(stack).map(([category, items]) => (
              <div key={category}>
                <h4 className="font-semibold text-gray-800 mb-4">
                  {category}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }