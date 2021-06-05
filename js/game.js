// Create a config file for the game 

const config = {
  type: Phaser.AUTO,
  height: 600,
  width: 1200,
  physics: {
      default: 'arcade',
      arcade: { 
      debug: true,
      gravity: {y: 0} }
  },
  scene: Scene1
}

// Create a game
const game = new Phaser.Game(config)