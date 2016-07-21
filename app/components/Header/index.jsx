import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Button from '../Button';

import styles from './styles.scss';

export default function Header({ onButtonHowToClick }) {
  const cxHeader = {
    [styles.header]: true,
  };

  const cxLogo = {
    [styles.headerLogo]: true,
  };

  const cxButtonContainer = {
    [styles.headerButtonHowToContainer]: true,
  };

  return (
    <header className={classNames(cxHeader)}>
      <h1 className={classNames(cxLogo)}>Sinion</h1>
      <div className={classNames(cxButtonContainer)}>
        <Button
          text="How to play"
          onButtonClick={onButtonHowToClick}
          customClassName="buttonHowTo"
        />
      </div>
    </header>
  );
}

Header.propTypes = {
  onButtonHowToClick: PropTypes.func,
};
