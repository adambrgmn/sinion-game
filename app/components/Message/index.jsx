import React, { PropTypes } from 'react';

import Paragraph from '../Paragraph';

import styles from './styles.scss';

export default function Message({
  message,
}) {
  return (
    <div className={styles.message}>
      <Paragraph customClassName={styles.messageText}>
        {message}
      </Paragraph>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.string,
};
