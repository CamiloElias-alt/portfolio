import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = {
      nombre: e.target.nombre.value,
      email: e.target.email.value,
      mensaje: e.target.mensaje.value,
    };

    try {
      // Configuración de EmailJS usando variables de entorno
      // Ver EMAILJS_SETUP.md para instrucciones de configuración
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        setSubmitStatus({
          type: "error",
          message: "El formulario no tiene las credenciales configuradas en este entorno. Si desplegaste la página, agrega las variables de entorno (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) en tu plataforma de despliegue (Vercel, Netlify, etc.) y vuelve a desplegar. Mientras tanto, contacta por LinkedIn.",
        });
        setIsSubmitting(false);
        return;
      }

      // Inicializar EmailJS (recomendado para evitar fallos en producción)
      emailjs.init(publicKey);

      // Variables para tu template: asunto "Contact Us: {{title}} del nombre {{name}} respuesta a {{email}}"
      await emailjs.send(serviceId, templateId, {
        name: formData.nombre,
        email: formData.email,
        title: "Mensaje desde portfolio",
        message: formData.mensaje,
      }, { publicKey });

      setSubmitStatus({ type: "success", message: "¡Mensaje enviado con éxito! Te responderé pronto." });
      e.target.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
      
      let errorMessage = "Hubo un error al enviar el mensaje. ";
      const errorText = error?.text || error?.message || "";
      
      if (errorText) {
        if (errorText.includes("Invalid template") || errorText.includes("Invalid service") || errorText.includes("Public Key")) {
          errorMessage += "Revisa que las variables de entorno (VITE_EMAILJS_*) estén configuradas en tu plataforma de despliegue y que Service ID, Template ID y Public Key sean correctos en EmailJS.";
        } else if (errorText.includes("rate limit") || errorText.includes("quota")) {
          errorMessage += "Límite de envíos alcanzado. Inténtalo más tarde o contacta por LinkedIn.";
        } else if (errorText.includes("Failed to fetch") || errorText.includes("Network")) {
          errorMessage += "Error de red. Comprueba tu conexión o que el dominio esté autorizado en EmailJS (Account → Authorized domains).";
        } else {
          errorMessage += "Por favor, inténtalo más tarde o contacta por LinkedIn.";
        }
      } else {
        errorMessage += "Si desplegaste la página, asegúrate de haber añadido las variables de entorno en tu plataforma (Vercel, Netlify, etc.) y de haber vuelto a desplegar.";
      }
      
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="contact">
      <div className="contact-inner">
        <div className="contact-text">
          <p className="section-kicker">Contacto</p>
          <h2>¿Hablamos?</h2>
          <p className="section-subtitle">
            Si tienes una idea, un proyecto o simplemente quieres charlar sobre
            desarrollo web, estaré encantado de leerte.
          </p>
          <div className="contact-meta">
            <p>
              <span>Ubicación:</span> Santa Fe, Argentina
            </p>
            <p>
              <span>Stack principal:</span> React, JavaScript, CSS
            </p>
          </div>
          <div className="contact-social">
            <a
              href="https://www.linkedin.com/in/camilo-elias-604130372/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="field">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" name="nombre" placeholder="¿Cómo te llamas?" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="nombre@ejemplo.com"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              placeholder="Cuéntame un poco sobre lo que tienes en mente..."
              required
            />
          </div>
          <button
            type="submit"
            className="primary-btn full-width"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
          {submitStatus && (
            <div
              className={`submit-message ${
                submitStatus.type === "success" ? "success" : "error"
              }`}
            >
              {submitStatus.message}
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
