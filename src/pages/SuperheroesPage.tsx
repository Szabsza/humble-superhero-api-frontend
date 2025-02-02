import { Divider, Typography } from '@mui/material';
import SuperheroesForm from '../components/SuperheroesForm';
import SuperheroesList from '../components/SuperheroesList';

function SuperheroesPage() {
  return (
    <>
      <Divider sx={{ margin: 'auto', maxWidth: 750 }}>
        <Typography>Add new superheroes</Typography>
      </Divider>
      <SuperheroesForm />
      <Divider sx={{ margin: 'auto', maxWidth: 750 }}>
        <Typography>Superheroes</Typography>
      </Divider>
      <SuperheroesList />
    </>
  );
}

export default SuperheroesPage;
