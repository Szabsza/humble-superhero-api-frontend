import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@mui/material';
import { getSuperheroes } from '../api/superheroesApi';
import { useEffect, useState } from 'react';

type Superhero = {
  name: string;
  superpower: string;
  humilityScore: number;
};

function SuperheroesList() {
  const [superheroes, setSuperheroes] = useState<Superhero[]>([]);

  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        const data = await getSuperheroes();
        setSuperheroes(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchSuperheroes();
  }, []);

  if (superheroes.length) {
    return (
      <TableContainer sx={{ maxWidth: 750, margin: 'auto', marginTop: 2 }} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Superpower</TableCell>
              <TableCell align="right">Humility Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {superheroes.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.superpower}</TableCell>
                <TableCell align="right">{row.humilityScore}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  } else {
    return <Typography sx={{ margin: 'auto', maxWidth: 750 }}>There are no superheroes yet...</Typography>;
  }
}

export default SuperheroesList;
