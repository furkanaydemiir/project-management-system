import React from "react";
import { useSelector } from "react-redux";
import {
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
  Grid,
  Typography,
} from "@mui/material";

function Assign() {
  const teams = useSelector((state) => state.team);
  const projects = useSelector((state) => state.projects);

  return (
    <Grid container spacing={4} sx={{ padding: 3 }}>
      
      <Grid item xs={12} md={6}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Projeler
        </Typography>
        
        <Grid container spacing={2}>
          {projects?.map((project) => (
            <Grid item xs={12} sm={6} key={project.id}>
              <Box sx={{ display: "flex", alignItems: "center", p: 1, borderRadius: 1 }}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: "primary.main" }}>
                    {project.projectName?.charAt(0).toUpperCase()}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText 
                  primary={project.projectName} 
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          Kişiler
        </Typography>

        <Grid container spacing={4}>
          {teams?.map((team) => (
            <Grid draggable item xs={12} sm={6} key={team.id}>
              <Box sx={{ display: "flex", alignItems: "center", p: 1,  borderRadius: 1 }}>
                <ListItemAvatar>
                  <Avatar>{team.name.charAt(0).toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={team.name} secondary={team.role} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>

    </Grid>
  );
}

export default Assign;