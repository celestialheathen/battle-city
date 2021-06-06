class Item extends Phaser.GameObjects.Sprite {
  constructor(config) {
      super(config.scene, config.x, config.y, config.key)

      this.scene = config.scene
      this.key = config.key

      config.scene.add.existing(this)
      config.scene.physics.add.existing(this)
      this.body.setImmovable()
      this.setRandomPosition(0, 0, game.width, game.height)

      this.setScale(2)
  }
}