import Task from '../models/task.js';

// CREATE TASK
export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET ALL TASKS
export const getAllTasks = async (req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 });
  res.json(tasks);
};

// GET TASK BY ID
export const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
};

// UPDATE TASK
export const updateTask = async (req, res) => {
  const task = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json(task);
};

// DELETE TASK
export const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    return res.status(404).json({ message: 'Task not found' });
  }

  res.json({ message: 'Task deleted successfully' });
};
