import React, { Component } from 'react';
import classNames from 'classnames';

import SectionRoot from '../../components/SectionRoot';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import List from '../../components/List';

import styles from './styles.scss';

import { sectionWelcome } from '../../content/content.json';

export default class SectionWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: sectionWelcome,
      currentView: 0,
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick(goTo) {
    if (goTo === 'next') {
      this.setState(({ currentView }) => ({
        currentView: currentView + 1,
      }));
    }
  }

  renderButtons() {
    const { currentView } = this.state;
    const currentPage = this.state.pages[currentView];
    const cxButton = { [styles.sectionWelcomeButton]: true };

    return currentPage.buttons.map(({ text, goTo }) => (
      <Button
        key={Math.random()}
        text={text}
        onButtonClick={() => this.onButtonClick(goTo)}
        customClassName={classNames(cxButton)}
      />
    ));
  }

  render() {
    const { currentView } = this.state;
    const currentPage = this.state.pages[currentView];

    // Classnames
    const cxSection = { [styles.sectionWelcome]: true };
    const cxParagraph = { [styles.sectionWelcomeParagraph]: true };

    return (
      <SectionRoot customClassName={classNames(cxSection)}>
        <Paragraph
          customClassName={classNames(cxParagraph)}
          center
        >
          {currentPage.text}
        </Paragraph>

        <List items={currentPage.list} />

        <div className={styles.sectionWelcomeButtonContainer}>
          {this.renderButtons()}
        </div>
      </SectionRoot>
    );
  }
}
