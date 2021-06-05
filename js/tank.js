class Tank extends Phaser.GameObjects.Sprite {
  constructor(config) {
      super(config.scene, config.x, config.y, config.key, config.playerId)
     
      this.scene = config.scene
      this.key = config.key

      config.scene.physics.add.existing(this)
      this.body.setCollideWorldBounds(true)

      config.scene.add.existing(this)
      this.setScale(2)

      this.setInteractive({draggable: true})

      this.health = 100

  }

  explode() {
    this.anims.play('explode')
    // this.destroy()
  }

}