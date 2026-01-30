# Portafolio de Camilo Elias

Portafolio personal desarrollado con React y Vite, mostrando proyectos, habilidades y experiencia como desarrollador frontend.

## 🚀 Características

- ✨ Diseño moderno y responsive
- 🎨 Tema claro/oscuro
- 📧 Formulario de contacto funcional con EmailJS
- 🎭 Animaciones suaves con Motion
- 📱 Totalmente responsive

## 🛠️ Tecnologías

- **React 19** - Framework de UI
- **Vite** - Build tool y dev server
- **Motion** - Animaciones
- **EmailJS** - Envío de correos desde el frontend
- **CSS** - Estilos personalizados

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## ⚙️ Configuración

### Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

Ver `EMAILJS_SETUP.md` para instrucciones detalladas.

## 🚀 Despliegue

Ver `DEPLOY.md` para instrucciones completas de despliegue.

### Despliegue rápido con Vercel:

```bash
npm i -g vercel
vercel
```

**Importante:** Configura las variables de entorno en tu plataforma de despliegue.

## 📁 Estructura

```
src/
├── components/
│   ├── Contact.jsx      # Formulario de contacto
│   ├── Hero.jsx         # Sección principal
│   ├── Highlights.jsx   # Proyectos destacados
│   └── Navbar.jsx       # Navegación
├── assets/              # Imágenes y recursos
└── App.jsx              # Componente principal
```

## 📧 Contacto

- **LinkedIn:** [Camilo Elias](https://www.linkedin.com/in/camilo-elias-604130372/)
- **Email:** camiloelias234@gmail.com

## 📄 Licencia

Este proyecto es de uso personal.
