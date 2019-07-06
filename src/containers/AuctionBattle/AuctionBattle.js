import React, { Component } from 'react';
import Phaser from 'phaser';

import AuctionBattleScene from '../../scenes/AuctionBattleScene';

class AuctionBattle extends Component {

  componentDidMount() {
    const gameConfig = {
      parent: "aution-battle",
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: [ AuctionBattleScene ]
    }

    new Phaser.Game(gameConfig);
  }

  render() {
    return (
      <React.Fragment>
        <div id="aution-battle"></div>
        <h1>This is a test :D</h1>
      </React.Fragment>
    );
  }
}

export default AuctionBattle;
