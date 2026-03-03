export default function Contact() {
    return (
      <section className="py-20 px-6 text-center">
        <h3 className="text-2xl font-semibold text-blue-900 mb-6">
          Contacto
        </h3>
  
        <p className="text-gray-700 mb-4">
          Si querés conectar profesionalmente:
        </p>
  
        <div className="flex justify-center gap-6">
          <a
            href="mailto:tuemail@ejemplo.com"
            className="text-blue-900 font-medium hover:underline"
          >
            Email
          </a>
  
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="text-blue-900 font-medium hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    );
  }