import { Avatar, Box, Button, Grid } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function TeamLayout() {
  return (
    <nav>
     <Box sx={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",p:2,gap:6}}>
       <Button component={Link} to="/teams/createTeam">Ekip Oluştur</Button>
       <Button component={Link} to="/teams/teamDetail">Ekip Detaylarını Göster</Button>
       <Button component={Link} to="/teams/adjustTeam">Ekip Ekle</Button>
       <Button component={Link} to="/teams/deleteTeam">Ekip Sil</Button>
     </Box>
     <Outlet/>
    </nav>
  )
}

export default TeamLayout