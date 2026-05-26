import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addTeam } from '../redux/teamSlice';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

function CreateTeam() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const newTeam = {
      ...data,
      id: crypto.randomUUID(),
      members: [] // A new team starts with no members
    };
    dispatch(addTeam(newTeam));
    toast.success("Ekip başarıyla oluşturuldu!");
    reset();
    navigate("/teams");
  };

  const onError = () => {
    toast.error("Lütfen tüm zorunlu alanları doldurun!");
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 4 }}>
      <Paper elevation={4} sx={{ p: 4, minWidth: "400px" }}>
        <Typography variant='h6' component={"h1"} sx={{ textAlign: "center", mb: 4 }}>
          Yeni Ekip Oluştur
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit(onSubmit, onError)} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <TextField
            label="Ekip Adı"
            {...register('name', { required: true })}
            error={!!errors.name}
            helperText={errors.name && "Ekip adı zorunludur."}
          />
          
          <TextField 
            label="Ekip Açıklaması (Opsiyonel)"
            multiline
            rows={3}
            {...register("description")}
          />
          
          <Button type='submit' variant='contained' color='primary' sx={{ mt: 2 }}>
            Oluştur
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default CreateTeam;