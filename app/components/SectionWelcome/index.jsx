import React from 'react';
import classNames from 'classnames';

import SectionRoot from '../SectionRoot';
import Paragraph from '../Paragraph';
import Button from '../Button';

import styles from './styles.scss';

export default function SectionWelcome() {
  const cxSection = {
    [styles.sectionWelcome]: true,
  };

  const cxParagraph = {
    [styles.sectionWelcomeParagraph]: true,
  };

  const cxButton = {
    [styles.sectionWelcomeButton]: true,
  };

  return (
    <SectionRoot customClassName={classNames(cxSection)}>
      <Paragraph
        customClassName={classNames(cxParagraph)}
        center
      >
        Let's play a game, shall we?
      </Paragraph>
      <div className={styles.sectionWelcomeButtonContainer}>
        <Button
          text="Yes!"
          customClassName={classNames(cxButton)}
        />
      </div>
    </SectionRoot>
  );
}
