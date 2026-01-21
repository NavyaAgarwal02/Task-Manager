import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      required: true
    },
    dueDate: {
      type: Date,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', taskSchema);
export default Task;
