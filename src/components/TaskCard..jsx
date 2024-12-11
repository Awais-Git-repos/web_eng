import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const TaskCard = ({ task, onEdit }) => {
  return (
    <Card style={{ marginBottom: "10px" }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
        <Typography variant="caption">Due: {task.dueDate}</Typography>
        <Avatar alt={task.assignedTo} src={task.assigneeAvatar} />
        <IconButton onClick={() => onEdit(task.id)}>
          <EditIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
