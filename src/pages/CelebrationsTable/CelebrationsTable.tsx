import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  church: string,
  dayOfTheWeek: string,
  hour: string,
  type: string,
) {
  return { church, dayOfTheWeek, hour, type};
}

const rows = [
  createData( "Perpétuo Socorro", "Domingo", "19:00", "Missa",),
];

export const CelebrationsTable = () => {
  return (
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
          {rows.map((row) => (
            <TableRow
              key={row.dayOfTheWeek}
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
  );
}