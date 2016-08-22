import React, { Component } from 'react';

import styles from './styles.scss';

import {
  Menu,
  Message,
  Game,
  Progress,
} from '../../components';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerSeq: [],
      playerSeq: [],
      gameRunning: false,
      message: 'Let\'s get started! (Click the button 👆)',
      progress: {
        computerTotal: 0,
        playerCurrent: 0,
      },
    };
  }

  onMenuButtonClick = () => this.setState({ gameRunning: !this.state.gameRunning }, () => {
    this.updateMessage('Okey, great. I will go first and you just follow along...');
  })

  updateMessage = (msg) => this.setState({ message: msg })

  render() {
    const {
      gameRunning,
      message,
      progress,
    } = this.state;

    return (
      <div className={styles.appContainer}>
        <Menu gameRunning={gameRunning} onMenuButtonClick={this.onMenuButtonClick} />
        <Message message={message} />
        <Game /> {/* activeButton, onButtonClick(num) */}
        <Progress {...progress} />
      </div>
    );
  }
}
