import React, { useState } from 'react';
import { Box, Container, Grid } from '@mui/material';
import Elements from '../../Elements';
import Fragments from '../../Fragments';
import styles from './about.module.css';
import { localData } from '../../../Configs/helpers';

export default function About() {
  const [field, setField] = useState('');

  const handleChangeField = ({ target }) => {
    setField(target.value);
  };

  const saveNewNumber = (e) => {
    e.preventDefault();
    localData.phoneNumber = field;
    setField('');
  };

  return (
    <div className={styles.root}>
      <Elements.Header />
      <h1>This Is Homepage</h1>
      <Box sx={{ mt: 3 }}>
        <Fragments.About />
      </Box>

      <Container maxWidth="xl" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item>
            <form className="form-container" onSubmit={saveNewNumber}>
              <div>No Telp</div>
              <div>
                <input value={field} onChange={handleChangeField} />
              </div>
              <button type="submit">Go</button>
            </form>
          </Grid>
          <Grid item>
            <Fragments.Contact />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
