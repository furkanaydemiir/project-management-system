import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import TableContainer from "@mui/material/TableContainer";

function OnGoing() {
  const projects = useSelector((state) => state.projects);
  
  return (
    <TableContainer sx={{mt:4}} component={Paper}>
      <Table aria-label="table" sx={{ minWidth: 650,}}>
        
        <TableHead>
          <TableRow>
            <TableCell>Proje İsmi</TableCell>
            <TableCell>Proje Kategorisi</TableCell>
            <TableCell>Proje Açıklaması</TableCell>
            <TableCell>Başlangıç Tarihi</TableCell>
            <TableCell>Bitiş Tarihi</TableCell>
            <TableCell>Durum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project)=>(
            <TableRow key={project.id}>
              <TableCell>{project.projectName}</TableCell>
              <TableCell>{project.projectCategory}</TableCell>
              <TableCell>{project.projectCaption}</TableCell>
              <TableCell>{project.startDate}</TableCell>
              <TableCell>{project.deadline}</TableCell>
           
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OnGoing;
