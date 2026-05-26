import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, FormControl, InputLabel, Select, MenuItem, Button, List, ListItem, ListItemText, ListItemSecondaryAction, Paper, Divider } from '@mui/material';
import { updateTeam } from '../redux/teamSlice';
import { toast } from 'sonner';

function AdjustTeam() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.team.teams);
  const users = useSelector(state => state.team.users);
  
  const [selectedTeamId, setSelectedTeamId] = useState('');

  const selectedTeam = teams.find(t => t.id === selectedTeamId);

  const handleAddMember = (user) => {
    if (!selectedTeam) return;
    
    // Check if user is already in the team
    if (selectedTeam.members?.some(m => m.id === user.id)) {
      toast.error(`${user.name} zaten bu ekipte!`);
      return;
    }

    const updatedTeam = {
      ...selectedTeam,
      members: [...(selectedTeam.members || []), user]
    };

    dispatch(updateTeam(updatedTeam));
    toast.success(`${user.name} ekibe eklendi!`);
  };

  const handleRemoveMember = (userId) => {
    if (!selectedTeam) return;

    const updatedTeam = {
      ...selectedTeam,
      members: selectedTeam.members.filter(m => m.id !== userId)
    };

    dispatch(updateTeam(updatedTeam));
    toast.success(`Üye ekipten çıkarıldı!`);
  };

  return (
    <Box sx={{ mt: 4, display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
      <Paper elevation={3} sx={{ p: 3, flex: 1 }}>
        <Typography variant="h6" gutterBottom>Ekip Seçin</Typography>
        <FormControl fullWidth sx={{ mt: 2, mb: 4 }}>
          <InputLabel id="team-select-label">Ekip</InputLabel>
          <Select
            labelId="team-select-label"
            value={selectedTeamId}
            label="Ekip"
            onChange={(e) => setSelectedTeamId(e.target.value)}
          >
            {teams.length === 0 && <MenuItem disabled value="">Önce ekip oluşturun</MenuItem>}
            {teams.map(team => (
              <MenuItem key={team.id} value={team.id}>{team.name}</MenuItem>
            ))}
          </Select>
        </FormControl>

        {selectedTeam && (
          <>
            <Typography variant="subtitle1" gutterBottom>Ekip Üyeleri</Typography>
            <List>
              {(!selectedTeam.members || selectedTeam.members.length === 0) && (
                <Typography variant="body2" color="text.secondary">Bu ekipte henüz üye yok.</Typography>
              )}
              {selectedTeam.members?.map(member => (
                <React.Fragment key={member.id}>
                  <ListItem>
                    <ListItemText primary={member.name} secondary={member.role} />
                    <ListItemSecondaryAction>
                      <Button size="small" color="error" onClick={() => handleRemoveMember(member.id)}>
                        Çıkar
                      </Button>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              ))}
            </List>
          </>
        )}
      </Paper>

      <Paper elevation={3} sx={{ p: 3, flex: 1, opacity: selectedTeam ? 1 : 0.5, pointerEvents: selectedTeam ? 'auto' : 'none' }}>
        <Typography variant="h6" gutterBottom>Kullanıcılar</Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Ekibe eklemek istediğiniz kullanıcıyı seçin.
        </Typography>
        <List>
          {users.map(user => {
            const isAlreadyMember = selectedTeam?.members?.some(m => m.id === user.id);
            return (
              <React.Fragment key={user.id}>
                <ListItem>
                  <ListItemText primary={user.name} secondary={user.role} />
                  <ListItemSecondaryAction>
                    <Button 
                      size="small" 
                      variant="contained" 
                      disabled={isAlreadyMember}
                      onClick={() => handleAddMember(user)}
                    >
                      {isAlreadyMember ? 'Ekli' : 'Ekle'}
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
        </List>
      </Paper>
    </Box>
  );
}

export default AdjustTeam;