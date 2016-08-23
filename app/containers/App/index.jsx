import React, { Component } from 'react';
import * as config from '../../config';

import styles from './styles.scss';

import GameAudio from '../../utils/GameAudio';
import randomInt from '../../utils/randomInt';

import {
  Menu,
  Message,
  Game,
  Progress,
} from '../../components';

import Hint from '../Hint';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computerSeq: [],
      playerSeq: [],
      gameRunning: false,
      computerPlaying: false,
      activeButton: undefined,
      strictMode: false,
      error: false,
      gameFinished: false,
      infinitePlay: false,
      showSettings: false,
      message: 'Let\'s get started! (Click the button 👆)',
      progress: {
        computerTotal: 0,
        playerCurrent: 0,
      },
    };

    this.audio = new GameAudio();
    this.onNewGameButtonClick = this.onNewGameButtonClick.bind(this);
    this.onSettingsButtonClick = this.onSettingsButtonClick.bind(this);
    this.onPlayerPressStart = this.onPlayerPressStart.bind(this);
    this.onPlayerPressEnd = this.onPlayerPressEnd.bind(this);
    this.playComputerRound = this.playComputerRound.bind(this);
    this.activateButton = this.activateButton.bind(this);
    this.deactiveButton = this.deactiveButton.bind(this);
  }

  componentDidMount() {
    let keyIsDown = false;

    const keyEvent = (fn, keyUpEvent) => (event) => {
      const { key } = event;
      const keyNum = Number(key);
      const predicate = keyNum > 0 && keyNum < 5;

      if (!predicate) return null;
      event.preventDefault();

      if (!keyIsDown || keyUpEvent) {
        keyIsDown = !keyIsDown;
        return fn(keyNum);
      }

      return null;
    };

    window.addEventListener('keydown', keyEvent(this.onPlayerPressStart, false));
    window.addEventListener('keyup', keyEvent(this.onPlayerPressEnd, true));
  }

  onNewGameButtonClick() {
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

  onSettingsButtonClick() {
    this.setState({ showSettings: !this.state.showSettings });
  }

  onPlayerPressStart(tile) { this.activateButton(tile); }

  onPlayerPressEnd(tile) {
    const {
      computerSeq,
      playerSeq,
      strictMode,
      infinitePlay,
    } = this.state;

    const playerSeqLength = playerSeq.length;
    const correspondingComputerTile = computerSeq[playerSeqLength];

    this.deactiveButton();

    if (correspondingComputerTile !== tile && strictMode) {
      return this.setState({
        playerSeq: [],
        computerSeq: [],
        activeButton: undefined,
        error: true,
        message: 'Gaah! Sorry that was wrong! Wan\'t to go at it again? (Click the button 👆)',
      });
    }

    if (correspondingComputerTile !== tile && !strictMode) {
      return this.setState({
        playerSeq: [],
        activateButton: undefined,
        error: true,
        message: 'Gaah! Wrong button. I\'ll play again so you can try!',
      }, () => this.playComputerRound(true));
    }

    return this.setState({
      playerSeq: playerSeq.concat(tile),
      activeButton: undefined,
      message: 'Great, you\'re doing fine. Just keep it going!',
      progress: {
        computerTotal: computerSeq.length,
        playerCurrent: this.state.progress.playerCurrent + 1,
      },
    }, () => {
      const finished = this.state.playerSeq.length === this.state.computerSeq.length;
      const finalRound = this.state.computerSeq.length === config.maxRounds;

      if (finished && finalRound && !infinitePlay) {
        return this.setState({
          message: 'Well done! You seem to have a master memory! Wan\'t to go again?',
          gameFinished: true,
        });
      }

      if (finished) {
        return this.setState({
          playerSeq: [],
          message: 'Well done! That\'s how we roll! Now I go again...',
        }, this.playComputerRound);
      }

      return null;
    });
  }

  playComputerRound(replay) {
    // Keep track of how many times the interval have been called
    let intervalCount = 0;
    const timeDiff = config.computerActiveButton;

    // Add a new tile to the sequence and set computerPlaying to true
    this.setState(() => {
      const newTile = randomInt(1, 4);
      return {
        computerSeq: replay ? this.state.computerSeq : this.state.computerSeq.concat(newTile),
        computerPlaying: true,
      };
    });

    // Instatiate the sequence
    const interval = setInterval(() => {
      const { computerSeq } = this.state;
      const tile = computerSeq[intervalCount];

      // If the there are still tiles left in the sequence, fetch them,
      // play a sound and activate a button.
      // Then add one call to the interval
      if (intervalCount < computerSeq.length) {
        this.activateButton(tile);

        setTimeout(() => {
          this.deactiveButton();
        }, timeDiff / 4 * 3);

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

  activateButton(tile) {
    this.setState({ activeButton: tile });
    this.audio.start(tile);
  }

  deactiveButton() {
    this.setState({ activeButton: undefined });
    this.audio.stop();
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
        <Menu
          gameRunning={gameRunning}
          onNewGameButtonClick={this.onNewGameButtonClick}
          onSettingsButtonClick={this.onSettingsButtonClick}
        />

        <Message message={message} />

        <Game
          activeButton={activeButton}
          gamePlanDisabled={!gameRunning && !computerPlaying}
          onButtonClickStart={this.onPlayerPressStart}
          onButtonClickEnd={this.onPlayerPressEnd}
        />

        <Progress {...progress} />

        <Hint />
      </div>
    );
  }
}
