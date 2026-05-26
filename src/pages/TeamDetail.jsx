import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Paper, List, ListItem, ListItemText, Divider, Chip } from '@mui/material';

function TeamDetail() {
  const teams = useSelector(state => state.team.teams);
  const projects = useSelector(state => state.projects);
  const [selectedTeamId, setSelectedTeamId] = useState('');

  const selectedTeam = teams.find(t => t.id === selectedTeamId);
  const assignedProjects = projects.filter(p => p.assignedTeamId === selectedTeamId);

  return (
    <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Paper elevation={3} sx={{ p: 4, width: '100%', maxWidth: '600px' }}>
        <Typography variant="h5" gutterBottom align="center">Ekip Detayları</Typography>
        
        <FormControl fullWidth sx={{ mt: 2, mb: 4 }}>
          <InputLabel id="team-detail-select-label">Görüntülenecek Ekibi Seçin</InputLabel>
          <Select
            labelId="team-detail-select-label"
            value={selectedTeamId}
            label="Görüntülenecek Ekibi Seçin"
            onChange={(e) => setSelectedTeamId(e.target.value)}
          >
             {teams.length === 0 && <MenuItem disabled value="">Önce ekip oluşturun</MenuItem>}
            {teams.map(team => (
              <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedTeam && (
          <Box>
            <Typography variant="h6" color="primary">{selectedTeam.name}</Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>{selectedTeam.description || "Açıklama belirtilmemiş."}</Typography>
            
            <Typography variant="subtitle1" sx={{ mt: 3, fontWeight: 'bold' }}>Üyeler ({selectedTeam.members?.length || 0})</Typography>
            <List sx={{ bgcolor: 'background.paper' }}>
              {(!selectedTeam.members || selectedTeam.members.length === 0) && (
                <Typography variant="body2" color="text.secondary">Bu ekipte henüz üye yok.</Typography>
              )}
              {selectedTeam.members?.map(member => (
                <React.Fragment key={member.id}>
                  <ListItem>
                    <ListItemText primary={member.name} secondary={member.email} />
                    <Chip label={member.role} size="small" color="primary" variant="outlined" />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>

            <Typography variant="subtitle1" sx={{ mt: 3, fontWeight: 'bold' }}>Atanan Projeler ({assignedProjects.length})</Typography>
            <List>
              {assignedProjects.length === 0 && (
                <Typography variant="body2" color="text.secondary">Bu ekibe henüz proje atanmamış.</Typography>
              )}
              {assignedProjects.map(project => (
                <React.Fragment key={project.id}>
                  <ListItem>
                    <ListItemText primary={project.projectName} secondary={`Bitiş: ${project.deadline}`} />
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default TeamDetail;