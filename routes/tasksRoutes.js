import express from "express";
import {
  addTask,
  deleteTask,
  deleteAllTask,
  editTask,
  completeTask,
  getUserTasksByPriority,
} from "../controllers/taskController.js";
import checkAuth from "../middleware/authMiddleware.js";

const routerTasks = express.Router();

// Obtener tareas del usuario organizadas por prioridad
routerTasks.get('/mytasks', checkAuth, getUserTasksByPriority);

// Agregar una nueva tarea
routerTasks.post('/add', checkAuth, addTask);

// Eliminar una tarea
routerTasks.delete('/delete/:id', checkAuth, deleteTask);

// Eliminar todas las tareas del usuario autenticado
routerTasks.delete('/deleteall', checkAuth, deleteAllTask);

// Editar una tarea
routerTasks.put('/edit/:id', checkAuth, editTask);

// Marcar una tarea como completada
routerTasks.put('/complete/:id', checkAuth, completeTask);

export default routerTasks;