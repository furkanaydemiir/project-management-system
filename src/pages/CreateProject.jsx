import React from 'react'
import { useForm } from 'react-hook-form'
import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { addProject } from '../redux/projectSlice'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function CreateProject() {
  const { register, reset ,watch, handleSubmit, formState: { errors } } = useForm()
  const projects = useSelector((state) => state.projects)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const startDate = watch("startDate")

  const onSubmit = (data) => {
    const newProject = {
      ...data,
      id: crypto.randomUUID()
    }
    console.log("Form Verileri", newProject)
    dispatch(addProject(newProject))
    toast.success("Proje başarıyla eklendi!")

    reset()
    
    navigate("/")
  }

  const onError = (formErrors) => {
    if (formErrors.deadline) {
      toast.error(formErrors.deadline.message)
    }
    if (formErrors.projectName || formErrors.projectCategory || formErrors.projectCaption) {
      toast.error("Lütfen zorunlu alanları doldurunuz!")
    }
  }

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", mt: 4 }}>
      <Paper elevation={4} sx={{ p: 4, minWidth: "550px" }}>
        <Typography variant='h6' component={"h1"} sx={{ textAlign: "center" }}>
          Proje Ekle
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit(onSubmit, onError)} sx={{ mt: 4, gap: 4, display: "flex", flexDirection: "column" }}>
          
          <TextField
            label="Proje İsmini Giriniz"
            {...register('projectName', { required: true })}
            error={!!errors.projectName}
          />
          
          <TextField 
            label="Projenin Kategorisini Giriniz"
            {...register("projectCategory", { required: true })}
            error={!!errors.projectCategory}
          />
          
          <TextField 
            multiline 
            rows={4} 
            label="Proje Açıklaması"
            {...register("projectCaption", { required: true })}
            error={!!errors.projectCaption}
          />
          
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "48%" }}>
              <Typography variant='overline'>Proje Başlangıç Tarihi</Typography>
              <TextField 
                {...register("startDate", { required: true })} 
                type='date'
                error={!!errors.startDate}
              />
            </Box>
            
            <Box sx={{ display: "flex", flexDirection: "column", width: "48%" }}>
              <Typography variant='overline'>Proje Bitiş Tarihi</Typography>
              
              <TextField  
                type='date'
                error={!!errors.deadline}
                {...register("deadline", {
                  required: "Bitiş Tarihi Zorunludur.",
                  validate: (value) => {
                    if (!startDate) return true;
                    const start = new Date(startDate);
                    const end = new Date(value);
                    return end >= start || "Bitiş Tarihi başlangıç tarihinden önce olamaz!"
                  }
                })} 
              />
            </Box>
          </Box>
          
          <Box sx={{ display: "flex", justifyContent: "center", gap: 8 }}>
            <Button type='submit' variant='contained' color='success'>Onayla</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}

export default CreateProject