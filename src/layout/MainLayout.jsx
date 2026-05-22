import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
    <AppBar position='static'>
      <Toolbar>
         <Typography sx={{textAlign:"center",marginRight:"auto"}}>
           Proje Yönetim Sistemi
         </Typography>
         <Button component={Link} to="/" variant='contained'>
          Ana Sayfa
         </Button>
      </Toolbar>
    </AppBar>
    <Container maxWidth="md"> 
    <Outlet/>
    </Container>
    </>
  )
}

export default MainLayout