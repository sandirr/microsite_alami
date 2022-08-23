import React from 'react';
import { Container, Grid } from '@mui/material';
import styles from './about.module.css';
import { generateShortLorem } from '../../../Configs/helpers';

export default function About() {
  return (
    <div className={styles.root}>
      <Grid container>
        <Grid item sx={{ py: 2, bgcolor: 'rgb(181, 175, 121)' }} md={4} xs={12}>
          <Container className={styles.specialContainer}>
            <h2>About 1</h2>
            <div className={styles.specialContent}>
              {generateShortLorem()}
            </div>
          </Container>
        </Grid>
        <Grid item sx={{ py: 2, bgcolor: 'rgb(172, 170, 157)' }} md={8} xs={12}>
          <Container>
            <h2>About 2</h2>
            <Grid container spacing={4}>
              <Grid item sm={6} xs={12}>
                <div>
                  {generateShortLorem()}
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div>
                  {generateShortLorem()}
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div>
                  {generateShortLorem()}
                </div>
              </Grid>
              <Grid item sm={6} xs={12}>
                <div>
                  {generateShortLorem()}
                </div>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
