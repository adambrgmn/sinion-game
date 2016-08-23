import React, { Component } from 'react';
import classNames from 'classnames';

import Button from '../../components/Button';
import Paragraph from '../../components/Paragraph';

import styles from './styles.scss';

export default class Hint extends Component {
  constructor(props) {
    super(props);
    this.state = { showHint: false };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.generateHintWindow = this.generateHintWindow.bind(this);
  }

  onButtonClick() { this.setState({ showHint: !this.state.showHint }); }

  generateHintWindow() {
    if (!this.state.showHint) return null;

    const hints = [
      'It\'s a quite simple game actually. Just do as I do.',
      'But to help you on the way I will give you one tip.',
      'You can use your keyboard, it\'s much simpler.',
      'Every tile represents a button:',
    ];

    return (
      <div className={classNames(styles.hintWindow)}>
        <Button
          customClassName={classNames(styles.hintExit)}
          onButtonClick={this.onButtonClick}
        >
          X
        </Button>

        {hints.map((text, key) => (
          <Paragraph
            key={key}
            customClassName={classNames(styles.hintParagraph)}
          >
            {text}
          </Paragraph>
        ))}

        <div className={classNames(styles.hintMiniMap)}>
          {[1, 2, 3, 4].map(num => <span key={num}>{num}</span>)}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className={classNames(styles.hintContainer)}>
        <Button
          customClassName={classNames(styles.hintButton)}
          onButtonClick={this.onButtonClick}
        >
          {this.state.showHint ? 'Hide hint' : 'Show hint'}
        </Button>
        {this.generateHintWindow()}
      </div>
    );
  }
}
