import React, { PropTypes } from 'react';
import classNames from 'classnames';

import Paragraph from '../Paragraph';

import styles from './styles.scss';

export default function Progress({
  playerCurrent,
  computerTotal,
}) {
  const cx = {
    [styles.progress]: true,
  };

  return (
    <div className={classNames(cx)}>
      <Paragraph>
        You {playerCurrent} / {computerTotal} Computer
      </Paragraph>
    </div>
  );
}

Progress.propTypes = {
  playerCurrent: PropTypes.number,
  computerTotal: PropTypes.number,
};
