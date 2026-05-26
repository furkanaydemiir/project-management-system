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
  const teams = useSelector((state) => state.team.teams);

  return (
    <TableContainer sx={{ mt: 4 }} component={Paper}>
      <Typography variant="h6" sx={{ p: 2 }}>Tüm Projeler</Typography>
      <Table aria-label="table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Proje İsmi</TableCell>
            <TableCell>Kategori</TableCell>
            <TableCell>Başlangıç / Bitiş</TableCell>
            <TableCell>Atanan Ekip</TableCell>
            <TableCell>Durum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.length === 0 && (
            <TableRow>
              <TableCell colSpan={5} align="center">Henüz proje bulunmamaktadır.</TableCell>
            </TableRow>
          )}
          {projects.map((project) => {
            const assignedTeam = teams.find(t => t.id === project.assignedTeamId);
            return (
              <TableRow key={project.id}>
                <TableCell>{project.projectName}</TableCell>
                <TableCell>{project.projectCategory}</TableCell>
                <TableCell>{project.startDate} - {project.deadline}</TableCell>
                <TableCell>{assignedTeam ? assignedTeam.name : "-"}</TableCell>
                <TableCell sx={{ color: project.status === "Devam ediyor" ? "primary.main" : "warning.main", fontWeight: "bold" }}>
                  {project.status || "Atama bekliyor"}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OnGoing;