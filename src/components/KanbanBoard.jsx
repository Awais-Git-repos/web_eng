import React from "react";
import { Grid, Card, CardContent, Typography, Avatar } from "@mui/material";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const KanbanBoard = ({ tasks, onDragEnd }) => {
  const categories = ["To-Do", "In Progress", "Completed"];

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={12} sm={4} key={category}>
            <Typography variant="h6">{category}</Typography>
            <Droppable droppableId={category}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                    minHeight: "300px",
                    background: "#f4f4f4",
                    padding: "10px",
                  }}
                >
                  {tasks
                    .filter((task) => task.status === category)
                    .map((task, index) => (
                      <Draggable
                        key={task.id}
                        draggableId={task.id}
                        index={index}
                      >
                        {(provided) => (
                          <Card
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{ marginBottom: "10px" }}
                          >
                            <CardContent>
                              <Typography variant="body1">
                                {task.title}
                              </Typography>
                              <Avatar
                                alt={task.assignedTo}
                                src={task.assigneeAvatar}
                              />
                            </CardContent>
                          </Card>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </Grid>
        ))}
      </Grid>
    </DragDropContext>
  );
};

export default KanbanBoard;
