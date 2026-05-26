import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Paper, List, ListItem, ListItemText, ListItemSecondaryAction, Button, Divider } from '@mui/material';
import { deleteTeam } from '../redux/teamSlice';
import { updateProject } from '../redux/projectSlice';
import { toast } from 'sonner';

function DeleteTeam() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.team.teams);
  const projects = useSelector(state => state.projects);

  const handleDelete = (teamId, teamName) => {
    if (window.confirm(`'${teamName}' ekibini silmek istediğinize emin misiniz?`)) {
      // Unassign projects assigned to this team
      projects.forEach(project => {
        if (project.assignedTeamId === teamId) {
          dispatch(updateProject({
            id: project.id,
            assignedTeamId: null,
            status: "Atama bekliyor"
          }));
        }
      });
      
      // Delete the team
      dispatch(deleteTeam(teamId));
      toast.success(`'${teamName}' başarıyla silindi!`);
    }
  };

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: '600px' }}>
        <Typography variant="h5" gutterBottom align="center" color="error">
          Ekip Sil
        </Typography>
        
        {teams.length === 0 ? (
          <Typography variant="body1" align="center" sx={{ mt: 2 }}>
            Sistemde kayıtlı ekip bulunmamaktadır.
          </Typography>
        ) : (
          <List>
            {teams.map(team => (
              <React.Fragment key={team.id}>
                <ListItem>
                  <ListItemText 
                    primary={team.name} 
                    secondary={`Üye Sayısı: ${team.members?.length || 0}`} 
                  />
                  <ListItemSecondaryAction>
                    <Button 
                      variant="outlined" 
                      color="error" 
                      onClick={() => handleDelete(team.id, team.name)}
                    >
                      Sil
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
}

export default DeleteTeam;