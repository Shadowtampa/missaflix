import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { motion } from "framer-motion";
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import SelectSearch from 'react-select-search';

export const CelebrationsTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data here
      fetch('celebrationsData.json')
      .then(response => response.json())
      .then(data => {
        setData(data.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const options = data.map(item => ({
    name: item.church,
    value: item.church.toLowerCase().replace(/\s/g, '-')
  }));

  const rows = data.flatMap(item =>
    item.celebrations.map(celebration => (
      createData(
        item.church,
        celebration.dayOfTheWeek,
        celebration.hour,
        celebration.type
      )
    ))
  );

  function createData(church, dayOfTheWeek, hour, type) {
    return { church, dayOfTheWeek, hour, type };
  }

  return (
    <>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                MissaFlix
              </Typography>
              <SelectSearch options={options} placeholder="Todas as Igrejas" />
            </Toolbar>
          </AppBar>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dia da semana</TableCell>
                <TableCell align="center">Horário</TableCell>
                <TableCell align="center">Tipo de Celebração</TableCell>
                <TableCell align="center">Igreja</TableCell>
                <TableCell align="center">Rotas</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.dayOfTheWeek}
                  </TableCell>
                  <TableCell align="center">{row.hour}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.church}</TableCell>
                  <TableCell align="center"><button>Rotas</button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </motion.main>
    </>
  );
}
