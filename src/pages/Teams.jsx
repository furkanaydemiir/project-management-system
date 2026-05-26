import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Teams() {
  const teams = useSelector((state) => state.team.teams);

  return (
    <Box sx={{ mt: 4, p: 2 }}>
      <Typography variant="h5" sx={{ mb: 4, textAlign: "center" }}>Mevcut Ekipler</Typography>
      {teams.length === 0 ? (
        <Typography variant="body1" sx={{ textAlign: "center", mt: 4 }}>
          Henüz hiç ekip oluşturulmamış. <br/><br/>
          <Button component={Link} to="/teams/createTeam" variant="contained">Hemen Oluştur</Button>
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {teams.map((team) => (
            <Grid item xs={12} sm={6} md={4} key={team.id}>
              <Card elevation={3} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" component="h2" gutterBottom>
                    {team.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {team.description || "Açıklama yok."}
                  </Typography>
                  <Typography variant="subtitle2">
                    Üye Sayısı: {team.members?.length || 0}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Teams;