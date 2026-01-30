# Configuración de EmailJS

Para que el formulario de contacto funcione y envíe correos a tu dirección (camiloelias234@gmail.com), necesitas configurar EmailJS.

## Pasos para configurar:

1. **Crear cuenta en EmailJS**
   - Ve a https://www.emailjs.com/
   - Crea una cuenta gratuita (permite hasta 200 emails/mes)

2. **Crear un Email Service**
   - En el dashboard, ve a "Email Services"
   - Haz clic en "Add New Service"
   - Selecciona tu proveedor de correo (Gmail, Outlook, etc.)
   - Conecta tu cuenta de correo (camiloelias234@gmail.com)
   - Copia el **Service ID** que se genera

3. **Crear un Email Template**
   - Ve a "Email Templates"
   - Haz clic en "Create New Template"
   - **Subject (Asunto):** `Contact Us: {{title}} del nombre {{name}} respuesta a {{email}}`
   - **Content (Cuerpo):** incluye las variables que necesites, por ejemplo:
     ```
     De: {{name}}
     Email: {{email}}
     
     Mensaje:
     {{message}}
     ```
   - En "To Email" pon: `camiloelias234@gmail.com`
   - Guarda y copia el **Template ID**
   - Variables que envía el formulario: `name`, `email`, `title`, `message`

4. **Obtener tu Public Key**
   - Ve a "Account" > "General"
   - Copia tu **Public Key**

5. **Configurar las variables de entorno**
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega estas líneas (reemplaza con tus valores):
     ```
     VITE_EMAILJS_SERVICE_ID=tu_service_id
     VITE_EMAILJS_TEMPLATE_ID=tu_template_id
     VITE_EMAILJS_PUBLIC_KEY=tu_public_key
     ```

6. **Actualizar el componente**
   - El componente Contact.jsx ya está configurado para usar estas variables
   - Reinicia el servidor de desarrollo después de crear el archivo .env

## Nota de seguridad:
- El archivo `.env` está en `.gitignore` y no se subirá al repositorio
- No compartas tus claves públicamente
