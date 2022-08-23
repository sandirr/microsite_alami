import React from 'react';
import { localData } from '../../../Configs/helpers';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <div className={styles.root}>
      <div>PT. ABC</div>
      <div>Jl Setiabudi no 33</div>
      <div>{localData.phoneNumber}</div>
    </div>
  );
}
