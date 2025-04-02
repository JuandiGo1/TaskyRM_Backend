# 🚀 TaskyRM - API Backend

TaskyRM es el backend de una aplicación de gestión de tareas (**To-Do App**) desarrollada con **Node.js, Express, MongoDB y JWT**. Este backend proporciona una API REST segura y eficiente para la autenticación y gestión de tareas.

---

## 🌍 Despliegue y Repositorio

🔹 **Backend en Producción:** [TaskyRM Backend - Vercel](https://tasky-rm-backend.vercel.app)  


---

## 📌 API REST - Endpoints Principales

### 🔐 **Autenticación**
- `POST /register` → Registro de nuevos usuarios.
  - **Body:** `{ "username": "Usuario", "password": "123456" }`
  - **Respuesta:** `{ "msg": "Usuario registrado con éxito" }`

- `POST /login` → Inicio de sesión.
  - **Body:** `{ "username": "Usuario", "password": "123456"  }`
  - **Respuesta:** `{ "message": "Inicio de sesión exitoso", "token": "jwt_token"}`
  - **Nota:** Devuelve una cookie con el token de autenticación.

- `POST /logout` → Cierre de sesión.
  - **Respuesta:** `{ "msg": "Cierre de sesión exitoso" }`

### 📝 **Gestión de Tareas**
- `GET /task/mytasks` → Obtener tareas del usuario organizadas por prioridad.
  - **Headers:** `{ "Authorization": "Bearer jwt_token" }`
  - **Respuesta:** `{ "message": "Tareas obtenidas con éxito", "tasks": [...] }`

- `POST /task/add` → Agregar una nueva tarea.
  - **Headers:** `{ "Authorization": "Bearer jwt_token" }`
  - **Body:** `{ "title": "Nueva tarea", "description": "Detalles", "dueDate": "2024-12-31", "priority": "Alta" }`
  - **Respuesta:** `{ "message": "Tarea creada con éxito", "task": {...} }`

- `PUT /task/edit/:id` → Editar una tarea.
  - **Headers:** `{ "Authorization": "Bearer jwt_token" }`
  - **Body:** `{ "title": "Tarea actualizada", "description": "Detalles modificados" }`
  - **Respuesta:** `{ "message": "Tarea actualizada con éxito", "task": {...} }`

- `PUT /task/complete/:id` → Marcar una tarea como completada.
  - **Headers:** `{ "Authorization": "Bearer jwt_token" }`
  - **Respuesta:** `{ "message": "Tarea marcada como completada", "task": {...} }`

- `DELETE /task/delete/:id` → Eliminar una tarea.
  - **Headers:** `{ "Authorization": "Bearer jwt_token" }`
  - **Respuesta:** `{ "message": "Tarea eliminada con éxito" }`

---

## 🚀 Tecnologías Usadas
- **Node.js** + **Express.js**
- **MongoDB** (Base de datos NoSQL)
- **JWT** (Autenticación segura)
- **Vercel** (Despliegue)

---

## 🛠 Instalación y Uso
Si deseas correr **TaskyRM Backend** localmente, sigue estos pasos:

### 1️⃣ Clonar el Repositorio
```bash
git clone https://github.com/JuandiGo1/TaskyRM_Backend.git
cd taskyrm-backend
```

### 2️⃣ Configurar Variables de Entorno
Crea un archivo `.env` en la raíz del backend con las siguientes variables:
```env
PORT=5000
MONGO_URI=tu_conexion_a_mongodb (pruebalo en local con mongoDB)
JWT_SECRET=tu_secreto_jwt (define tu palabra clave para los JWT)
FRONTEND_URL= tu http://localhost para el front
```

### 3️⃣ Instalar Dependencias y Ejecutar el Servidor
```bash
# Instalar dependencias
npm install

# Iniciar el servidor
dev: npm run dev  # Modo desarrollo
```

El backend se ejecutará en `http://localhost:5000` 🚀

---



¡Gracias por usar **TaskyRM Backend**! 🎉

