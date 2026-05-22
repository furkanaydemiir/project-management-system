import React from 'react'
import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container maxWidth="md">
      <nav>
        <Box sx={{
          mt: 4,
          p: { xs: 2, sm: 4, md: 8 }, // Ekran küçüldükçe iç boşluğu (padding) azaltıyoruz
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 3, sm: 0 } 
        }}>
          <Button 
            component={Link} 
            to="/createProject" 
            sx={{
              width: { xs: "100%", sm: "250px" },
              height: "100px",
              bgcolor: "darkcyan", 
              color: "white",
              borderRadius: 6,
              p: 4,
              '&:hover': { bgcolor: 'darkcyan', opacity: 0.9 } 
            }}
          >
            Proje Oluştur
          </Button>

          <Button 
            component={Link} 
            to="/teams" 
            sx={{
              width: { xs: "100%", sm: "250px" },
              height: "100px",
              bgcolor: "red", 
              color: "white",
              borderRadius: 6,
              p: 4,
              '&:hover': { bgcolor: 'red', opacity: 0.9 }
            }}
          >
            Ekiplerim
          </Button>
        </Box> 

        <Box sx={{
          mt: { xs: 0, sm: 4 }, 
          p: { xs: 2, sm: 4, md: 8 },
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 3, sm: 0 }
        }}>
          <Button 
            component={Link} 
            to="/assign" 
            sx={{
              width: { xs: "100%", sm: "250px" },
              height: "100px",
              bgcolor: "hotpink", 
              color: "white",
              borderRadius: 6,
              p: 4,
              '&:hover': { bgcolor: 'hotpink', opacity: 0.9 }
            }}
          >
            Proje Ata
          </Button>

          <Button 
            component={Link} 
            to="/onGoing" 
            sx={{
              width: { xs: "100%", sm: "250px" },
              height: "100px",
              bgcolor: "yellowgreen", 
              color: "white",
              borderRadius: 6,
              p: 4,
              '&:hover': { bgcolor: 'yellowgreen', opacity: 0.9 }
            }}
          >
            Devam Eden Projeler
          </Button>
        </Box> 
      </nav>
    </Container>
  )
}

export default Home