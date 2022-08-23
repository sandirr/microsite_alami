import React from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import ROUTES from '../../../Configs/routes';

export default function Header() {
  return (
    <div className={styles.root}>
      <Container maxWidth="xl">
        <h1 className={styles.h1}>Website Test</h1>
        <div className={styles.menu}>
          <Link to={ROUTES.home()}>Homepage</Link>
          <Link to={ROUTES.about()}>About</Link>
          <Link to={ROUTES.contact()}>Contact</Link>
        </div>
      </Container>
    </div>
  );
}
