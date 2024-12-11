import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@mui/material";

const Dashboard = () => {
  const stats = [
    { title: "Total Tasks", value: 150, color: "#1976d2" },
    { title: "Completed Tasks", value: 100, color: "#4caf50" },
    { title: "Pending Tasks", value: 40, color: "#ff9800" },
    { title: "Overdue Tasks", value: 10, color: "#f44336" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                backgroundColor: stat.color,
                color: "#fff",
              }}
            >
              <CardContent>
                <Typography variant="h6">{stat.title}</Typography>
                <Typography variant="h4">{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h6" sx={{ marginTop: "30px" }}>
        Progress Overview
      </Typography>
      <CircularProgress
        variant="determinate"
        value={67} // Example: Replace with actual progress data
        size={100}
        sx={{ color: "#1976d2", marginTop: "20px" }}
      />
      <Typography variant="body1">67% Completed</Typography>
    </div>
  );
};

export default Dashboard;
