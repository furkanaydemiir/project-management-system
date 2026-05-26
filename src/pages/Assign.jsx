import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { updateProject } from "../redux/projectSlice";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

function Assign() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const teams = useSelector((state) => state.team.teams);
  const projects = useSelector((state) => state.projects);
  const unassignedProjects = projects.filter(p => !p.assignedTeamId);

  const [selectedTeams, setSelectedTeams] = useState({});

  const handleTeamChange = (projectId, teamId) => {
    setSelectedTeams(prev => ({ ...prev, [projectId]: teamId }));
  };

  const handleAssign = (project) => {
    const teamId = selectedTeams[project.id];
    if (!teamId) {
      toast.error("Lütfen bir ekip seçiniz!");
      return;
    }
    
    dispatch(updateProject({ 
      id: project.id, 
      assignedTeamId: teamId,
      status: "Devam ediyor" 
    }));
    toast.success(`${project.projectName} projesi başarıyla atandı!`);
  };

  return (
    <Box sx={{ padding: 3, mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}>
        Proje Ata
      </Typography>

      {unassignedProjects.length === 0 ? (
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Atama bekleyen proje bulunmamaktadır.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {unassignedProjects.map((project) => (
            <Grid item xs={12} md={6} key={project.id}>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>{project.projectName}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Kategori: {project.projectCategory}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Bitiş: {project.deadline}
                  </Typography>
                  
                  <FormControl fullWidth sx={{ mt: 2 }}>
                    <InputLabel id={`select-label-${project.id}`}>Ekip Seç</InputLabel>
                    <Select
                      labelId={`select-label-${project.id}`}
                      value={selectedTeams[project.id] || ""}
                      label="Ekip Seç"
                      onChange={(e) => handleTeamChange(project.id, e.target.value)}
                    >
                      {teams.length === 0 && <MenuItem disabled value="">Önce ekip oluşturun</MenuItem>}
                      {teams.map(team => (
                        <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </CardContent>
                <CardActions>
                  <Button 
                    size="small" 
                    variant="contained" 
                    color="primary" 
                    onClick={() => handleAssign(project)}
                    disabled={teams.length === 0}
                    fullWidth
                  >
                    Projeye Ata
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Assign;