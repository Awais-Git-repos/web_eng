import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

const TaskModal = ({ open, onClose, task, onSave }) => {
  const [editedTask, setEditedTask] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Title"
          name="title"
          value={editedTask.title}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={editedTask.description}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Due Date"
          name="dueDate"
          value={editedTask.dueDate}
          onChange={handleChange}
          type="date"
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={() => onSave(editedTask)}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;
