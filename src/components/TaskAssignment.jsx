import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const TaskAssignment = () => {
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
  });

  const handleChange = (e) => {
    setTaskDetails({ ...taskDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Task Assigned:", taskDetails);
    alert("Task Assigned Successfully!");
    setTaskDetails({ title: "", description: "", assignedTo: "", dueDate: "" });
  };

  return (
    <Box sx={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Typography variant="h5" gutterBottom>
        Assign a Task
      </Typography>
      <TextField
        label="Task Title"
        name="title"
        value={taskDetails.title}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Task Description"
        name="description"
        value={taskDetails.description}
        onChange={handleChange}
        fullWidth
        margin="normal"
        multiline
        rows={4}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Assign To</InputLabel>
        <Select
          name="assignedTo"
          value={taskDetails.assignedTo}
          onChange={handleChange}
        >
          <MenuItem value="Me">Me</MenuItem>
          <MenuItem value="Team Member 1">Team Member 1</MenuItem>
          <MenuItem value="Team Member 2">Team Member 2</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Due Date"
        name="dueDate"
        type="date"
        value={taskDetails.dueDate}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: "20px" }}
        onClick={handleSubmit}
      >
        Assign Task
      </Button>
    </Box>
  );
};

export default TaskAssignment;
