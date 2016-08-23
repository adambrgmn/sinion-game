import React, { Component } from 'react';
import * as config from '../../config';

import styles from './styles.scss';

import randomInt from '../../utils/randomInt';

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
      computerPlaying: false,
      activeButton: undefined,
      error: false,
      message: 'Let\'s get started! (Click the button 👆)',
      progress: {
        computerTotal: 0,
        playerCurrent: 0,
      },
    };
  }

  componentDidMount() {
    window.addEventListener('keydown', (event) => {
      const { key } = event;
      const keyNum = Number(key);

      if (keyNum > 0 && keyNum < 5) {
        event.preventDefault();
        this.onPlayerButtonPress(keyNum);
      }
    });
  }

  onMenuButtonClick = () => {
    const { gameRunning } = this.state;

    // Check if game is running
    if (gameRunning) {
      // If game is running, reset the game plan and everything with it
      // The restart and let the computer play a new sequence
      this.setState({
        gameRunning: !gameRunning,
        message: 'So you wan\'t to go again? Okey, I go first...',
        computerSeq: [],
        progress: {
          computerTotal: 0,
          playerCurrent: 0,
        },
      }, this.playComputerRound);
    } else {
      // Else, set state to game running and let the the computer play a sequence
      this.setState({
        gameRunning: !gameRunning,
        message: 'Okey, great. I will go first and you just follow along...',
      }, this.playComputerRound);
    }
  }

  onPlayerButtonPress = (clickedTile) => {
    const {
      computerSeq,
      playerSeq,
    } = this.state;

    const playerSeqLength = playerSeq.length;
    const correspondingComputerTile = computerSeq[playerSeqLength];

    if (correspondingComputerTile !== clickedTile) {
      return this.setState({
        playerSeq: [],
        error: true,
        message: 'Gaah! Sorry that was wrong! Wan\'t to go at it again? (Click the button 👆)',
      });
    }

    return this.setState({
      playerSeq: playerSeq.concat(clickedTile),
      message: 'Great, you\'re doing fine. Just keep it going!',
      progress: {
        computerTotal: this.state.computerSeq.length,
        playerCurrent: this.state.progress.playerCurrent + 1,
      },
    }, () => {
      if (this.state.playerSeq.length === this.state.computerSeq.length) {
        this.setState({
          playerSeq: [],
          message: 'Well done! Thats how we roll. Now I go again...',
        });
        this.playComputerRound();
      }
    });
  }

  playComputerRound = () => {
    // Keep track of how many times the interval have been called
    let intervalCount = 0;
    const timeDiff = config.computerActiveButton;

    // Add a new tile to the sequence and set computerPlaying to true
    this.setState(() => {
      const newTile = randomInt(1, 4);
      return {
        computerSeq: this.state.computerSeq.concat(newTile),
        computerPlaying: true,
      };
    });

    // Instatiate the sequence
    const interval = setInterval(() => {
      const { computerSeq } = this.state;

      // If the there are still tiles left in the sequence, fetch them,
      // play a sound and activate a button.
      // Then add one call to the interval
      if (intervalCount < computerSeq.length) {
        this.activateButtonComputer(computerSeq[intervalCount]);
        intervalCount++;
      } else {
        // If there are no more tiles, clear the interval and prompt the user to
        // do exactly the same
        this.setState({
          computerPlaying: false,
          message: 'Now it\'s your turn. Do EXCACTLY as i did!',
          progress: {
            computerTotal: this.state.computerSeq.length,
            playerCurrent: 0,
          },
        });
        clearInterval(interval);
      }
    }, timeDiff);
  }

  activateButtonComputer = (tile) => {
    const timeDiff = config.computerActiveButton / 4 * 3;

    this.setState({ activeButton: tile });
    setTimeout(() => this.setState({ activeButton: undefined }), timeDiff);
  }

  render() {
    const {
      gameRunning,
      computerPlaying,
      message,
      activeButton,
      progress,
    } = this.state;

    return (
      <div className={styles.appContainer}>
        <Menu gameRunning={gameRunning} onMenuButtonClick={this.onMenuButtonClick} />
        <Message message={message} />
        <Game
          activeButton={activeButton}
          gamePlanDisabled={!gameRunning && !computerPlaying}
          onButtonClick={this.onPlayerButtonPress}
        />
        <Progress {...progress} />
      </div>
    );
  }
}
