import { Stack, Button, TextField, Alert } from '@mui/material';
import { useState } from 'react';
import { SuperheroFormData } from '../types/SuperheroTypes';
import { createSuperhero } from '../api/superheroesApi';
import { useNavigate } from 'react-router-dom';

function SuperheroesForm() {
  const [formData, setFormData] = useState<SuperheroFormData>({
    name: '',
    superpower: '',
    humilityScore: 0,
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, name: value });
  };

  const handleSuperpowerChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, superpower: value });
  };

  const handleHumilityScoreChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = event.target;
    setFormData({ ...formData, humilityScore: parseInt(value, 10) });
  };

  const handleSubmit = async () => {
    try {
      await createSuperhero(formData);
      setFormData({ name: '', superpower: '', humilityScore: 0 });
      navigate(0);
    } catch (err) {
      console.log(err);
      setErrorMessage('Check the inputs, something is wrong!');
      setTimeout(() => setErrorMessage(null), 5000);
    }
  };

  return (
    <Stack sx={{ padding: 2, gap: 2, margin: 'auto', maxWidth: 500 }}>
      {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
      <TextField label="Name" variant="outlined" onChange={handleNameChange} />
      <TextField label="Superpower" variant="outlined" onChange={handleSuperpowerChange} />
      <TextField label="Humility Score" variant="outlined" onChange={handleHumilityScoreChange} />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
}

export default SuperheroesForm;
