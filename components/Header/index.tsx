import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { SignInButton } from '../SignInButton';

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src='/images/logo.svg' alt='ig.news' />
        <nav>
          <a href='' className={styles.active}>
            Home
          </a>
          <a href=''>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
};
