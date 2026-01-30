# Guía de Despliegue

Tu portafolio está listo para desplegar. Aquí están las instrucciones según la plataforma que elijas.

## ✅ Checklist Pre-Despliegue

- [x] EmailJS configurado (Service ID, Template ID, Public Key)
- [x] Variables de entorno en `.env` (no se subirá al repositorio)
- [x] Sin errores de linter
- [x] Todas las dependencias instaladas

## 📦 Variables de Entorno para Producción

**IMPORTANTE:** Si el formulario de contacto no envía correos en la página desplegada, casi siempre es porque **no configuraste las variables de entorno en la plataforma** (Vercel, Netlify, etc.). El archivo `.env` solo existe en tu PC; en producción debes añadirlas manualmente.

1. Entra al panel de tu proyecto (Vercel, Netlify, etc.).
2. Ve a **Settings** → **Environment Variables** (o "Variables de entorno").
3. Añade estas 3 variables (mismo nombre y valor):

```
VITE_EMAILJS_SERVICE_ID=service_8ybflx6
VITE_EMAILJS_TEMPLATE_ID=template_pyzgu9h
VITE_EMAILJS_PUBLIC_KEY=G2IVRNZFrm9nf5isE
```

4. **Vuelve a desplegar** (Redeploy). Sin un nuevo deploy, el build no verá las variables.
5. En **EmailJS** (emailjs.com): Account → **Authorized domains** → añade tu dominio (ej. `tusitio.vercel.app`).

## 🚀 Opciones de Despliegue

### 1. Vercel (Recomendado)

1. **Instalar Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Desplegar:**
   ```bash
   vercel
   ```

3. **Configurar variables de entorno:**
   - Ve a tu proyecto en Vercel Dashboard
   - Settings → Environment Variables
   - Agrega las 3 variables de EmailJS (VITE_EMAILJS_SERVICE_ID, etc.)
   - Redeploy

**O usando GitHub:**
- Conecta tu repositorio en vercel.com
- Agrega las variables de entorno en la configuración
- Vercel desplegará automáticamente

### 2. Netlify

1. **Instalar Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Build command:** `npm run build`
3. **Publish directory:** `dist`

4. **Configurar variables de entorno:**
   - En Netlify Dashboard → Site settings → Environment variables
   - Agrega las 3 variables de EmailJS

### 3. GitHub Pages

1. Instala `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Agrega al `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Nota:** GitHub Pages es estático, las variables de entorno deben estar en el código o usar otro método.

### 4. Otros servicios

- **Render:** Similar a Vercel/Netlify
- **Cloudflare Pages:** Conecta GitHub y configura variables
- **Firebase Hosting:** Usa Firebase CLI

## 🔧 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview

# Linter
npm run lint
```

## ⚠️ Recordatorios Importantes

1. **Variables de entorno:** NO subas el archivo `.env` al repositorio (ya está en `.gitignore`)
2. **Configura en producción:** Las variables deben estar en la plataforma de despliegue
3. **Reinicia después de cambios:** Si cambias variables, redeploya la aplicación
4. **Prueba el formulario:** Después de desplegar, prueba que el formulario de contacto funcione

## 📝 Estructura del Proyecto

```
mi app/
├── src/
│   ├── components/
│   │   ├── Contact.jsx      # Formulario con EmailJS
│   │   ├── Hero.jsx
│   │   ├── Highlights.jsx
│   │   └── Navbar.jsx
│   └── App.jsx
├── .env                      # Variables locales (NO subir)
├── .env.example             # Plantilla de ejemplo
├── package.json
└── vite.config.js
```

## 🎯 Próximos Pasos

1. Elige tu plataforma de despliegue
2. Configura las variables de entorno
3. Despliega
4. Prueba el formulario de contacto
5. ¡Comparte tu portafolio! 🎉
