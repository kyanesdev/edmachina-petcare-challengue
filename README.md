# 🐾 edmachina-petcare-challenge


¡Bienvenido al proyecto PetCare! 🚀 Este desafío de frontend ha sido desarrollado utilizando Vue.js (version 2, Options API) para crear un dashboard interactivo y amigable para la gestión de cuidados de mascotas. A continuación, se detallan los pasos de instalación y los logros clave del proyecto.

**Aplicación desplegada en la siguiente instancia :️** [🌐 Visita la aplicación en GitHub Pages 🌐](https://kyanesdev.github.io/edmachina-petcare-challengue/)


## ✨ Funcionalidades Implementadas

1. **Pantalla de Login 🔒**
   - Se ha creado una pantalla de inicio de sesión utilizando Vuex para la gestión de estados, persistiendo la información en `localStorage`.
   - La contraseña se maneja de forma segura con cifrado, evitando el almacenamiento en texto plano para garantizar la seguridad de los datos del usuario. 🔐
   - Se implementó un sistema de **recovery codes**: Estos códigos de recuperación son mostrados una sola vez al usuario durante el registro, y es responsabilidad del usuario guardarlos de manera segura para futuros cambios de contraseña.
   - Diseño coherente con el modelo proporcionado en Figma, asegurando una experiencia visual consistente.

2. **Dashboard Interactivo 📊**
   - Desarrollo basado en un diseño proporcionado en Figma. Dado que no se especificó la librería de componentes y tipografía utilizada, se optó por usar `PrimeVue` y `Material Design Icons` para aproximarse al diseño original.


3. **Pantalla de Construcción 🚧**
   - Para las funcionalidades en desarrollo, se creó una pantalla que informa al usuario que la sección está en construcción. Esto proporciona una experiencia de usuario clara y profesional.

4. **Despliegue en GitHub Pages 🌐**
   - La aplicación ha sido desplegada en la nube utilizando GitHub Pages, permitiendo un acceso fácil y rápido a la demo del proyecto.

## 📋 Requerimientos Técnicos

- **Desarrollo Reactivo**: La aplicación está construida para ser reactiva, respondiendo a las interacciones del usuario de manera eficiente.
- **Persistencia de Datos**: Implementación de un store para gestionar la persistencia de datos a lo largo de la aplicación.
- **Documentación**: Incluye un archivo README con instrucciones claras para la instalación y despliegue del proyecto.

## 🚀 Guía de Configuración del Proyecto
En el caso de que desees levantar el proyecto puedes hacerlo siempre y cuando dispongas de la versión de node 18!

**VERSIÓN DE NODE**: 18.17.0

### 1) Instalación de Dependencias
Para comenzar, instala las dependencias del proyecto ejecutando el siguiente comando:

```bash
npm install
```

### 2) Levantar el proyecto

```bash
npm run serve
```

## 🔎 Observaciones: Posibles mejoras

Aunque estas consideraciones no fueron requeridas ni contempladas durante el desarrollo del challenge, se proponen las siguientes mejoras e ideas que deberían tenerse en cuenta en entornos laborales productivos.

1. **Diseño responsivo 📱**
   - En las aplicaciones cotidianas es indispensable contar con un enfoque responsivo, ya sean estategias como `Mobile-first` o como también `Desktop-first`.<br><br>
2. **Uso de CDN para las imagenes y contenido estático ☁️**
   - El uso de un CDN como `Clouflare` nos provee un mejor rendimiento de nuestra aplicación y también evita problemas de ataques DDoS.<br><br>
3. **Testings de la aplicación 📝**
   - Ya sean testings de diseño (casos de prueba), unitarios y E2E (End to End), nos proveen una forma de poder seguir subiendo código continuamente de manera segura, asi también como poder visualizar distintos comportamientos de nuestra aplicación. Estas serian las primeras pruebas antes de llegar en manos del equipo de QA.

## ✍️ Autor
👨‍💻 **Kevin Leonel Yanes**

*Ingeniero de Software | Ssr Software Developer | DevOps Engineer*